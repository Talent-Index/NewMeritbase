"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Briefcase, Wallet } from "lucide-react";

export function WalletConnect() {
  const router = useRouter();

  const handleLogin = (role: "freelancer" | "employer") => {
    // In a real app, this would involve wallet connection and signature verification.
    // For this prototype, we'll just navigate to the respective dashboard.
    // A cookie or context could be set here to maintain login state.
    router.push(`/dashboard/${role}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-2">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Sign in as</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleLogin("freelancer")}>
          <User className="mr-2 h-4 w-4" />
          <span>Freelancer</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLogin("employer")}>
          <Briefcase className="mr-2 h-4 w-4" />
          <span>Employer</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
