import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { QuizCategory } from "@/lib/types";
import { Code, ArrowRight } from "lucide-react";
import Link from "next/link";

const quizCategories: QuizCategory[] = [
  {
    title: "C",
    description: "Test your knowledge of the foundational C programming language.",
    icon: Code,
    href: "/dashboard/quizzes/c"
  },
  {
    title: "C++",
    description: "Challenge yourself with questions about C++ features and concepts.",
    icon: Code,
    href: "/dashboard/quizzes/cpp"
  },
  {
    title: "Python",
    description: "Assess your skills in Python, from syntax to data structures.",
    icon: Code,
    href: "/dashboard/quizzes/python"
  },
  {
    title: "Java",
    description: "How well do you know Java's object-oriented principles? Find out.",
    icon: Code,
    href: "/dashboard/quizzes/java"
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
                <Button asChild className="w-full">
                    <Link href={category.href}>
                        Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
