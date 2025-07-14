import type { CollegeEvent } from './types';

export const eventsData: CollegeEvent[] = [
  {
    id: 1,
    title: 'Introduction to AI & Machine Learning Workshop',
    description: 'Join us for a hands-on workshop covering the fundamentals of AI and Machine Learning. No prior experience required! We will build a simple prediction model from scratch.',
    date: 'October 26, 2024',
    location: 'Engineering Hall, Room 301',
    organizer: 'AI Student Club',
    upvotes: 128,
    isRegistered: false,
    hasUpvoted: false,
    imageUrl: 'https://placehold.co/800x300.png',
    imageAiHint: 'artificial intelligence'
  },
  {
    id: 2,
    title: 'Fall Hackathon 2024',
    description: 'The annual Fall Hackathon is here! Form a team, build a cool project in 24 hours, and win amazing prizes. Food, drinks, and mentorship provided.',
    date: 'November 9-10, 2024',
    location: 'Tech Innovation Center',
    organizer: 'Computer Science Dept.',
    upvotes: 256,
    isRegistered: false,
    hasUpvoted: false,
    imageUrl: 'https://placehold.co/800x300.png',
    imageAiHint: 'hackathon event'
  },
  {
    id: 3,
    title: 'Guest Lecture: Life as a Software Engineer at Google',
    description: 'Hear from a senior software engineer at Google about their career journey, day-to-day work, and tips for students aspiring to work in Big Tech. Q&A session included.',
    date: 'November 15, 2024',
    location: 'Main Auditorium',
    organizer: 'Career Services',
    upvotes: 98,
    isRegistered: true,
    hasUpvoted: true,
    imageUrl: 'https://placehold.co/800x300.png',
    imageAiHint: 'tech conference'
  },
   {
    id: 4,
    title: 'Cybersecurity Capture The Flag (CTF) Event',
    description: 'Test your hacking skills in a fun and competitive environment. Challenges range from beginner to advanced. Great for learning about web security, reverse engineering, and more.',
    date: 'December 2, 2024',
    location: 'Online',
    organizer: 'Cybersecurity Club',
    upvotes: 72,
    isRegistered: false,
    hasUpvoted: false,
    imageUrl: 'https://placehold.co/800x300.png',
    imageAiHint: 'cyber security'
  },
];
