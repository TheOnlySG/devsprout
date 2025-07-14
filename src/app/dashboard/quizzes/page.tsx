import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { QuizCategory } from "@/lib/types";
import { Code, Database, Globe, Cpu, ArrowRight } from "lucide-react";

const quizCategories: QuizCategory[] = [
  {
    title: "JavaScript Basics",
    description: "Test your fundamental knowledge of JavaScript, from variables to functions.",
    icon: Code,
    href: "#"
  },
  {
    title: "Web Development",
    description: "Challenge yourself with questions about HTML, CSS, and the DOM.",
    icon: Globe,
    href: "#"
  },
  {
    title: "Data Structures",
    description: "How well do you know arrays, linked lists, and trees? Find out now.",
    icon: Database,
    href: "#"
  },
  {
    title: "Algorithms",
    description: "Assess your problem-solving skills with algorithmic challenges.",
    icon: Cpu,
    href: "#"
  },
];

export default function QuizzesPage() {
  return (
    <div className="animate-in fade-in-50 duration-500">
      <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold">Quizzes</h1>
        <p className="text-muted-foreground">Select a category to start a quiz, earn points, and climb the leaderboard.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {quizCategories.map((category) => (
          <Card key={category.title} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader className="flex-row items-start gap-4 space-y-0">
               <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <category.icon className="w-6 h-6" />
               </div>
               <div>
                  <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
               </div>
            </CardHeader>
            <CardContent className="mt-auto">
               <Button className="w-full">
                  Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
               </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
