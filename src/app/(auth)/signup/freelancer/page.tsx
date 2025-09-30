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
import { WalletAuthentication } from "@/components/wallet-connect";


export default function FreelancerSignupPage() {
  return (
    <div className="container flex min-h-[calc(100vh-8rem)] items-center justify-center py-12">
      <div className="grid w-full max-w-4xl grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
                <User className="h-8 w-8" />
            </div>
            <div className="text-center">
                <h1 className="font-headline text-2xl font-bold">Create Your CVWallet</h1>
                <p className="text-muted-foreground mt-2">
                    Build your on-chain professional identity to land your dream gig.
                    <br />
                    Looking to hire instead?{" "}
                    <Link href="/signup/employer" className="text-primary underline">
                        Sign up as an Employer
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
                <CardTitle>2. Build Your Profile</CardTitle>
                <CardDescription>
                    This information creates your decentralized, portable CV.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <FreelancerSignupForm />
            </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
