'use server';
/**
 * @fileOverview AI-powered professional summary enhancement flow.
 *
 * - aiEnhanceSummary - A function to rewrite a user's professional summary.
 * - AIEnhanceSummaryInput - The input type for the aiEnhanceSummary function.
 * - AIEnhanceSummaryOutput - The return type for the aiEnhanceSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIEnhanceSummaryInputSchema = z.object({
  summary: z.string().describe('The user-provided professional summary.'),
});
export type AIEnhanceSummaryInput = z.infer<typeof AIEnhanceSummaryInputSchema>;

const AIEnhanceSummaryOutputSchema = z.object({
  enhancedSummary: z.string().describe('The AI-enhanced professional summary.'),
});
export type AIEnhanceSummaryOutput = z.infer<typeof AIEnhanceSummaryOutputSchema>;

export async function aiEnhanceSummary(input: AIEnhanceSummaryInput): Promise<AIEnhanceSummaryOutput> {
  return aiEnhanceSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiEnhanceSummaryPrompt',
  input: {schema: AIEnhanceSummaryInputSchema},
  output: {schema: AIEnhanceSummaryOutputSchema},
  prompt: `You are an expert career coach and professional copywriter.
Rewrite the following professional summary to make it more impactful, professional, and appealing to potential employers.
Focus on using strong action verbs, quantifiable achievements if possible, and a confident tone. Keep it concise, around 3-4 sentences.

Original Summary:
"{{{summary}}}"

Return only the enhanced summary in the 'enhancedSummary' field.
`,
});

const aiEnhanceSummaryFlow = ai.defineFlow(
  {
    name: 'aiEnhanceSummaryFlow',
    inputSchema: AIEnhanceSummaryInputSchema,
    outputSchema: AIEnhanceSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
