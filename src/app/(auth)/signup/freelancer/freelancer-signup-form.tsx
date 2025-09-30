
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import { Loader2, FileText, Webcam, Linkedin, Github, Briefcase, ArrowLeft, ArrowRight } from "lucide-react";
import { WalletAuthentication } from "@/components/wallet-connect";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

const steps = [
  { id: 1, title: 'Profile & Skills', fields: ['fullName', 'email', 'skills', 'summary'] },
  { id: 2, title: 'CV & Biodata', fields: ['cv', 'govId'] },
  { id: 3, title: 'External Profiles', fields: ['linkedin', 'github', 'fiverr', 'upwork'] },
  { id: 4, title: 'Connect & Create' },
];

export function FreelancerSignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof freelancerSchema>>({
    resolver: zodResolver(freelancerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      skills: "",
      summary: "",
      linkedin: "",
      github: "",
      fiverr: "",
      upwork: "",
    },
  });

  const onSubmit = (values: z.infer<typeof freelancerSchema>) => {
    startTransition(async () => {
      const result = await registerFreelancer(values);
      if (result.success) {
        toast({
          title: "dCV Created!",
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
  };

  const nextStep = async () => {
    const fieldsToValidate = steps[currentStep - 1].fields;
    if (fieldsToValidate) {
      const isValid = await form.trigger(fieldsToValidate as any);
      if (!isValid) return;
    }
    if (currentStep < steps.length) {
      setCurrentStep(step => step + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(step => step - 1);
    }
  };
  
  const progressValue = (currentStep / steps.length) * 100;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
            <Progress value={progressValue} className="w-full h-2" />
            <p className="text-sm text-muted-foreground text-center">Step {currentStep} of {steps.length}: {steps[currentStep-1].title}</p>
        </div>


        {/* Step 1: Profile & Skills */}
        {currentStep === 1 && (
            <Card className="bg-secondary/50">
            <CardHeader>
                <CardTitle>1. Profile & Skills</CardTitle>
                <CardDescription>
                Tell us who you are and what you're great at.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
            </CardContent>
            </Card>
        )}
        

        {/* Step 2: CV & Biodata */}
        {currentStep === 2 && (
            <Card className="bg-secondary/50">
            <CardHeader>
                <CardTitle>2. CV & Biodata Verification (KYC)</CardTitle>
                <CardDescription>
                Upload documents to verify your identity. These are encrypted and stored securely on IPFS.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                    control={form.control}
                    name="cv"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="flex items-center gap-2"><FileText className="h-4 w-4" /> Upload CV (PDF)</FormLabel>
                        <FormControl>
                        <Input type="file" accept=".pdf" {...field} />
                        </FormControl>
                        <FormDescription>Your CV will be stored securely.</FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="govId"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel className="flex items-center gap-2"><FileText className="h-4 w-4" /> Government ID (PDF)</FormLabel>
                        <FormControl>
                        <Input type="file" accept=".pdf" {...field} />
                        </FormControl>
                        <FormDescription>Used for verification, stored securely.</FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                </div>
                <div className="p-4 border rounded-lg flex flex-col items-center text-center gap-2 bg-background/50">
                    <Webcam className="h-8 w-8 text-muted-foreground"/>
                    <FormLabel>Live Selfie Verification</FormLabel>
                    <FormDescription className="mb-2">We'll use your camera to confirm you're a real person.</FormDescription>
                    <Button type="button" variant="outline">
                        <Webcam className="mr-2 h-4 w-4"/>
                        Start Liveness Check
                    </Button>
                    <FormMessage />
                </div>
            </CardContent>
            </Card>
        )}

        {/* Step 3: Connect External Profiles */}
        {currentStep === 3 && (
            <Card className="bg-secondary/50">
                <CardHeader>
                    <CardTitle>3. Link External Profiles (Optional)</CardTitle>
                    <CardDescription>
                        Strengthen your dCV by linking existing professional profiles.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="linkedin" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center gap-2"><Linkedin /> LinkedIn Profile URL</FormLabel>
                            <FormControl><Input placeholder="https://linkedin.com/in/..." {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="github" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center gap-2"><Github /> GitHub Profile URL</FormLabel>
                            <FormControl><Input placeholder="https://github.com/..." {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="fiverr" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center gap-2"><Briefcase /> Fiverr Profile URL</FormLabel>
                            <FormControl><Input placeholder="https://fiverr.com/..." {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="upwork" render={({ field }) => (
                        <FormItem>
                            <FormLabel className="flex items-center gap-2"><Briefcase /> Upwork Profile URL</FormLabel>
                            <FormControl><Input placeholder="https://upwork.com/..." {...field} /></FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                </CardContent>
            </Card>
        )}

        {/* Step 4: Connect Wallet & Create */}
        {currentStep === 4 && (
            <Card className="bg-secondary/50">
                <CardHeader>
                    <CardTitle>4. Connect Wallet & Create Your dCV</CardTitle>
                    <CardDescription>
                        Connect your wallet and sign the final transaction to create your decentralized CV on-chain.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                    <div className="max-w-sm mx-auto">
                        <WalletAuthentication />
                    </div>
                    <Separator className="my-4"/>
                    <Button type="submit" size="lg" className="w-full max-w-sm mx-auto" disabled={isPending}>
                        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Create My dCV
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                        This will require a signature and a small transaction fee on the Polygon network.
                    </p>
                </CardContent>
            </Card>
        )}
        
        <div className="flex justify-between">
            {currentStep > 1 && (
                <Button type="button" variant="outline" onClick={prevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous
                </Button>
            )}
             {currentStep < steps.length && (
                <Button type="button" onClick={nextStep} className="ml-auto">
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            )}
        </div>
      </form>
    </Form>
  );
}
