import { Freelancer, Employer, Job, Review } from './definitions';

export const MOCK_FREELANCERS: Freelancer[] = [
  {
    id: 'fr-1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Node.js'],
    summary: 'Senior Frontend Engineer with 8+ years of experience in building scalable and performant web applications. Passionate about user experience and clean code.',
    rate: 95,
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
    reviews: [
      { id: 'rev-1', rating: 5, comment: 'Alice is a fantastic developer!', reviewer: 'Tech Solutions Inc.' },
      { id: 'rev-2', rating: 5, comment: 'Delivered high-quality work on time.', reviewer: 'Innovate Co.' },
    ]
  },
  {
    id: 'fr-2',
    name: 'Bob Williams',
    email: 'bob@example.com',
    skills: ['Solidity', 'Hardhat', 'Ethers.js', 'Web3', 'The Graph'],
    summary: 'Blockchain developer specializing in DeFi and NFT projects. Experienced in smart contract development, auditing, and deployment on EVM-compatible chains.',
    rate: 120,
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
    reviews: [
      { id: 'rev-3', rating: 5, comment: 'Expert in Solidity and smart contracts.', reviewer: 'CryptoVentures' },
    ]
  },
  {
    id: 'fr-3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    skills: ['Figma', 'UI/UX Design', 'Webflow', 'Brand Identity'],
    summary: 'Creative UI/UX designer with a strong focus on user-centric design principles. Proficient in creating beautiful and intuitive interfaces from concept to launch.',
    rate: 80,
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
    reviews: [
        { id: 'rev-4', rating: 5, comment: 'Stunning designs and very collaborative.', reviewer: 'DesignHub' },
        { id: 'rev-5', rating: 4, comment: 'Good eye for detail, but missed a deadline.', reviewer: 'Startup Fast' },
    ]
  },
  {
    id: 'fr-4',
    name: 'Diana Prince',
    email: 'diana@example.com',
    skills: ['Python', 'Django', 'PostgreSQL', 'AWS', 'Docker'],
    summary: 'Full-stack developer with a backend focus. Expert in building robust APIs and managing cloud infrastructure. Certified AWS Solutions Architect.',
    rate: 110,
    avatarUrl: 'https://picsum.photos/seed/avatar4/100/100',
    reviews: []
  },
    {
    id: 'fr-5',
    name: 'Eve Adams',
    email: 'eve@example.com',
    skills: ['Project Management', 'Agile', 'Scrum', 'JIRA', 'CI/CD'],
    summary: 'Certified Scrum Master and technical project manager with a track record of delivering complex projects on time and within budget in the tech industry.',
    rate: 90,
    avatarUrl: 'https://picsum.photos/seed/avatar5/100/100',
    reviews: [
        { id: 'rev-6', rating: 5, comment: 'Kept our project on track perfectly.', reviewer: 'Innovate Co.' },
    ]
  },
];

export const MOCK_JOBS: Job[] = [
    {
        id: 'job-1',
        title: 'Senior Frontend Developer for Web3 Project',
        description: 'We are seeking an experienced Frontend Developer to build out the interface for our new decentralized exchange (DEX). Must have strong experience with React, TypeScript, and interacting with smart contracts using Ethers.js or Web3.js.',
        skills: ['React', 'TypeScript', 'Ethers.js', 'Web3'],
        budget: 10000,
        companyName: 'CryptoVentures',
        postedAt: new Date('2024-05-20T10:00:00Z'),
    },
    {
        id: 'job-2',
        title: 'UI/UX Designer for Mobile App',
        description: 'Looking for a talented UI/UX designer to create a visually appealing and user-friendly mobile application for our fintech startup. Experience with Figma and creating design systems is a must.',
        skills: ['Figma', 'UI/UX Design', 'Mobile Design'],
        budget: 7500,
        companyName: 'Fintech Innovators',
        postedAt: new Date('2024-05-18T14:30:00Z'),
    }
];
