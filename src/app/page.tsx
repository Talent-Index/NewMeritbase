import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Bot, Users } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Decentralized CVWallet',
    description: 'Create and manage a portable, verifiable CV on the blockchain. Your data, your control.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Verified Employer Profiles',
    description: 'Connect with legitimate companies whose identities are verified on-chain, reducing fraud.',
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: 'AI-Assisted Job Matching',
    description: 'Our intelligent algorithms match your skills with the perfect gig, saving you time and effort.',
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-[100dvh] bg-background text-foreground overflow-hidden">
      
      <section className="relative w-full py-20 md:py-32 lg:py-40 flex items-center justify-center">
        <div className="container px-4 md:px-6 z-10">
          <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  The Future of Work is Decentralized
                </h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                  MeritBase connects top talent with leading companies through a secure, transparent, and AI-powered gig economy platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/dashboard/freelancer">Find a Gig</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="font-semibold">
                  <Link href="/dashboard/employer">Post a Job</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative w-full py-12 md:py-24 lg:py-32 z-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-primary">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why Choose MeritBase?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We leverage cutting-edge Web3 and AI technologies to build a fairer and more efficient gig marketplace.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-border bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-secondary/50">
                  {feature.icon}
                  <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section id="cta" className="relative w-full py-12 md:py-24 lg:py-32 bg-secondary/30 z-10">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                    Ready to Join the Revolution?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Create your decentralized professional identity or find top-tier talent today.
                </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/signup/freelancer">Become a Freelancer</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="font-semibold">
                  <Link href="/signup/employer">Hire Talent</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
