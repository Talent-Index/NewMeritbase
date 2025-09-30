import type {Metadata} from 'next';
import './globals.css';
import {Providers} from '@/app/providers';
import {Header} from '@/components/layout/header';
import {Footer} from '@/components/layout/footer';
import {Toaster} from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'MeritBase - Decentralized Gig Economy Matching',
  description:
    'MeritBase is a full-stack Web3 application for decentralized gig economy matching, combining blockchain, AI, and a professional CVWallet system.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
