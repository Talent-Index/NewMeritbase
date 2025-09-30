import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PostJobForm } from "../post-job-form";
import { JobList } from "../job-list";

export default function PostJobPage() {
  return (
    <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1">
        <Card className="bg-secondary/30">
          <CardHeader>
            <CardTitle>Create a New Job</CardTitle>
            <CardDescription>
              Fill out the details below to find the perfect talent for your project.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PostJobForm />
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-2">
         <Card className="bg-secondary/30">
          <CardHeader>
            <CardTitle>Your Posted Jobs</CardTitle>
            <CardDescription>
              Manage your existing job posts and view AI shortlists.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <JobList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
