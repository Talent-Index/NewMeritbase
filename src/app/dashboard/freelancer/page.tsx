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
import { Star, Edit, DollarSign, Activity } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// In a real app, you'd get the logged-in freelancer's data.
const freelancer = MOCK_FREELANCERS[0];

export default function FreelancerDashboardPage() {
    const averageRating = freelancer.reviews.length > 0
        ? (freelancer.reviews.reduce((acc, r) => acc + r.rating, 0) / freelancer.reviews.length).toFixed(1)
        : "N/A";

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Hourly Rate</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">${freelancer.rate}/hr</div>
                    <p className="text-xs text-muted-foreground">Based on your profile</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Reputation</CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{averageRating}</div>
                    <p className="text-xs text-muted-foreground">
                        From {freelancer.reviews.length} reviews
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Matched Gigs</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">+{MOCK_JOBS.length}</div>
                    <p className="text-xs text-muted-foreground">Potential jobs available</p>
                </CardContent>
            </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Potential Job Matches</CardTitle>
                        <CardDescription>
                            Gigs you might be interested in based on your skills.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Job</TableHead>
                                <TableHead>Skills</TableHead>
                                <TableHead className="text-right">Budget</TableHead>
                                <TableHead className="text-right">Apply</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                        {MOCK_JOBS.map(job => (
                            <TableRow key={job.id}>
                                <TableCell>
                                    <div className="font-medium">{job.title}</div>
                                    <div className="text-sm text-muted-foreground">{job.companyName}</div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-1">
                                        {job.skills.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">${job.budget.toLocaleString()}</TableCell>
                                <TableCell className="text-right">
                                    <Button size="sm">View & Apply</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-4">
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
                    <p className="text-muted-foreground">{freelancer.email}</p>
                    <div className="flex flex-wrap gap-2 justify-center mt-4">
                        {freelancer.skills.slice(0, 5).map(skill => (
                            <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                    </div>
                     <p className="text-sm text-muted-foreground mt-4 text-left">{freelancer.summary}</p>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
