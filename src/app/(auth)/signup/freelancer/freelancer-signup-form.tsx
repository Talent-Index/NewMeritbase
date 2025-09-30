"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { freelancerSchema } from "@/lib/schemas";
import { useToast } from "@/hooks/use-toast";
import { registerFreelancer } from "@/lib/actions";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

export function FreelancerSignupForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof freelancerSchema>>({
    resolver: zodResolver(freelancerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      skills: "",
      summary: "",
      fiverrUrl: "",
      upworkUrl: "",
    },
  });

  function onSubmit(values: z.infer<typeof freelancerSchema>) {
    startTransition(async () => {
      const result = await registerFreelancer(values);
      if (result.success) {
        toast({
          title: "CVWallet Created!",
          description: "Redirecting you to your dashboard...",
        });
        router.push("/dashboard/freelancer");
      } else {
        toast({
          title: "Error",
          description: result.error,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Skills</FormLabel>
              <FormControl>
                <Textarea placeholder="List your skills, separated by commas (e.g., React, Solidity, UI/UX Design)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Professional Summary</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your experience and what makes you a great hire." className="min-h-[100px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
            control={form.control}
            name="cv"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Upload CV (PDF)</FormLabel>
                <FormControl>
                    <Input type="file" accept=".pdf" {...field} />
                </FormControl>
                <FormDescription>Your CV will be stored securely on IPFS.</FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="govId"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Government ID (PDF)</FormLabel>
                <FormControl>
                    <Input type="file" accept=".pdf" {...field} />
                </FormControl>
                <FormDescription>Used for verification, encrypted and stored securely.</FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create CVWallet
        </Button>
      </form>
    </Form>
  );
}
