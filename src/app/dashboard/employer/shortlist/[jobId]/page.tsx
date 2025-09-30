import { getJobById, getShortlistedFreelancers } from "@/lib/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { Freelancer } from "@/lib/definitions";

export default async function ShortlistPage({ params }: { params: { jobId: string } }) {
  const job = await getJobById(params.jobId);

  if (!job) {
    notFound();
  }

  const result = await getShortlistedFreelancers(job.description);

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <header className="space-y-1.5 mb-8">
        <Button asChild variant="outline" size="sm" className="mb-4">
            <Link href="/dashboard/employer" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
            </Link>
        </Button>
        <p className="text-sm text-muted-foreground">AI-Generated Shortlist for:</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl font-headline">
          {job.title}
        </h1>
        
      </header>

      { 'error' in result ? (
        <Card className="border-destructive bg-destructive/10">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-destructive">
                    <AlertCircle />
                    Could Not Generate Shortlist
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>The AI model encountered an error. Please try again later.</p>
                <p className="text-sm text-muted-foreground mt-2">Error details: {result.error}</p>
            </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
            {result.shortlistedFreelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id} freelancer={freelancer} />
            ))}
        </div>
      )}
    </div>
  );
}

function FreelancerCard({ freelancer }: { freelancer: Freelancer }) {
    const averageRating = freelancer.reviews.length > 0 
        ? (freelancer.reviews.reduce((acc, r) => acc + r.rating, 0) / freelancer.reviews.length).toFixed(1) 
        : "N/A";

    return (
        <Card className="transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl hover:bg-secondary/50">
            <CardHeader className="flex flex-row items-start gap-4">
                <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarImage src={freelancer.avatarUrl} alt={freelancer.name} />
                    <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <CardTitle className="font-headline text-xl">{freelancer.name}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-1">
                        <span>${freelancer.rate}/hr</span>
                        <span className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            {averageRating} ({freelancer.reviews.length} reviews)
                        </span>
                    </CardDescription>
                </div>
                <Button>Contact</Button>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-4">{freelancer.summary}</p>
                <div className="flex flex-wrap gap-2">
                    {freelancer.skills.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
