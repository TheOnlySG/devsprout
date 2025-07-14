'use server';

/**
 * @fileOverview Provides explanations for each element in the generated career roadmap.
 *
 * - roadmapExplanation - A function that generates explanations for the roadmap.
 * - RoadmapExplanationInput - The input type for the roadmapExplanation function.
 * - RoadmapExplanationOutput - The return type for the roadmapExplanation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RoadmapExplanationInputSchema = z.object({
  roadmap: z.array(z.string()).describe('The list of elements in the career roadmap.'),
});
export type RoadmapExplanationInput = z.infer<typeof RoadmapExplanationInputSchema>;

const RoadmapExplanationOutputSchema = z.object({
  explanations: z.array(z.string()).describe('The explanations for each element in the roadmap.'),
});
export type RoadmapExplanationOutput = z.infer<typeof RoadmapExplanationOutputSchema>;

export async function roadmapExplanation(input: RoadmapExplanationInput): Promise<RoadmapExplanationOutput> {
  return roadmapExplanationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'roadmapExplanationPrompt',
  input: {schema: RoadmapExplanationInputSchema},
  output: {schema: RoadmapExplanationOutputSchema},
  prompt: `You are an expert career counselor for first-year engineering students. For each element in the roadmap, provide a short, one-sentence explanation of why it is important for the student to learn. Return a list of explanations.

Roadmap: {{{roadmap}}}

Explanations:`, // Ensure this is valid Handlebars syntax
});

const roadmapExplanationFlow = ai.defineFlow(
  {
    name: 'roadmapExplanationFlow',
    inputSchema: RoadmapExplanationInputSchema,
    outputSchema: RoadmapExplanationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
