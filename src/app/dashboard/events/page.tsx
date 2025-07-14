// src/app/dashboard/events/page.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { eventsData } from '@/lib/events-data';
import type { CollegeEvent } from '@/lib/types';
import { ArrowUp, Calendar, MapPin, User, Check, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export default function EventsPage() {
  const { toast } = useToast();
  const [events, setEvents] = useState<CollegeEvent[]>(eventsData);
  
  const handleUpvote = (id: number) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, upvotes: event.upvotes + 1, hasUpvoted: true } : event
    ));
  };

  const handleRegister = (id: number) => {
    setEvents(events.map(event =>
      event.id === id ? { ...event, isRegistered: true } : event
    ));
    toast({
      title: "Registration Successful!",
      description: "You're all set for the event. We've added it to your calendar (not really, but imagine we did!).",
    });
  };

  return (
    <div className="animate-in fade-in-50 duration-500 max-w-4xl mx-auto space-y-6">
       <div className="mb-8">
        <h1 className="font-headline text-3xl font-bold">Upcoming Events</h1>
        <p className="text-muted-foreground">Discover workshops, hackathons, and social events. Get involved!</p>
      </div>
      {events.map(event => (
        <Card key={event.id} className="shadow-md overflow-hidden hover:shadow-lg transition-shadow">
           <CardHeader className="p-0">
             <Image 
                src={event.imageUrl} 
                alt={event.title} 
                width={800} 
                height={300} 
                className="w-full h-48 object-cover"
                data-ai-hint={event.imageAiHint}
              />
          </CardHeader>
          <CardContent className="p-6">
             <CardTitle className="font-headline text-2xl mb-2">{event.title}</CardTitle>
             <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                </div>
                 <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Organized by {event.organizer}</span>
                </div>
             </div>
             <p className="text-card-foreground/90">{event.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center bg-secondary/30 p-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                onClick={() => handleUpvote(event.id)} 
                disabled={event.hasUpvoted}
                className={cn(event.hasUpvoted && "border-primary text-primary")}
                >
                <ArrowUp className={cn("mr-2", event.hasUpvoted && "text-primary")} />
                {event.hasUpvoted ? 'Upvoted' : 'Upvote'} ({event.upvotes})
              </Button>
            </div>

            {event.isRegistered ? (
               <Button variant="secondary" disabled>
                 <Check className="mr-2" />
                 Registered
               </Button>
            ) : (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Register Now</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Registration</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to register for "{event.title}"?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleRegister(event.id)}>
                    Yes, Register Me!
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
