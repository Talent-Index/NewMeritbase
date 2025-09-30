"use client";

import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { applyForJob } from "@/lib/actions";
import { Loader2 } from "lucide-react";
import { MOCK_FREELANCERS } from "@/lib/data";

export function ApplyButton({ jobId }: { jobId: string }) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleApply = () => {
    startTransition(async () => {
      // In a real app, the current user's ID would come from the session.
      const freelancerId = MOCK_FREELANCERS[0].id;
      const result = await applyForJob(jobId, freelancerId);

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

  return (
    <Button onClick={handleApply} disabled={isPending} size="lg" className="w-full">
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
