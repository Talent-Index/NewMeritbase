# MeritBase - The Decentralized Gig Economy Platform

MeritBase is a full-stack Web3 application that serves as a proof-of-concept for a decentralized gig economy matching platform. It combines blockchain for identity, AI for intelligent matching, and a modern web stack for a seamless user experience.

The core of MeritBase is the **Decentralized CV (dCV)** — a living, verifiable professional portfolio anchored on the blockchain, designed to replace static résumés.

## Key Features

### Core Concepts
- **Decentralized CV (dCV):** A user-owned, tamper-proof professional record. Credentials and work history are cryptographically secured and verifiable.
- **Passwordless Authentication:** Users sign up and log in securely using their Web3 wallet (e.g., MetaMask), with signatures verified via a nonce-based system to prevent replay attacks.

### Freelancer Flow
- **Progressive dCV Creation:** A multi-step, slideshow-style onboarding process guides freelancers through building their dCV.
- **AI Summary Enhancement:** Freelancers can use AI to professionally rewrite and enhance their professional summary.
- **Interactive Skill Selection:** A dynamic "bubble" interface allows freelancers to easily add skills to their profile.
- **KYC Simulation:** Steps for uploading identity documents and performing a "liveness check" are included to simulate identity verification.
- **Job Matching Dashboard:** A personalized dashboard shows freelancers potential job matches based on their skills.
- **Job Application:** Freelancers can view detailed job descriptions and apply with their dCV.

### Employer Flow
- **Simple Signup:** Employers can quickly create a company profile.
- **Job Posting:** An intuitive form allows employers to post new jobs with specific requirements.
- **AI-Powered Shortlisting:** For each job, employers can view an AI-generated shortlist of the most suitable freelancers from the platform, complete with their dCV highlights.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Server Components, Server Actions)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with ShadCN UI components for a modern, dark-themed interface.
- **Generative AI:** Genkit with the Google AI plugin (Gemini models) for summary enhancement and candidate shortlisting.
- **Web3 Integration:** RainbowKit and Wagmi for wallet connectivity and interaction.
- **On-chain Simulation:** The concept targets the Polygon network for smart contract interactions (e.g., registering dCVs).

## Getting Started

### Prerequisites
- Node.js (v20 or later)
- npm
- A Web3 wallet browser extension (e.g., MetaMask)

### Environment Variables
Create a `.env` file in the root of the project and add your Google AI API key:
```
GEMINI_API_KEY=your_google_ai_api_key_here
```

### Installation
Install the project dependencies:
```bash
npm install
```

### Running the Development Servers
You need to run two separate processes in parallel for the full application to work.

1. **Start the Next.js frontend:**
   ```bash
   npm run dev
   ```
   This will start the main web application, typically on `http://localhost:9002`.

2. **Start the Genkit AI flows:**
   In a separate terminal, start the Genkit development server:
   ```bash
   npm run genkit:dev
   ```
   This runs the AI services that power features like summary enhancement and freelancer shortlisting.

Once both servers are running, you can access the application in your browser.
