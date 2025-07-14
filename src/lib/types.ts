export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  isCurrentUser?: boolean;
}

export interface QuizCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

export interface UserProfile {
  name: string;
  email: string;
  linkedinUrl: string;
  points: number;
  rank: number;
  avatarUrl: string;
}
