import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MOCK_FREELANCERS, MOCK_JOBS } from "@/lib/data";
import { Star, Edit } from "lucide-react";
import Link from "next/link";

// In a real app, you'd get the logged-in freelancer's data.
const freelancer = MOCK_FREELANCERS[0];

export default function FreelancerDashboardPage() {
    const averageRating = freelancer.reviews.length > 0
        ? (freelancer.reviews.reduce((acc, r) => acc + r.rating, 0) / freelancer.reviews.length).toFixed(1)
        : "N/A";

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="grid gap-8">
        <header className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl font-headline">
            Welcome, {freelancer.name}!
          </h1>
          <p className="text-muted-foreground">
            Here's your hub for finding gigs, managing your profile, and tracking your reputation.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column: Profile */}
            <div className="lg:col-span-1 space-y-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Your CVWallet</CardTitle>
                        <Button variant="ghost" size="icon" asChild>
                            <Link href="#"><Edit className="h-4 w-4" /></Link>
                        </Button>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center text-center">
                        <Avatar className="h-24 w-24 mb-4">
                            <AvatarImage src={freelancer.avatarUrl} alt={freelancer.name} />
                            <AvatarFallback>{freelancer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h2 className="text-xl font-semibold font-headline">{freelancer.name}</h2>
                        <p className="text-muted-foreground">Rate: ${freelancer.rate}/hr</p>
                        <div className="flex flex-wrap gap-2 justify-center mt-4">
                            {freelancer.skills.slice(0, 5).map(skill => (
                                <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>On-Chain Reputation</CardTitle>
                        <CardDescription>
                            <span className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-400" />
                                Average Rating: {averageRating} ({freelancer.reviews.length} reviews)
                            </span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {freelancer.reviews.map(review => (
                            <div key={review.id} className="text-sm">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`} />
                                    ))}
                                </div>
                                <p className="mt-1">"{review.comment}"</p>
                                <p className="text-xs text-muted-foreground text-right">- {review.reviewer}</p>
                            </div>
                        ))}
                         {freelancer.reviews.length === 0 && <p className="text-sm text-muted-foreground text-center">No reviews yet.</p>}
                    </CardContent>
                </Card>
            </div>

            {/* Right Column: Matched Gigs */}
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Potential Job Matches</CardTitle>
                        <CardDescription>
                            Gigs you might be interested in based on your skills.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {MOCK_JOBS.map(job => (
                            <div key={job.id} className="p-4 border rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="font-semibold">{job.title}</h3>
                                    <p className="text-sm text-muted-foreground">{job.companyName} · Budget: ${job.budget.toLocaleString()}</p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {job.skills.map(skill => (
                                            <Badge key={skill} variant="outline">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <Button>View & Apply</Button>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
      </div>
    </div>
  );
}
