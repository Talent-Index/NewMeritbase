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
import { WalletAuthentication } from "@/components/wallet-connect";

export default function EmployerSignupPage() {
  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                <Briefcase className="h-8 w-8" />
            </div>
            <h1 className="font-headline text-3xl font-bold">Employer Signup</h1>
            <p className="text-muted-foreground mt-2">
                Join MeritBase to hire top, verified talent from around the globe.
                <br />
                Looking to find work instead?{" "}
                <Link href="/signup/freelancer" className="text-primary underline hover:text-primary/80">
                Sign up as a Freelancer
                </Link>
            </p>
        </div>
        <Card className="bg-secondary/50">
            <CardHeader>
                <CardTitle>1. Connect & Sign</CardTitle>
                <CardDescription>
                    Connect your wallet and sign the message to prove ownership. This is your new passwordless login.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <WalletAuthentication />
            </CardContent>
        </Card>
        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle>2. Enter Your Company Details</CardTitle>
            <CardDescription>
                Your information will be verified and stored securely.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <EmployerSignupForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
