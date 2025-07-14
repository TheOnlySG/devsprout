import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BotMessageSquare, ClipboardList, Trophy, BookUser, CalendarCheck2, BookCopy } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="animate-in fade-in-50 duration-500">
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="font-headline">Welcome, aspiring developer!</CardTitle>
              <CardDescription>
                Your journey into the world of code starts here. Let's grow together!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                DevSprout is your personal guide through the exciting landscape of software development. Explore career paths, test your knowledge, and climb the leaderboard.
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center justify-center p-6 bg-primary text-primary-foreground text-center">
             <Trophy className="w-12 h-12 text-accent" />
             <p className="text-2xl font-bold mt-2">2,500 Points</p>
             <p className="text-muted-foreground text-primary-foreground/80">Rank: #42</p>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-headline">AI Career Guide</CardTitle>
              <BotMessageSquare className="w-6 h-6 text-accent" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Confused about what to learn? Get a personalized roadmap from our AI career counselor.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/career">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-headline">My Career Path</CardTitle>
              <BookUser className="w-6 h-6 text-accent" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                View your generated roadmap, track your progress, and stay focused on your goals.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/my-career">View My Path <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-headline">Interactive Quizzes</CardTitle>
              <ClipboardList className="w-6 h-6 text-accent" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Test your knowledge, earn points, and solidify your understanding of key concepts.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/quizzes">Take a Quiz <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-headline">Campus Events</CardTitle>
              <CalendarCheck2 className="w-6 h-6 text-accent" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Discover workshops, hackathons, and social events happening on campus.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/events">Browse Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-headline">Book Swap</CardTitle>
              <BookCopy className="w-6 h-6 text-accent" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Find affordable textbooks or list your own to sell to fellow students.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/book-swap">Swap Books <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-headline">Leaderboard</CardTitle>
              <Trophy className="w-6 h-6 text-accent" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                See how you stack up against your peers. Climb the ranks!
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard/leaderboard">View Leaderboard <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
