import Image from "next/image";
import { Twitter, Github, Linkedin } from 'lucide-react';
import Link from "next/link";

const links = {
  primary: [
    { name: 'Features', href: '#' },
    { name: 'For Employers', href: '#' },
    { name: 'CVWallet', href: '#' },
    { name: 'Pricing', href: '#' },
  ],
  secondary: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};


export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
             <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.svg" alt="MeritBase" width={32} height={32} />
                <span className="font-bold">MeritBase</span>
             </Link>
             <p className="text-sm text-muted-foreground">The future of work, powered by merit.</p>
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
            <h3 className="font-semibold">Primary</h3>
            <ul className="mt-4 space-y-2">
              {links.primary.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Secondary</h3>
            <ul className="mt-4 space-y-2">
              {links.secondary.map((link) => (
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
                © {new Date().getFullYear()} MeritBase. All Rights Reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
