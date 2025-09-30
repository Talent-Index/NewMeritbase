'use server';
/**
 * @fileOverview AI-powered freelancer shortlisting flow.
 *
 * - aiShortlistFreelancers - A function to shortlist freelancers for a job posting.
 * - AIShortlistFreelancersInput - The input type for the aiShortlistFreelancers function.
 * - AIShortlistFreelancersOutput - The return type for the aiShortlistFreelancers function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIShortlistFreelancersInputSchema = z.object({
  jobDescription: z.string().describe('The job description for which freelancers need to be shortlisted.'),
  freelancerProfiles: z.array(z.string()).describe('An array of freelancer profiles to consider.'),
  numberOfFreelancers: z.number().describe('The number of freelancers to shortlist.'),
});
export type AIShortlistFreelancersInput = z.infer<typeof AIShortlistFreelancersInputSchema>;

const AIShortlistFreelancersOutputSchema = z.object({
  shortlistedFreelancers: z.array(z.string()).describe('An array of shortlisted freelancer profiles.'),
});
export type AIShortlistFreelancersOutput = z.infer<typeof AIShortlistFreelancersOutputSchema>;

export async function aiShortlistFreelancers(input: AIShortlistFreelancersInput): Promise<AIShortlistFreelancersOutput> {
  return aiShortlistFreelancersFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiShortlistFreelancersPrompt',
  input: {schema: AIShortlistFreelancersInputSchema},
  output: {schema: AIShortlistFreelancersOutputSchema},
  prompt: `You are an AI assistant helping to shortlist freelancers for a job posting.

Given the following job description:

{{{jobDescription}}}

And the following freelancer profiles:

{{#each freelancerProfiles}}
- {{{this}}}
{{/each}}

Shortlist the top {{numberOfFreelancers}} freelancers who are most suitable for the job.

Return only the shortlisted freelancer profiles in an array.
`,
});

const aiShortlistFreelancersFlow = ai.defineFlow(
  {
    name: 'aiShortlistFreelancersFlow',
    inputSchema: AIShortlistFreelancersInputSchema,
    outputSchema: AIShortlistFreelancersOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
