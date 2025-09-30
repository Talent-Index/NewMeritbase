import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmployerSignupForm } from "./employer-signup-form";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default function EmployerSignupPage() {
  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
            <Briefcase className="h-8 w-8" />
          </div>
          <CardTitle className="font-headline text-2xl">Create Your Employer Profile</CardTitle>
          <CardDescription>
            Join MeritBase to hire top, verified talent from around the globe.
            <br />
            Looking to find work instead?{" "}
            <Link href="/signup/freelancer" className="text-primary underline">
              Sign up as a Freelancer
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmployerSignupForm />
        </CardContent>
      </Card>
    </div>
  );
}
