import { Icons } from "@/components/icons";
import { Twitter, Github, Linkedin } from 'lucide-react';
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30 text-muted-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
                <Icons.logo className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">MeritBase</span>
            </div>
            <p className="text-sm">
                © {new Date().getFullYear()} MeritBase, Inc. All Rights Reserved.
            </p>
             <div className="flex items-center gap-4">
                <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Twitter className="h-5 w-5" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Github className="h-5 w-5" />
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                    <Linkedin className="h-5 w-5" />
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
