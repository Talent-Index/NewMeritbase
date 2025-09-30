import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostJobForm } from "./post-job-form";
import { JobList } from "./job-list";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function EmployerDashboardPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="grid gap-8">
        <header className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl font-headline">
            Employer Dashboard
          </h1>
          <p className="text-muted-foreground">
            Post new jobs and manage your existing listings.
          </p>
        </header>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Post a New Job</CardTitle>
                <CardDescription>
                  Fill out the details below to find your next top talent.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PostJobForm />
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Your Job Postings</CardTitle>
                <CardDescription>
                  View and manage your active and past job postings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<JobListSkeleton />}>
                  <JobList />
                </Suspense>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function JobListSkeleton() {
    return (
        <div className="space-y-4">
            {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-2">
                        <Skeleton className="h-5 w-48" />
                        <Skeleton className="h-4 w-64" />
                    </div>
                    <Skeleton className="h-10 w-24" />
                </div>
            ))}
        </div>
    )
}
