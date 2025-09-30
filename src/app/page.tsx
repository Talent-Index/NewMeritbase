import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Decentralized CVs',
    description:
      'Own and control your professional history with a CV that lives on the blockchain, immune to censorship or alteration.',
    icon: '/icons/cv.svg',
  },
  {
    title: 'Verified Credentials',
    description:
      'Leverage Web3 to prove your skills and qualifications, building undeniable trust with potential employers.',
    icon: '/icons/credentials.svg',
  },
  {
    title: 'AI-Powered Matching',
    description:
      'Our intelligent algorithms connect you with the most relevant gigs, based on your verified experience and skills.',
    icon: '/icons/match.svg',
  },
];

const stats = [
  { value: '10k+', label: 'Verified Freelancers' },
  { value: '5k+', label: 'Gigs successfully matched' },
  { value: '2M+', label: 'On-chain credentials' },
  { value: '98%', label: 'Employer satisfaction rate' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-transparent pt-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                The Future of Work,
                <br />
                Powered by Merit
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                MeritBase is a decentralized talent network where your
                reputation is your resume. Build your on-chain CV, get matched
                with top gigs, and own your professional identity.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/dashboard/freelancer">
                  Find a Gig <ArrowUpRight className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-semibold"
              >
                <Link href="/dashboard/employer">Post a Job</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mt-16 flex justify-center">
          <Image
            src="/images/hero-dashboard.png"
            alt="MeritBase Dashboard"
            width={1200}
            height={675}
            className="rounded-t-2xl border-x border-t shadow-2xl shadow-primary/10"
            data-ai-hint="app dashboard"
          />
          <div className="absolute bottom-0 h-3/4 w-full bg-gradient-to-t from-background to-transparent" />
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container grid grid-cols-2 items-center justify-center gap-4 px-4 text-center md:grid-cols-4 md:px-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-4xl font-bold tracking-tighter sm:text-5xl">
                {stat.value}
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="w-full bg-secondary py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Why Freelancers Choose MeritBase
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We provide the tools to build a portable, verifiable career
                identity that works for you.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col items-center space-y-4 text-center"
              >
                <div className="rounded-full bg-primary/10 p-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container grid items-center gap-8 px-4 md:grid-cols-2 md:px-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              From Onboarding to On-Chain
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Our platform guides you through creating your CVWallet, verifying
              your credentials, and landing your first gig. Your professional
              milestones are recorded on-chain, building a permanent record of
              your achievements.
            </p>
            <Button asChild size="lg" className="font-semibold">
              <Link href="/signup/freelancer">
                Create Your CVWallet <ArrowUpRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/onchain-reputation.png"
              alt="On-chain reputation"
              width={550}
              height={550}
              className="rounded-xl shadow-lg"
              data-ai-hint="blockchain visualization"
            />
          </div>
        </div>
      </section>
    </div>
  );
}