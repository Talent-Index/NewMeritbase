# **App Name**: MeritBase

## Core Features:

- Decentralized CVWallet: Freelancers can upload and manage their CV, skills, and ID, stored securely on IPFS/Filecoin with a hash stored on the Polygon blockchain.
- Verified Employer Profiles: Employers can create profiles with verified company information, including licenses and reviews, stored on IPFS with a hash stored on the Polygon blockchain.
- AI-Assisted Job Matching: The system uses HuggingFace embeddings to encode job descriptions and freelancer profiles, calculating cosine similarity to shortlist the best candidates for each gig; acts as a tool helping recruiters by pre-screening candidates, which helps them in determining when, or if, to call the applicant.
- Wallet-Based Authentication: Users can sign in using MetaMask or WalletConnect via RainbowKit, providing a secure and decentralized authentication method.
- On-Chain Registration: Freelancers and employers are registered on the Polygon blockchain via smart contracts (FreelancerRegistry.sol and EmployerRegistry.sol), storing only hashes and CIDs to minimize gas costs.
- Job Posting and Application: Employers can post job listings, and freelancers can apply for suitable gigs through the platform, with the AI-powered matching system facilitating the process.
- Reputation and Review System: Employers and freelancers can leave reviews and ratings for each other, stored as attestations on-chain, fostering a trustworthy gig economy environment.

## Style Guidelines:

- Primary color: Deep Blue (#3B82F6) for trust and professionalism.
- Background color: Light Gray (#F9FAFB) to provide a clean and modern backdrop.
- Accent color: Teal (#2DD4BF) for highlights and interactive elements.
- Body and headline font: 'Inter', a grotesque-style sans-serif, for a modern and neutral look.
- Use a set of consistent and professional icons throughout the platform to represent various actions and categories.
- Implement a clean and responsive layout using a grid system to ensure the platform is accessible on all devices.
- Use subtle animations to provide feedback on user interactions, enhancing the overall user experience.