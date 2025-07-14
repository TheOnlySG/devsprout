import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { LeaderboardEntry } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Trophy } from "lucide-react";

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Alice Johnson", points: 15000 },
  { rank: 2, name: "Bob Williams", points: 13500 },
  { rank: 3, name: "Charlie Brown", points: 12000 },
  { rank: 4, name: "Diana Miller", points: 11500 },
  { rank: 5, name: "Ethan Garcia", points: 10800 },
  { rank: 6, name: "Fiona Davis", points: 9900 },
  { rank: 7, name: "George Rodriguez", points: 9200 },
  { rank: 8, name: "Hannah Wilson", points: 8500 },
  { rank: 9, name: "Ian Moore", points: 7800 },
  { rank: 10, name: "Jane Taylor", points: 7100 },
  { rank: 42, name: "You", points: 2500, isCurrentUser: true },
];

const getTrophyColor = (rank: number) => {
  if (rank === 1) return "text-yellow-400";
  if (rank === 2) return "text-gray-400";
  if (rank === 3) return "text-yellow-600";
  return "text-muted-foreground";
};

export default function LeaderboardPage() {
  return (
    <div className="animate-in fade-in-50 duration-500">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Leaderboard</CardTitle>
          <CardDescription>See who is leading the pack. Keep learning to climb the ranks!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Student</TableHead>
                <TableHead className="text-right">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((entry) => (
                <TableRow key={entry.rank} className={cn(entry.isCurrentUser && "bg-accent/50")}>
                  <TableCell className="font-medium text-lg">
                    <div className="flex items-center gap-2">
                       {entry.rank <= 3 ? <Trophy className={cn("w-5 h-5", getTrophyColor(entry.rank))} /> : <span className="w-5 h-5 text-center">{entry.rank}</span>}
                       {entry.rank > 3 && <span>{entry.rank}</span>}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={`https://placehold.co/40x40.png`} alt={entry.name} data-ai-hint="student avatar" />
                        <AvatarFallback>{entry.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{entry.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-primary">{entry.points.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
