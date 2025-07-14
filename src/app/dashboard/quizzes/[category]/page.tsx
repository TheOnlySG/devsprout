import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, GraduationCap, School } from "lucide-react";
import { quizData } from "@/lib/quiz-data";
import { notFound } from "next/navigation";

const categoryMap: { [key: string]: string } = {
  c: "C",
  cpp: "C++",
  python: "Python",
  java: "Java",
};

export default function QuizDifficultyPage({ params }: { params: { category: string } }) {
  const { category } = params;
  const categoryTitle = categoryMap[category.toLowerCase()];

  if (!categoryTitle || !quizData[category.toLowerCase()]) {
    notFound();
  }

  return (
    <div className="animate-in fade-in-50 duration-500 max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="font-headline text-3xl">Select Your Level: {categoryTitle}</CardTitle>
          <CardDescription>Choose your difficulty to start the quiz.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href={`/dashboard/quizzes/${category}/beginner`}>
            <Card className="hover:shadow-md hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <School className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Beginner</h3>
                <p className="text-sm text-muted-foreground">For those just starting out.</p>
                <Button variant="outline" className="mt-4">
                  Start Beginner Quiz <ArrowRight className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href={`/dashboard/quizzes/${category}/intermediate`}>
            <Card className="hover:shadow-md hover:border-primary transition-all">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 mx-auto text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Intermediate</h3>
                <p className="text-sm text-muted-foreground">For those with some experience.</p>
                <Button variant="outline" className="mt-4">
                  Start Intermediate Quiz <ArrowRight className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
