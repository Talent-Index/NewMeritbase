import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo.svg" alt="MeritBase" width={32} height={32} />
            <span className="hidden font-bold sm:inline-block">MeritBase</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </Link>
            <Link href="/dashboard/employer" className="transition-colors hover:text-foreground/80 text-foreground/60">
              For Employers
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild>
                <Link href="/dashboard/freelancer">Launch App</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
