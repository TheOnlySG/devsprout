import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { UserProfile } from "@/lib/types";
import { Linkedin, Mail, Trophy, Star, Edit } from "lucide-react";

const userProfile: UserProfile = {
  name: "First-year Dev",
  email: "student@example.com",
  linkedinUrl: "https://www.linkedin.com/in/example",
  points: 2500,
  rank: 42,
  avatarUrl: "https://placehold.co/100x100.png"
};

export default function ProfilePage() {
  return (
    <div className="animate-in fade-in-50 duration-500 max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="relative">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-background shadow-md">
              <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} data-ai-hint="student avatar" />
              <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <CardTitle className="font-headline text-3xl">{userProfile.name}</CardTitle>
              <div className="flex items-center gap-4 mt-2 text-muted-foreground justify-center md:justify-start">
                 <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4"/>
                    <span>{userProfile.email}</span>
                 </div>
                 <a href={userProfile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4"/>
                    <span>LinkedIn</span>
                 </a>
              </div>
            </div>
          </div>
          <Button variant="outline" size="icon" className="absolute top-4 right-4">
             <Edit className="h-4 w-4" />
             <span className="sr-only">Edit Profile</span>
          </Button>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-center">
                <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-primary">
                        <Star className="w-6 h-6 text-accent"/>
                        <p className="text-2xl font-bold">{userProfile.points.toLocaleString()}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Total Points</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center justify-center gap-2 text-primary">
                        <Trophy className="w-6 h-6 text-accent"/>
                        <p className="text-2xl font-bold">#{userProfile.rank}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">Leaderboard Rank</p>
                </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-headline font-semibold mb-4">Completed Certifications</h3>
              <div className="text-center p-8 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">You haven't earned any certifications yet. Keep learning on your career path to unlock them!</p>
                <Button variant="link" asChild className="mt-2">
                  <a href="/dashboard/my-career">Go to My Career Path</a>
                </Button>
              </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
