import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FreelancerSignupForm } from "./freelancer-signup-form";
import { User } from "lucide-react";
import Link from "next/link";

export default function FreelancerSignupPage() {
  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
            <User className="h-8 w-8" />
          </div>
          <CardTitle className="font-headline text-2xl">Create Your CVWallet</CardTitle>
          <CardDescription>
            Build your on-chain professional identity to land your dream gig.
             <br />
            Looking to hire instead?{" "}
            <Link href="/signup/employer" className="text-primary underline">
                Sign up as an Employer
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FreelancerSignupForm />
        </CardContent>
      </Card>
    </div>
  );
}
