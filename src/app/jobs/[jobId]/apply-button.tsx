
"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { applyForJob } from "@/lib/actions";
import { Loader2, Wallet } from "lucide-react";
import { useAccount } from "wagmi";

export function ApplyButton({ jobId }: { jobId: string }) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const { address, isConnected } = useAccount();

  const handleApply = () => {
    if (!address) {
        toast({
            title: "Wallet Not Connected",
            description: "Please connect your wallet to apply.",
            variant: "destructive"
        });
        return;
    }
    startTransition(async () => {
      const result = await applyForJob(jobId, address);

      if (result.success) {
        toast({
          title: "Success!",
          description: result.success,
        });
      } else {
        toast({
          title: "Application Failed",
          description: result.error,
          variant: "destructive",
        });
      }
    });
  };

  if (!isConnected) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 text-center p-6 border-2 border-dashed rounded-lg bg-secondary/30">
            <Wallet className="h-8 w-8 text-muted-foreground" />
            <p className="font-semibold">Connect your wallet to apply</p>
            <p className="text-sm text-muted-foreground">
                Your CVWallet is tied to your wallet address. Please connect to continue.
            </p>
        </div>
    );
  }

  return (
    <Button onClick={handleApply} disabled={isPending || !isConnected} size="lg" className="w-full">
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting Application...
        </>
      ) : (
        "Apply Now with Your CVWallet"
      )}
    </Button>
  );
}
