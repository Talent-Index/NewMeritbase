
import { FreelancerSignupForm } from "./freelancer-signup-form";
import { User } from "lucide-react";
import Link from "next/link";

export default function FreelancerSignupPage() {
  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
      <div className="w-full max-w-2xl space-y-8">
        <div className="text-center">
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                <User className="h-8 w-8" />
            </div>
            <h1 className="font-headline text-3xl font-bold">Create Your Decentralized CV (dCV)</h1>
            <p className="text-muted-foreground mt-2">
                Follow the steps below to build your on-chain professional identity.
                <br />
                Looking to hire instead?{" "}
                <Link href="/signup/employer" className="text-primary underline hover:text-primary/80">
                    Sign up as an Employer
                </Link>
            </p>
        </div>

        <FreelancerSignupForm />

      </div>
    </div>
  );
}
