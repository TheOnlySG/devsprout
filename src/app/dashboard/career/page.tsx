'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { BotMessageSquare, Loader2, BookCopy, Code, Lightbulb } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { careerPathRecommendation } from '@/ai/flows/career-path-recommendation';
import type { CareerPathRecommendationOutput } from '@/ai/flows/career-path-recommendation';
import { useCareer } from '@/contexts/career-context';
import { useRouter } from 'next/navigation';

const interestsOptions = [
  'Web Development',
  'Mobile App Development',
  'Artificial Intelligence & Machine Learning',
  'Game Development',
  'Cybersecurity',
  'Data Science & Analytics',
  'Cloud Computing & DevOps',
  'UI/UX Design',
];

const skillsOptions = [
  'Python',
  'JavaScript (React, Node.js)',
  'Java',
  'C++',
  'HTML/CSS',
  'SQL / Databases',
  'Problem Solving',
  'Git / Version Control',
];

const formSchema = z.object({
  interests: z.string({ required_error: 'Please select an interest.' }),
  skills: z.string({ required_error: 'Please select a skill.' }),
});

export default function CareerPage() {
  const { toast } = useToast();
  const router = useRouter();
  const { setRecommendation, setIsLoading, isLoading } = useCareer();
  const [result, setResult] = useState<CareerPathRecommendationOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const recommendationResult = await careerPathRecommendation(values);
      setResult(recommendationResult);
      setRecommendation(recommendationResult);
      toast({
        title: 'Roadmap Generated!',
        description: 'Your personalized career path is ready.',
      });
      router.push('/dashboard/my-career');
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem generating your career path. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto max-w-3xl py-8 animate-in fade-in-50 duration-500">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center">
            <BotMessageSquare className="w-8 h-8" />
          </div>
          <CardTitle className="mt-4 font-headline text-3xl">AI Career Guide</CardTitle>
          <CardDescription className="text-base">
            Answer a few questions and our AI will craft a personalized learning roadmap for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">What are your interests in Computer Science?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an interest" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {interestsOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">What is your strongest skill?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a skill" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {skillsOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating your path...
                  </>
                ) : (
                  'Generate My Career Path'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {result && !isLoading && (
        <Card className="mt-8 animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline">Your Recommended Path!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold flex items-center gap-2"><Lightbulb className="text-accent" /> Suggested Career Path</h3>
              <p>{result.suggestedPath}</p>
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2"><Code className="text-accent" /> Suggested Technologies</h3>
              <p>{result.suggestedTechnologies}</p>
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2"><BookCopy className="text-accent" /> Suggested Resources</h3>
              <p>{result.suggestedResources}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
