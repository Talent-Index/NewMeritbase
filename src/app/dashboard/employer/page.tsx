import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getPostedJobs } from "@/lib/actions";
import { Activity, Briefcase, DollarSign, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { JobPostingChart } from "./job-posting-chart";

export default async function EmployerDashboardPage() {
  const jobs = await getPostedJobs();
  const totalBudget = jobs.reduce((acc, job) => acc + job.budget, 0);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Total value of all posted jobs
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Freelancers Hired</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">
              +5% from last month
            </p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Jobs Posted</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{jobs.length}</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Shortlists</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{jobs.length}</div>
            <p className="text-xs text-muted-foreground">
              AI-powered candidate lists
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <JobPostingChart />
        <Card>
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle>Recent Job Postings</CardTitle>
              <CardDescription>
                Your most recently created jobs.
              </CardDescription>
            </div>
            <Button asChild size="sm" className="ml-auto gap-1">
              <Link href="/dashboard/employer/post-job">
                Post Job
                <Briefcase className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Job Title</TableHead>
                  <TableHead className="text-right">Budget</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.slice(0, 5).map(job => (
                   <TableRow key={job.id}>
                    <TableCell>
                      <div className="font-medium">{job.title}</div>
                      <div className="text-sm text-muted-foreground md:inline">
                        {job.companyName}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">${job.budget.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
             {jobs.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                    No jobs posted yet.
                </div>
             )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
