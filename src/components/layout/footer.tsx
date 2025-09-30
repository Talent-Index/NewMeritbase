import { Icons } from "@/components/icons";
import { Twitter, Github, Linkedin } from 'lucide-react';
import Link from "next/link";

const links = {
  features: [
    { name: 'AI Matching', href: '#' },
    { name: 'CVWallet', href: '#' },
    { name: 'Verified Profiles', href: '#' },
    { name: 'On-Chain Reputation', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};


export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1 flex flex-col space-y-4">
             <Link href="/" className="flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="font-bold">MeritBase</span>
             </Link>
             <p className="text-sm text-muted-foreground">The future of work, built on merit and transparency.</p>
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
          <div>
            <h3 className="font-semibold">Features</h3>
            <ul className="mt-4 space-y-2">
              {links.features.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
            <p className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} MeritBase, Inc. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
