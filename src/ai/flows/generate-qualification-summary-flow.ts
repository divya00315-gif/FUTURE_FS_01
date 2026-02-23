'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating a compelling summary of qualifications
 * based on personal details, skills, and project descriptions.
 *
 * - generateQualificationSummary - A function that triggers the qualification summary generation process.
 * - GenerateQualificationSummaryInput - The input type for the generateQualificationSummary function.
 * - GenerateQualificationSummaryOutput - The return type for the generateQualificationSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectSchema = z.object({
  title: z.string().describe('The title of the project.'),
  description: z.string().describe('A brief description of the project.'),
  technologyUsed: z.string().describe('Technologies used in the project.'),
  githubLink: z.string().url().optional().describe('Optional GitHub link for the project.'),
});

const GenerateQualificationSummaryInputSchema = z.object({
  personalDetails: z.string().describe('A summary of the portfolio owner\'s background and career aspirations.'),
  skills: z.array(z.string()).describe('A list of technical and soft skills.'),
  projects: z.array(ProjectSchema).describe('A list of projects with their details.'),
});
export type GenerateQualificationSummaryInput = z.infer<typeof GenerateQualificationSummaryInputSchema>;

const GenerateQualificationSummaryOutputSchema = z.object({
  qualificationSummary: z.string().describe('A compelling summary of the portfolio owner\'s qualifications.'),
});
export type GenerateQualificationSummaryOutput = z.infer<typeof GenerateQualificationSummaryOutputSchema>;

export async function generateQualificationSummary(input: GenerateQualificationSummaryInput): Promise<GenerateQualificationSummaryOutput> {
  return generateQualificationSummaryFlow(input);
}

const generateQualificationSummaryPrompt = ai.definePrompt({
  name: 'generateQualificationSummaryPrompt',
  input: {schema: GenerateQualificationSummaryInputSchema},
  output: {schema: GenerateQualificationSummaryOutputSchema},
  prompt: `You are an expert resume writer and career coach. Your task is to synthesize the provided personal details, skills, and project descriptions into a compelling summary of qualifications for a professional resume.

Focus on highlighting the most relevant experiences and achievements, demonstrating impact and value.

Personal Details:
{{{personalDetails}}}

Skills:
{{#each skills}}- {{{this}}}
{{/each}}

Projects:
{{#each projects}}
Project Title: {{{this.title}}}
Description: {{{this.description}}}
Technologies Used: {{{this.technologyUsed}}}
{{#if this.githubLink}}GitHub: {{{this.githubLink}}}{{/if}}

{{/each}}

Based on the above information, compose a concise, impactful, and professional summary of qualifications.`,
});

const generateQualificationSummaryFlow = ai.defineFlow(
  {
    name: 'generateQualificationSummaryFlow',
    inputSchema: GenerateQualificationSummaryInputSchema,
    outputSchema: GenerateQualificationSummaryOutputSchema,
  },
  async input => {
    const {output} = await generateQualificationSummaryPrompt(input);
    return output!;
  }
);
