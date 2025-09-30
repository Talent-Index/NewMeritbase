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
      <div className="grid w-full max-w-4xl grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                <Briefcase className="h-8 w-8" />
            </div>
            <div className="text-center">
                <h1 className="font-headline text-2xl font-bold">Create Your Employer Profile</h1>
                <p className="text-muted-foreground mt-2">
                    Join MeritBase to hire top, verified talent from around the globe.
                    <br />
                    Looking to find work instead?{" "}
                    <Link href="/signup/freelancer" className="text-primary underline">
                    Sign up as a Freelancer
                    </Link>
                </p>
            </div>

            <Card className="mt-8">
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
        </div>
        <div>
            <Card>
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
    </div>
  );
}
