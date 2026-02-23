'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { personalDetails, skills, projects as allProjects, adminUser, contactMessages as allMessages } from './data';
import { generateQualificationSummary, type GenerateQualificationSummaryInput } from '@/ai/flows/generate-qualification-summary-flow';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export type FormState = {
  message: string;
  status: 'idle' | 'success' | 'error';
};

export async function submitContactForm(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const validatedFields = contactFormSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    if (!validatedFields.success) {
      return {
        message: 'Invalid form data. Please check your inputs.',
        status: 'error',
      };
    }
    
    // In a real app, you would save this to a database.
    // For this demo, we'll just log it.
    console.log('New contact message:', validatedFields.data);

    revalidatePath('/');
    return {
      message: 'Thank you for your message! I will get back to you soon.',
      status: 'success',
    };
  } catch (e) {
    console.error(e);
    return {
      message: 'An unexpected error occurred. Please try again.',
      status: 'error',
    };
  }
}

export async function generateSummary() {
  const input: GenerateQualificationSummaryInput = {
    personalDetails: `Name: ${personalDetails.name}, Title: ${personalDetails.title}, Introduction: ${personalDetails.shortIntro}, About: ${personalDetails.about}`,
    skills: skills.map(s => s.name),
    projects: allProjects.map(p => ({
      title: p.title,
      description: p.description,
      technologyUsed: p.technologyUsed.join(', '),
      githubLink: p.githubLink,
    })),
  };

  const summary = await generateQualificationSummary(input);
  return summary;
}

// --- Admin Actions ---

const SESSION_COOKIE = 'portfolio-pro-session';

export async function login(formData: FormData) {
  const username = formData.get('username');
  const password = formData.get('password');

  if (username === adminUser.username && password === adminUser.password) {
    cookies().set(SESSION_COOKIE, 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    redirect('/admin/dashboard');
  } else {
    return { error: 'Invalid username or password' };
  }
}

export async function logout() {
  cookies().delete(SESSION_COOKIE);
  redirect('/admin');
}

export async function getProjects() {
    // In real app, fetch from database.
    return allProjects;
}

export async function getMessages() {
    // In real app, fetch from database.
    return allMessages;
}

const projectSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  technologyUsed: z.string().min(1, 'Technologies are required'),
  githubLink: z.string().url('Must be a valid URL'),
  imageUrl: z.string().url('Must be a valid URL'),
  imageHint: z.string().optional(),
});


export async function addProject(formData: FormData) {
  const validatedFields = projectSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten().fieldErrors);
    throw new Error('Invalid project data.');
  }
  
  // In real app, save to database
  console.log('Adding new project:', validatedFields.data);
  revalidatePath('/admin/dashboard');
  return { message: 'Project added successfully.' };
}

export async function updateProject(formData: FormData) {
    const validatedFields = projectSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success || !validatedFields.data.id) {
        console.error(validatedFields.error?.flatten().fieldErrors);
        throw new Error('Invalid project data.');
    }
  
  // In real app, update in database
  console.log('Updating project:', validatedFields.data);
  revalidatePath('/admin/dashboard');
  return { message: 'Project updated successfully.' };
}

export async function deleteProject(id: string) {
    if(!id) {
        throw new Error('Project ID is required.');
    }
  // In real app, delete from database
  console.log('Deleting project with ID:', id);
  revalidatePath('/admin/dashboard');
  return { message: 'Project deleted successfully.' };
}
