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

export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export interface Quiz {
  beginner: Question[];
  intermediate: Question[];
}

export type QuizData = {
  [key: string]: Quiz;
};

export interface CollegeEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  organizer: string;
  upvotes: number;
  isRegistered: boolean;
  hasUpvoted: boolean;
  imageUrl: string;
  imageAiHint: string;
}
