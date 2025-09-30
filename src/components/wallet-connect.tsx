"use client";

import React, { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

export function WalletAuthentication() {
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [authStatus, setAuthStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSignIn = async () => {
    if (!isConnected || !address) {
      toast({
        title: "Wallet Not Connected",
        description: "Please connect your wallet first.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAuthStatus("idle");

    try {
      // 1. Fetch nonce from the backend
      const nonceRes = await fetch("/api/nonce");
      if (!nonceRes.ok) throw new Error("Failed to fetch nonce.");
      const { nonce } = await nonceRes.json();

      // 2. Prompt user to sign the nonce
      const message = `Welcome to MeritBase!\n\nPlease sign this message to authenticate.\n\nNonce: ${nonce}`;
      const signature = await signMessageAsync({ message });

      // 3. Verify signature on the backend (mocked here)
      // In a real app, you would send { address, signature, nonce } to a backend endpoint.
      // The backend would use `ecrecover` to verify the signature.
      
      // Mock verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      const isSignatureVerified = true; // Assume verification is successful

      if (isSignatureVerified) {
        setAuthStatus("success");
        toast({
          title: "Authentication Successful",
          description: "You have been securely signed in.",
        });
      } else {
        throw new Error("Signature verification failed.");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setAuthStatus("error");
      toast({
        title: "Authentication Failed",
        description: (error as Error)?.message || "An unknown error occurred.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isConnected) {
    return (
      <div className="p-4 border rounded-lg text-center bg-muted/50">
        <p className="text-muted-foreground">Please connect your wallet to sign in.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={handleSignIn} disabled={isLoading} className="w-full">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please check your wallet...
          </>
        ) : (
          "Sign In with Wallet"
        )}
      </Button>
      {authStatus === 'success' && (
          <div className="flex items-center text-green-600">
              <CheckCircle className="mr-2 h-5 w-5" />
              <span>Authentication successful!</span>
          </div>
      )}
      {authStatus === 'error' && (
            <div className="flex items-center text-destructive">
                <AlertCircle className="mr-2 h-5 w-5" />
                <span>Authentication failed. Please try again.</span>
            </div>
      )}
    </div>
  );
}
