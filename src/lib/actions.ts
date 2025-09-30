'use server';

import { z } from 'zod';
import { freelancerSchema, employerSchema, jobPostSchema } from '@/lib/schemas';
import { Freelancer, Job } from '@/lib/definitions';
import { aiShortlistFreelancers } from '@/ai/flows/ai-shortlist-freelancers';
import { MOCK_FREELANCERS, MOCK_JOBS } from '@/lib/data';
import { sleep } from './utils';
import { revalidatePath } from 'next/cache';

// This is a mock in-memory store. In a real app, you'd use a database.
const JOBS_STORE: Job[] = [...MOCK_JOBS];
const APPLICATIONS_STORE: { jobId: string; freelancerId: string }[] = [];


export async function registerFreelancer(values: z.infer<typeof freelancerSchema>) {
  const validatedFields = freelancerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }
  
  // Simulate network delay and blockchain interaction
  await sleep(1000);

  console.log('Registering freelancer:', validatedFields.data.fullName);
  // In a real app, you would:
  // 1. Upload files to IPFS/Filecoin.
  // 2. Call the FreelancerRegistry.sol smart contract.
  // 3. Store metadata in a database.
  
  return { success: 'Freelancer profile created successfully!' };
}

export async function registerEmployer(values: z.infer<typeof employerSchema>) {
  const validatedFields = employerSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  // Simulate network delay and blockchain interaction
  await sleep(1000);

  console.log('Registering employer:', validatedFields.data.companyName);
  // In a real app, you would:
  // 1. Upload license to IPFS/Filecoin.
  // 2. Call the EmployerRegistry.sol smart contract.
  // 3. Store metadata in a database.

  return { success: 'Employer profile created successfully!' };
}


export async function postJob(values: z.infer<typeof jobPostSchema>) {
    const validatedFields = jobPostSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    await sleep(1000);
    
    const newJob: Job = {
        id: `job-${Date.now()}`,
        ...validatedFields.data,
        companyName: 'MockCorp', // In a real app, get from logged-in employer
        postedAt: new Date(),
    };

    JOBS_STORE.unshift(newJob);
    console.log('New job posted:', newJob.title);

    revalidatePath('/dashboard/employer');
    revalidatePath('/dashboard/freelancer');

    return { success: 'Job posted successfully!', job: newJob };
}

export async function getPostedJobs(): Promise<Job[]> {
    await sleep(500);
    return JOBS_STORE;
}

export async function getJobById(jobId: string): Promise<Job | undefined> {
    await sleep(200);
    // In a real app, we should also fetch jobs from MOCK_JOBS if they aren't in the store
    const allJobs = [...JOBS_STORE, ...MOCK_JOBS.filter(j => !JOBS_STORE.some(s => s.id === j.id))];
    return allJobs.find(job => job.id === jobId);
}

export async function applyForJob(jobId: string, freelancerId: string) {
    await sleep(1000);

    const job = await getJobById(jobId);
    if (!job) {
        return { error: 'Job not found.' };
    }

    const alreadyApplied = APPLICATIONS_STORE.find(
        app => app.jobId === jobId && app.freelancerId === freelancerId
    );
    if (alreadyApplied) {
        return { error: 'You have already applied for this job.' };
    }

    APPLICATIONS_STORE.push({ jobId, freelancerId });
    console.log(`Freelancer ${freelancerId} applied for job ${jobId}`);

    return { success: `Successfully applied for "${job.title}"!` };
}


export async function getShortlistedFreelancers(jobDescription: string): Promise<{ shortlistedFreelancers: Freelancer[] } | { error: string }> {
  try {
    // Format freelancer profiles for the AI
    const freelancerProfiles = MOCK_FREELANCERS.map(f => 
      `ID: ${f.id}. Name: ${f.name}. Skills: ${f.skills.join(', ')}. Summary: ${f.summary}. Rate: $${f.rate}/hr.`
    );
    
    const input = {
      jobDescription,
      freelancerProfiles,
      numberOfFreelancers: 3,
    };

    console.log("Requesting AI shortlist with input:", input);
    const result = await aiShortlistFreelancers(input);
    console.log("AI shortlist received:", result);

    if (!result || !result.shortlistedFreelancers || result.shortlistedFreelancers.length === 0) {
      return { error: "AI could not generate a shortlist. Please try again." };
    }

    // The AI returns strings. We need to map them back to our Freelancer objects.
    const shortlistedFreelancerIds = result.shortlistedFreelancers.map(profileString => {
      const match = profileString.match(/ID: (fr-\d+)/);
      return match ? match[1] : null;
    }).filter((id): id is string => id !== null);

    const shortlistedFreelancers = MOCK_FREELANCERS.filter(f => shortlistedFreelancerIds.includes(f.id));

    // To maintain the order from the AI result
    const orderedShortlist = shortlistedFreelancerIds.map(id => 
        shortlistedFreelancers.find(f => f.id === id)
    ).filter((f): f is Freelancer => f !== undefined);

    return { shortlistedFreelancers: orderedShortlist };

  } catch (e) {
    console.error("Error getting AI shortlist:", e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred during shortlisting.";
    return { error: errorMessage };
  }
}
