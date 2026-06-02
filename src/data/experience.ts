export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  duration: string;
  description: string;
  highlights?: string[];
  links?: { label: string; url: string }[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'suisign',
    role: 'Founding Blockchain Engineer',
    company: 'SuiSign.io',
    companyUrl: 'https://suisign.io/',
    duration: 'Apr 2025 - Present',
    description:
      'Built a decentralized document-signing platform on the Sui blockchain using Walrus decentralized storage and zkLogin authentication.',
    highlights: [
      'Architected and shipped the complete agreement-signing infrastructure from 0→1.',
      'Designed and implemented Move smart contracts for agreement lifecycle management, multi-party signing, and immutable audit trails.',
      'Integrated Walrus decentralized storage for censorship-resistant document persistence.',
      'Built sponsored transaction infrastructure to provide a gasless onboarding experience.',
      'Developed full-stack agreement workflows using React, TypeScript, Node.js, and PostgreSQL.',
      'Implemented drag-and-drop signature placement, PDF preview flows, and multi-format signature inputs.',
      'Built secure backend APIs, webhook systems, rate limiting, and deployment infrastructure.',
      'Reduced document signing/storage costs by ~67% compared to traditional SaaS e-signature platforms.',
    ],
    technologies: [
      'Sui Move',
      'Walrus',
      'zkLogin',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'AWS',
    ],
  },
  {
    id: 'skepsis',
    role: 'Smart Contract Developer Intern',
    company: 'Skepsis.live',
    companyUrl: 'https://skepsis.live/',
    duration: 'Apr 2026 - May 2026',
    description:
      'Worked on prediction market infrastructure and oracle-integrated market systems.',
    highlights: [
      'Built oracle-backed prediction market infrastructure on Arbitrum Sepolia.',
      'Implemented automated market spawning, resolver registration, and scheduled settlement flows.',
      'Integrated Chainlink price feeds with feed validation, staleness protection, and decimal normalization.',
      'Designed LMSR-based market lifecycle covering deployment, trading, resolution, and accounting.',
      'Built backend automation for hourly, daily, weekly, and half-hourly recurring market generation.',
      'Improved indexer reliability using an event-driven synchronization architecture.',
      'Developed deployment/admin tooling for lifecycle management and recovery workflows.',
      'Worked across smart contracts, backend services, and TypeScript integrations.',
    ],
    technologies: [
      'Solidity',
      'Arbitrum',
      'Chainlink',
      'TypeScript',
      'Node.js',
      'Indexers',
      'Event Systems',
    ],
  },
  {
    id: 'freelance',
    role: 'Full-Stack Developer',
    company: 'Freelance',
    duration: 'Jan 2024 - Feb 2025',
    description:
      'Built production web apps for clients across payments, Web3, and real estate.',
    highlights: [
      "Built Toradle's frontend with React, adding fiat and crypto payments, wallet-based Web3 authentication, and real-time functionality using thirdweb, wagmi, RESTful APIs, and WebSocket.",
      'Developed a real estate platform using React and FastAPI enabling property listings, search, and lead generation, improving inquiry conversions.',
    ],
    links: [
      { label: 'Toradle', url: 'https://toradle.com/' },
      { label: 'ESM Property', url: 'https://www.esmproperty.com/' },
    ],
    technologies: [
      'React',
      'TypeScript',
      'thirdweb',
      'wagmi',
      'FastAPI',
      'WebSocket',
      'REST',
    ],
  },
];
