import { getPostedJobs } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bot } from "lucide-react";

export async function JobList() {
    const jobs = await getPostedJobs();

    if (jobs.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">You haven't posted any jobs yet.</p>
                <p className="text-sm text-muted-foreground">Use the form to create your first job posting.</p>
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {jobs.map(job => (
                <div key={job.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg gap-4">
                    <div className="flex-1">
                        <h3 className="font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">
                            Posted on {new Date(job.postedAt).toLocaleDateString()}
                        </p>
                    </div>
                    <Button asChild>
                        <Link href={`/dashboard/employer/shortlist/${job.id}`}>
                            <Bot className="mr-2 h-4 w-4"/>
                            View AI Shortlist
                        </Link>
                    </Button>
                </div>
            ))}
        </div>
    )
}
