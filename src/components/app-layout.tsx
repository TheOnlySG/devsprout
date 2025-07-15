
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BookUser,
  BotMessageSquare,
  CalendarCheck2,
  ClipboardList,
  Home,
  LayoutDashboard,
  Trophy,
  User,
  BookCopy,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Header } from '@/components/header';
import { Logo } from './icons';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/career', label: 'AI Career Guide', icon: BotMessageSquare },
  { href: '/dashboard/my-career', label: 'My Career Path', icon: BookUser },
  { href: '/dashboard/quizzes', label: 'Quizzes', icon: ClipboardList },
  { href: '/dashboard/events', label: 'Events', icon: CalendarCheck2 },
  { href: '/dashboard/book-swap', label: 'Book Swap', icon: BookCopy },
  { href: '/dashboard/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
];

function MainAppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2 p-2">
            <Logo className="size-8 text-primary" />
            <h1 className="font-headline text-lg font-bold text-primary">
              DevSprout
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                  onClick={() => setOpenMobile(false)}
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <Header />
        <main className="flex-1 p-4 md:p-6 lg:p-8">{children}</main>
      </SidebarInset>
    </>
  );
}


export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
       <MainAppLayout>{children}</MainAppLayout>
    </SidebarProvider>
  );
}
