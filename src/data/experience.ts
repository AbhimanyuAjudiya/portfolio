export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: '3',
    role: 'Founder',
    company: 'SuiSign',
    duration: '2025 - Present',
    description: 'Building a fully decentralized document signing platform on the Sui blockchain with Walrus decentralized storage. Leading product development including zkLogin authentication, multi-signature workflows, immutable document storage, and a public agreement explorer.',
    technologies: ['Sui', 'Move', 'Walrus', 'zkLogin', 'React', 'TypeScript', 'Node.js'],
  },
  {
    id: '1',
    role: 'Full Stack Web3 Developer',
    company: 'Freelance',
    duration: '2024 - Present',
    description: 'Built production solutions for e-commerce platforms, centralized exchange brokers, and Web3 startups. Integrated fiat and crypto payment systems, Web3 wallet authentication, and real-time WebSocket features.',
    technologies: ['React', 'Next.js', 'Web3', 'Node.js', 'AWS', 'TypeScript', 'SQL', 'NoSQL'],
  },
  {
    id: '2',
    role: 'Sui Hacker House: Bangkok',
    company: 'Sui Foundation',
    duration: '2025 April',
    description: 'Selected for the Sui Hacker House in Bangkok. Built a quiz dApp where users earn rewards for correct answers on the Sui blockchain. Connected with top builders in the Sui ecosystem.',
    technologies: ['Sui', 'Move', 'Walrus', 'zkLogin', 'Seal'],
  }
];