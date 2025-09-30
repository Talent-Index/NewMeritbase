import { getJobById } from "@/lib/actions";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, DollarSign, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ApplyButton } from "./apply-button";

export default async function JobDetailsPage({ params }: { params: { jobId: string } }) {
  const job = await getJobById(params.jobId);

  if (!job) {
    notFound();
  }

  return (
    <div className="container py-12">
        <div className="max-w-4xl mx-auto">
            <Button asChild variant="outline" size="sm" className="mb-6">
                <Link href="/dashboard/freelancer">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Job Matches
                </Link>
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle className="text-3xl font-headline">{job.title}</CardTitle>
                    <CardDescription className="text-lg">
                        Posted by <span className="font-semibold text-primary">{job.companyName}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <DollarSign className="h-5 w-5 text-primary"/>
                            <div>
                                <p className="font-bold text-foreground">${job.budget.toLocaleString()}</p>
                                <p>Budget</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-2 text-muted-foreground">
                            <Briefcase className="h-5 w-5 text-primary"/>
                            <div>
                                <p className="font-bold text-foreground">Contract</p>
                                <p>Job Type</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-5 w-5 text-primary"/>
                            <div>
                                <p className="font-bold text-foreground">{new Date(job.postedAt).toLocaleDateString()}</p>
                                <p>Date Posted</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <h3 className="font-semibold text-xl">Job Description</h3>
                        <p className="text-muted-foreground whitespace-pre-wrap">{job.description}</p>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold text-xl">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {job.skills.map(skill => (
                                <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                        </div>
                    </div>

                    <div className="pt-6">
                        <ApplyButton jobId={job.id} />
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
