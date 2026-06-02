export interface Achievement {
  id: string;
  title: string;
  description: string;
  prize?: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'sui-overflow',
    title: 'Won Sui Overflow 2025',
    description:
      'Won the Sui Overflow Global Hackathon among 3,000+ developers and 600+ projects.',
    prize: '$30,000 + $10,000 AWS credits',
    link: 'https://www.linkedin.com/posts/abhimanyu-ajudiya_solohacker-hackathon-suioverflow25-activity-7366165213659705344-YMgY',
  },
  {
    id: 'greece',
    title: 'Sponsored Trip to Athens, Greece',
    description:
      "Invited to a fully sponsored 10-day trip to Sui's office in Athens, Greece.",
    link: 'https://drive.google.com/file/d/1OVDrLfLnL2-Ygrv6zFTc1zULfTKg-MM7/view?usp=sharing',
  },
  {
    id: 'bangkok',
    title: 'Sui Hacker House in Bangkok',
    description:
      'Attended a fully sponsored 14-day hacker house in Bangkok, Thailand, hosted by ContributionDAO.',
    link: 'https://www.linkedin.com/posts/abhimanyu-ajudiya_got-back-from-the-sui-hacker-house-in-bangkok-activity-7319317355979808768-tRpY',
  },
  {
    id: 'ethglobal-delhi',
    title: 'Won ETHGlobal Delhi (Fluence Track)',
    description: 'Won the Fluence track at ETHGlobal Delhi.',
    prize: '$1,500',
    link: 'https://x.com/abhiii_aj/status/1972339141297004548?s=20',
  },
  {
    id: 'stellar-indiathon',
    title: 'Won Stellar Indiathon',
    description: 'Won the Stellar Indiathon.',
    prize: '$500',
    link: 'https://x.com/onboardingclub/status/1803505236499374153?s=20',
  },
  {
    id: 'first-movers',
    title: 'First Movers Hacker House',
    description:
      'Attended a fully sponsored 5-day hacker house hosted by First Movers.',
    link: 'https://x.com/firstmovers_/status/1968653733325156775?s=20',
  },
  {
    id: 'leetcode',
    title: '250+ LeetCode Problems Solved',
    description:
      'Consistently sharpening data structures, algorithms, and problem-solving skills.',
  },
];
