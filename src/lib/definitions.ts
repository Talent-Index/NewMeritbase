export type Review = {
    id: string;
    rating: number;
    comment: string;
    reviewer: string; // Company name or Freelancer name
};

export type Freelancer = {
    id: string;
    name: string;
    email: string;
    skills: string[];
    summary: string;
    rate: number;
    avatarUrl: string;
    reviews: Review[];
    // In a real app, these would be CIDs from IPFS
    cvCid?: string;
    govIdCid?: string;
};

export type Employer = {
    id: string;
    companyName: string;
    email: string;
    // In a real app, this would be a CID from IPFS
    licenseCid?: string;
    reviews: Review[];
};

export type Job = {
    id: string;
    title: string;
    description: string;
    skills: string[];
    budget: number;
    companyName: string;
    postedAt: Date;
};
