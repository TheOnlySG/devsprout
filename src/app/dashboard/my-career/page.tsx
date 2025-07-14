'use client';

import { useCareer } from '@/contexts/career-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useEffect, useState } from 'react';
import { roadmapExplanation } from '@/ai/flows/roadmap-explanation';
import { CheckCircle, Circle, Loader2, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function MyCareerPage() {
  const { recommendation, isLoading: isRecommendationLoading } = useCareer();
  const [explanations, setExplanations] = useState<string[]>([]);
  const [isLoadingExplanations, setIsLoadingExplanations] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const technologies = recommendation?.suggestedTechnologies.split(',').map(t => t.trim()) || [];
  
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(() => Array(technologies.length).fill(false));

  useEffect(() => {
    if (recommendation && technologies.length > 0) {
      const fetchExplanations = async () => {
        setIsLoadingExplanations(true);
        setError(null);
        try {
          const result = await roadmapExplanation({ roadmap: technologies });
          setExplanations(result.explanations);
        } catch (e) {
          setError('Could not load detailed explanations. Please try again later.');
          console.error(e);
        } finally {
          setIsLoadingExplanations(false);
        }
      };
      fetchExplanations();
    }
  }, [recommendation]);
  
  const toggleStep = (index: number) => {
    const newCompletedSteps = [...completedSteps];
    newCompletedSteps[index] = !newCompletedSteps[index];
    setCompletedSteps(newCompletedSteps);
  }

  if (isRecommendationLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
        <p className="ml-2">Loading your career path...</p>
      </div>
    );
  }

  if (!recommendation) {
    return (
      <Card className="text-center animate-in fade-in-50 duration-500">
        <CardHeader>
          <CardTitle className="font-headline">No Career Path Found</CardTitle>
          <CardDescription>
            You haven't generated a career path yet. Let our AI guide help you!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href="/dashboard/career">Generate Your Path</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in-50 duration-500">
      <Card>
        <CardHeader>
          <Badge variant="default" className="w-fit mb-2 bg-accent text-accent-foreground">{recommendation.suggestedPath}</Badge>
          <CardTitle className="font-headline text-3xl">Your Personalized Career Path</CardTitle>
          <CardDescription>Follow these steps to achieve your goal. Mark steps as complete to track your progress.</CardDescription>
        </CardHeader>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Learning Roadmap</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoadingExplanations && (
            <div className="flex items-center text-muted-foreground">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading explanations...
            </div>
          )}
          {error && (
            <div className="flex items-center text-destructive">
               <AlertTriangle className="mr-2 h-4 w-4" />
               {error}
            </div>
          )}
          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-card/80 transition-colors">
                 <button onClick={() => toggleStep(index)} className="mt-1 focus:outline-none focus:ring-2 focus:ring-ring rounded-full">
                  {completedSteps[index] ? <CheckCircle className="w-6 h-6 text-green-500" /> : <Circle className="w-6 h-6 text-muted-foreground" />}
                 </button>
                 <div className="flex-1">
                    <h3 className={`text-lg font-semibold ${completedSteps[index] ? 'line-through text-muted-foreground' : ''}`}>{tech}</h3>
                    {explanations[index] && <p className="text-sm text-muted-foreground mt-1">{explanations[index]}</p>}
                 </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Learning Resources</CardTitle>
          <CardDescription>Here are some resources to get you started.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{recommendation.suggestedResources}</p>
        </CardContent>
      </Card>
    </div>
  );
}
