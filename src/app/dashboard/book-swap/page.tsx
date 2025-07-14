// src/app/dashboard/book-swap/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { bookSwapData } from '@/lib/book-swap-data';
import type { BookListing } from '@/lib/types';
import { Search, Tag, DollarSign, BookUp, Handshake, Phone, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BookSwapPage() {
  const { toast } = useToast();
  const [books, setBooks] = useState<BookListing[]>(bookSwapData);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.course?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePostBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newBook: BookListing = {
        id: books.length + 1,
        title: formData.get('title') as string,
        author: formData.get('author') as string,
        price: formData.get('price') === 'Free' ? 'Free' : parseFloat(formData.get('price') as string),
        sellerName: 'You',
        sellerContact: formData.get('contact') as string,
        imageUrl: 'https://placehold.co/300x400.png',
        imageAiHint: 'book cover',
        course: formData.get('course') as string,
    };
    setBooks([newBook, ...books]);
    toast({
        title: 'Book Posted!',
        description: `"${newBook.title}" is now listed for swapping.`,
    });
  };

  return (
    <div className="animate-in fade-in-50 duration-500 space-y-8">
      <Card className="shadow-md">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="font-headline text-3xl">Book Swap</CardTitle>
              <CardDescription>
                Find textbooks from fellow students or list your own to sell.
              </CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <BookUp className="mr-2" />
                  Post a Book
                </Button>
              </DialogTrigger>
              <DialogContent>
                <form onSubmit={handlePostBook}>
                  <DialogHeader>
                    <DialogTitle>List Your Book</DialogTitle>
                    <DialogDescription>
                      Fill out the details below to list your textbook.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="title">Book Title</Label>
                      <Input id="title" name="title" required />
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="author">Author</Label>
                      <Input id="author" name="author" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="course">Relevant Course (e.g., CS101)</Label>
                      <Input id="course" name="course" />
                    </div>
                     <div className="grid gap-2">
                      <Label htmlFor="price">Price ($ or "Free")</Label>
                      <Input id="price" name="price" required placeholder="e.g., 25 or Free" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="contact">Your Contact Info (Email or Phone)</Label>
                      <Input id="contact" name="contact" required />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                       <Button type="submit">Post Listing</Button>
                    </DialogClose>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by title, author, or course code..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <Image
                src={book.imageUrl}
                alt={book.title}
                width={300}
                height={400}
                className="w-full h-64 object-cover"
                data-ai-hint={book.imageAiHint}
              />
            </CardHeader>
            <CardContent className="p-4 flex-grow flex flex-col">
              {book.course && <Badge variant="secondary" className="w-fit mb-2">{book.course}</Badge>}
              <CardTitle className="font-headline text-lg mb-1 leading-tight">{book.title}</CardTitle>
              <p className="text-sm text-muted-foreground mb-4">{book.author}</p>
              
              <div className="mt-auto space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Tag className="w-4 h-4 text-accent" />
                  <p>Sold by: <span className="font-medium">{book.sellerName}</span></p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                    <DollarSign className="w-4 h-4 text-accent" />
                    <p>{typeof book.price === 'number' ? `$${book.price.toFixed(2)}` : 'Free'}</p>
                </div>
              </div>

            </CardContent>
            <CardFooter className="p-4 bg-secondary/30">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="w-full">
                    <Handshake className="mr-2" /> Interested
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>You're Interested!</AlertDialogTitle>
                    <AlertDialogDescription>
                      To arrange the swap, please contact the seller directly using the information below. This does not reserve the book.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="p-4 my-4 bg-muted rounded-lg text-center">
                     <p className="text-sm text-muted-foreground">Contact <span className="font-semibold text-foreground">{book.sellerName}</span> at:</p>
                     <div className="flex items-center justify-center gap-2 mt-2 font-semibold text-lg text-primary">
                        {book.sellerContact.includes('@') ? <Mail /> : <Phone />}
                        <span>{book.sellerContact}</span>
                     </div>
                  </div>
                  <AlertDialogFooter>
                    <AlertDialogAction>Got it, thanks!</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        ))}
      </div>
       {filteredBooks.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-medium">No Books Found</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Your search for "{searchTerm}" didn't return any results. Try a different search.
              </p>
            </CardContent>
          </Card>
        )}
    </div>
  );
}
