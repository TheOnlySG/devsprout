'use server';

/**
 * @fileOverview Provides personalized career path recommendations for first-year students based on their interests and skills.
 *
 * - careerPathRecommendation - A function that takes student's interests and skills and returns a personalized career path.
 * - CareerPathRecommendationInput - The input type for the careerPathRecommendation function.
 * - CareerPathRecommendationOutput - The return type for the careerPathRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CareerPathRecommendationInputSchema = z.object({
  interests: z
    .string()
    .describe('The student interests in the field of computer science.'),
  skills: z
    .string()
    .describe('The student skills in the field of computer science.'),
});
export type CareerPathRecommendationInput = z.infer<
  typeof CareerPathRecommendationInputSchema
>;

const CareerPathRecommendationOutputSchema = z.object({
  suggestedPath: z
    .string()
    .describe('The career path most suitable for the student.'),
  suggestedTechnologies: z
    .string()
    .describe('The technologies required for the suggested career path.'),
  suggestedResources: z
    .string()
    .describe('The resources to learn the suggested technologies.'),
});
export type CareerPathRecommendationOutput = z.infer<
  typeof CareerPathRecommendationOutputSchema
>;

export async function careerPathRecommendation(
  input: CareerPathRecommendationInput
): Promise<CareerPathRecommendationOutput> {
  return careerPathRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'careerPathRecommendationPrompt',
  input: {schema: CareerPathRecommendationInputSchema},
  output: {schema: CareerPathRecommendationOutputSchema},
  prompt: `You are a career counselor for first-year engineering students. Based on their interests and skills, you will provide a personalized career path recommendation. You will also suggest the technologies required for the suggested career path and the resources to learn those technologies.

Student Interests: {{{interests}}}
Student Skills: {{{skills}}}

Give the response in the following format:
Suggested Career Path: <career path>
Suggested Technologies: <technologies>
Suggested Resources: <resources>`,
});

const careerPathRecommendationFlow = ai.defineFlow(
  {
    name: 'careerPathRecommendationFlow',
    inputSchema: CareerPathRecommendationInputSchema,
    outputSchema: CareerPathRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
