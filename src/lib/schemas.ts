import { z } from 'zod';

export const freelancerSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  skills: z.string().min(10, { message: 'Please list at least one skill.' }),
  summary: z.string().min(50, { message: 'Summary must be at least 50 characters.' }),
  // File uploads are not properly validated here, as this is a prototype
  cv: z.any().optional(),
  govId: z.any().optional(),
});

export const employerSchema = z.object({
  companyName: z.string().min(2, { message: 'Company name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  // File uploads are not properly validated here, as this is a prototype
  license: z.any().optional(),
});

export const jobPostSchema = z.object({
    title: z.string().min(5, { message: 'Job title must be at least 5 characters.' }),
    description: z.string().min(50, { message: 'Description must be at least 50 characters.' }),
    skills: z.string().min(3, { message: 'Please list required skills.' }),
    budget: z.coerce.number().min(1, { message: 'Budget must be a positive number.' }),
});
