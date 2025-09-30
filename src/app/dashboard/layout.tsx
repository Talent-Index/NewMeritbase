'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, User, LayoutDashboard, Settings, Bot } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const navItems = [
  { href: '/dashboard/employer', icon: Briefcase, label: 'Employer' },
  { href: '/dashboard/freelancer', icon: User, label: 'Freelancer' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isEmployer = pathname.startsWith('/dashboard/employer');
  const isFreelancer = pathname.startsWith('/dashboard/freelancer');

  const dashboardNav = isEmployer ? 
    [
        { href: '/dashboard/employer', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/dashboard/employer/post-job', icon: Briefcase, label: 'Post Job' },
    ] : 
    [
        { href: '/dashboard/freelancer', icon: LayoutDashboard, label: 'Dashboard' },
        { href: '/dashboard/freelancer/profile', icon: User, label: 'My Profile' },
        { href: '/dashboard/freelancer/matched-gigs', icon: Bot, label: 'Matched Gigs' },
        { href: '/dashboard/freelancer/settings', icon: Settings, label: 'Settings' },
    ];


  return (
    <TooltipProvider>
      <div className="flex min-h-[calc(100vh-3.5rem)]">
        <aside className="hidden w-16 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 py-4">
            {navItems.map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
                      pathname.startsWith(item.href) && 'bg-accent text-accent-foreground'
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </aside>
        <div className="flex-1 bg-muted/30">
          {children}
        </div>
      </div>
    </TooltipProvider>
  );
}
