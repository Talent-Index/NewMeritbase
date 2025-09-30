import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Briefcase, Bot, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: 'Decentralized CVWallet',
    description: 'Create and manage a portable, verifiable CV on the blockchain. Your data, your control.',
    image: {
      url: 'https://picsum.photos/seed/1/600/400',
      hint: 'professional portfolio'
    }
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Verified Employer Profiles',
    description: 'Connect with legitimate companies whose identities are verified on-chain, reducing fraud.',
    image: {
      url: 'https://picsum.photos/seed/2/600/400',
      hint: 'office handshake'
    }
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: 'AI-Assisted Job Matching',
    description: 'Our intelligent algorithms match your skills with the perfect gig, saving you time and effort.',
    image: {
      url: 'https://picsum.photos/seed/3/600/400',
      hint: ' futuristic technology'
    }
  },
];

const steps = [
  {
    role: 'Freelancer',
    items: [
      'Create your CVWallet',
      'Get your skills verified',
      'Get matched with premium gigs',
      'Build your on-chain reputation',
    ],
  },
  {
    role: 'Employer',
    items: [
      'Verify your company profile',
      'Post a job in minutes',
      'Receive an AI-shortlisted talent pool',
      'Hire with confidence',
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                  The Future of Work is Decentralized
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  MeritBase connects top talent with leading companies through a secure, transparent, and AI-powered gig economy platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="font-semibold">
                  <Link href="/dashboard/freelancer">Find a Gig</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="font-semibold">
                  <Link href="/dashboard/employer">Post a Job</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://picsum.photos/seed/hero/600/600"
              alt="Hero"
              data-ai-hint="abstract network"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why Choose MeritBase?</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We leverage cutting-edge Web3 and AI technologies to build a fairer and more efficient gig marketplace.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
            {features.map((feature, index) => (
              <Card key={index} className="h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="flex flex-col items-center text-center">
                  {feature.icon}
                  <CardTitle className="mt-4 font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
              A Streamlined Process for Success
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Whether you're looking for work or seeking talent, our platform makes it simple.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-2 mt-8">
            {steps.map((step, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-2xl font-bold font-headline text-primary mb-4">{step.role}</h3>
                <ul className="space-y-2 text-left">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
