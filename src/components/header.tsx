'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { LogOut, PanelLeft, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/dashboard/career', label: 'AI Career Guide' },
  { href: '/dashboard/my-career', label: 'My Career Path' },
  { href: '/dashboard/quizzes', label: 'Quizzes' },
  { href: '/dashboard/events', label: 'Events' },
  { href: '/dashboard/book-swap', label: 'Book Swap' },
  { href: '/dashboard/leaderboard', label: 'Leaderboard' },
  { href: '/dashboard/profile', label: 'Profile' },
];

export function Header() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const currentPage = navItems.find((item) => item.href === pathname);

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="md:hidden">
        <SidebarTrigger asChild>
          <Button variant="ghost" size="icon">
            <PanelLeft />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
        </SidebarTrigger>
      </div>
      <h1 className="hidden text-xl font-semibold md:block font-headline">
        {currentPage?.label || 'DevSprout'}
      </h1>

      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://placehold.co/100x100.png" alt="@student" data-ai-hint="student avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">First-year Dev</p>
                <p className="text-xs leading-none text-muted-foreground">
                  student@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile">
                <User />
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
