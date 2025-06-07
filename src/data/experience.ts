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
    id: '1',
    role: 'Full Stack Web3 Developer',
    company: 'Freelance',
    duration: '2024 - Present',
    description: 'Built solutions for any type of business like ecoms, centralized exchange broker ',
    technologies: ['React', 'Nextjs', 'Web3', 'Node.js', 'AWS', 'TypeScript', 'SQL', 'noSQL'],
  },
  {
    id: '2',
    role: 'Sui Hacker House: Bangkok',
    company: 'Sui Foundation',
    duration: '2025 April',
    description: 'Got selected for the Sui Hacker House: Bangkok. I build an platform where the simple quize dapp where the users get rewarded based on the the correct answer. got to connect with amaizing people',
    technologies: ['Sui', 'move', 'Walrus', 'zkLogin'],
  }
];