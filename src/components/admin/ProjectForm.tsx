'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { addProject, updateProject } from '@/lib/actions';
import { Project } from '@/lib/definitions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const projectFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  technologyUsed: z.string().min(1, 'Technologies are required (comma-separated)'),
  githubLink: z.string().url('Must be a valid URL'),
  imageUrl: z.string().url('Must be a valid URL'),
  imageHint: z.string().optional(),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

interface ProjectFormProps {
  project?: Project | null;
  onFormSubmit: () => void;
}

export function ProjectForm({ project, onFormSubmit }: ProjectFormProps) {
  const { toast } = useToast();
  const isEditMode = !!project;

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: project?.title || '',
      description: project?.description || '',
      technologyUsed: project?.technologyUsed.join(', ') || '',
      githubLink: project?.githubLink || '',
      imageUrl: project?.imageUrl || '',
      imageHint: project?.imageHint || '',
    },
  });
  
  const {formState: { isSubmitting }} = form;

  const onSubmit = async (data: ProjectFormValues) => {
    const formData = new FormData();
    if(project?.id) formData.append('id', project.id);
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      if (isEditMode) {
        await updateProject(formData);
        toast({ title: 'Success', description: 'Project updated successfully.' });
      } else {
        await addProject(formData);
        toast({ title: 'Success', description: 'Project added successfully.' });
      }
      onFormSubmit();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: `Failed to ${isEditMode ? 'update' : 'add'} project.`,
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField name="title" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )}/>
        <FormField name="description" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Description</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
        )}/>
        <FormField name="technologyUsed" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Technologies (comma-separated)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )}/>
        <FormField name="githubLink" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>GitHub Link</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )}/>
        <FormField name="imageUrl" control={form.control} render={({ field }) => (
          <FormItem><FormLabel>Image URL</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
        )}/>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Project'}
        </Button>
      </form>
    </Form>
  );
}
