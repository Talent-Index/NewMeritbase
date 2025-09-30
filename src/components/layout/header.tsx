import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { WalletConnect } from "@/components/wallet-connect";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">MeritBase</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/dashboard/freelancer" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Find Gigs
            </Link>
            <Link href="/dashboard/employer" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Post a Job
            </Link>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile nav could go here */}
          </div>
          <nav className="flex items-center">
            <ThemeToggle />
            <WalletConnect />
          </nav>
        </div>
      </div>
    </header>
  );
}
