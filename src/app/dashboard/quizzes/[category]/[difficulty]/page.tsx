'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { quizData } from '@/lib/quiz-data';
import type { Question } from '@/lib/types';
import { CheckCircle, XCircle, ArrowRight, RotateCw, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const categoryMap: { [key: string]: string } = {
  c: 'C',
  cpp: 'C++',
  python: 'Python',
  java: 'Java',
};

export default function QuizPage({ params }: { params: { category: string; difficulty: string } }) {
  const { category, difficulty } = params;

  const quizCategory = quizData[category.toLowerCase()];
  if (!quizCategory || (difficulty !== 'beginner' && difficulty !== 'intermediate')) {
    notFound();
  }
  const questions: Question[] = quizCategory[difficulty];
  const categoryTitle = categoryMap[category.toLowerCase()];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleAnswerSubmit = () => {
    if (!selectedAnswer) return;
    setIsAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  }

  if (showResults) {
    return (
      <div className="animate-in fade-in-50 duration-500 max-w-2xl mx-auto">
        <Card className="text-center shadow-lg">
          <CardHeader>
            <Trophy className="w-16 h-16 mx-auto text-yellow-400" />
            <CardTitle className="font-headline text-3xl mt-4">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl">Your Score</p>
            <p className="text-5xl font-bold text-primary my-2">{score} / {questions.length}</p>
            <p className="text-muted-foreground">You earned {score * 100} points!</p>
          </CardContent>
          <CardFooter className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={handleRestartQuiz}>
              <RotateCw className="mr-2" />
              Try Again
            </Button>
            <Button asChild variant="outline">
              <Link href="/dashboard/quizzes">
                Choose Another Quiz
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="animate-in fade-in-50 duration-500 max-w-2xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="font-headline text-2xl">{categoryTitle} Quiz</CardTitle>
            <div className="text-sm font-medium text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </div>
          </div>
          <Progress value={progress} />
        </CardHeader>
        <CardContent>
          <h2 className="text-lg font-semibold mb-6">{currentQuestion.questionText}</h2>
          <RadioGroup
            value={selectedAnswer ?? ''}
            onValueChange={setSelectedAnswer}
            disabled={isAnswered}
          >
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === option;
              const isCorrectAnswer = currentQuestion.correctAnswer === option;
              return (
                <Label
                  key={index}
                  className={cn(
                    "flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-colors",
                    "hover:bg-accent/50",
                    isAnswered && isCorrectAnswer && "border-green-500 bg-green-500/10",
                    isAnswered && isSelected && !isCorrectAnswer && "border-red-500 bg-red-500/10",
                    !isAnswered && isSelected && "border-primary"
                  )}
                >
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <span>{option}</span>
                  {isAnswered && isSelected && (
                    isCorrect ? <CheckCircle className="ml-auto text-green-500" /> : <XCircle className="ml-auto text-red-500" />
                  )}
                   {isAnswered && !isSelected && isCorrectAnswer && (
                     <CheckCircle className="ml-auto text-green-500" />
                  )}
                </Label>
              );
            })}
          </RadioGroup>
          {isAnswered && (
             <div className={cn("mt-4 p-3 rounded-md text-sm", isCorrect ? "bg-green-500/10 text-green-700" : "bg-red-500/10 text-red-700")}>
                {isCorrect ? "Correct!" : `Correct answer: ${currentQuestion.correctAnswer}`}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={isAnswered ? handleNextQuestion : handleAnswerSubmit}
            disabled={!selectedAnswer}
            className="w-full"
          >
            {isAnswered ? 'Next Question' : 'Check Answer'}
            <ArrowRight className="ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
