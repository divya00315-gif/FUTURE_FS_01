'use client';

import { useState } from 'react';
import { Project } from '@/lib/definitions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { PlusCircle } from 'lucide-react';
import { ProjectForm } from './ProjectForm';
import { ProjectsList } from './ProjectsList';

interface ProjectsTabProps {
  initialProjects: Project[];
}

export function ProjectsTab({ initialProjects }: ProjectsTabProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Manage Projects</CardTitle>
            <CardDescription>Add, edit, or delete your portfolio projects.</CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Project</DialogTitle>
                <DialogDescription>Fill in the details for your new project.</DialogDescription>
              </DialogHeader>
              <ProjectForm onFormSubmit={() => setIsDialogOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <ProjectsList initialProjects={initialProjects} />
      </CardContent>
    </Card>
  );
}
