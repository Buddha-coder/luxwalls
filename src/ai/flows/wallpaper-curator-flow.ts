'use server';

/**
 * @fileOverview A wallpaper aesthetic curator AI agent.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const CuratorInputSchema = z.object({
  title: z.string(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
});

const CuratorOutputSchema = z.object({
  vibeDescription: z.string().describe("A poetic, luxury-oriented description of the wallpaper's mood."),
  pairingTip: z.string().describe("Advice on what device hardware (colors/cases) best suits this wallpaper."),
  curatorNote: z.string().describe("A short, punchy note from an elite visual curator."),
});

export type CuratorInput = z.infer<typeof CuratorInputSchema>;
export type CuratorOutput = z.infer<typeof CuratorOutputSchema>;

export async function getCuratorInsight(input: CuratorInput): Promise<CuratorOutput> {
  return curatorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'curatorInsightPrompt',
  input: { schema: CuratorInputSchema },
  output: { schema: CuratorOutputSchema },
  prompt: `You are an elite visual curator for LuxWalls, a premium digital gallery.
  
Analyze the following wallpaper asset and provide a high-end aesthetic critique. 
Your tone should be sophisticated, artistic, and minimal.

Title: {{{title}}}
Category: {{{category}}}
Tags: {{#each tags}}{{{this}}}, {{/each}}

Focus on how this wallpaper transforms the user's digital atmosphere.`,
});

const curatorFlow = ai.defineFlow(
  {
    name: 'curatorFlow',
    inputSchema: CuratorInputSchema,
    outputSchema: CuratorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
