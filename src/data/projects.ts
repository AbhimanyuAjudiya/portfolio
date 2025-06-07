export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Toradle",
    description:
      "This was a freelance project I worked on for a client. I developed the frontend, integrating payment systems for both fiat and cryptocurrency. I also implemented authentication using a Web3 library that allows users to sign up and sign in with their wallets, ensuring secure and seamless access.",
    technologies: [
      "React",
      "thirdweb",
      "RESTful API",
      "WebSocket",
      "PayPal",
      "Coinbase",
      "wagmi",
      "Tailwind CSS",
    ],
    demoUrl: "https://toradle.com/",
  },
  {
    id: "2",
    title: "Globtera",
    description:
      "Globtera is designed to facilitate micro-donations to various organizations and causes through a user-friendly interface. Users can sign up, view posts from organizations, and make donations directly through the platform using Stellar's blockchain technology.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Stellar SDK",
      "TurboRepo",
    ],
    githubUrl: "https://github.com/AbhimanyuAjudiya/globtera",
  },
  {
    id: "3",
    title: "PayPal Web2 Wallet",
    description:
      "A full-stack PayPal-like wallet system built with modern web technologies, featuring a user app, merchant interface, and webhook handler for banking operations.",
    technologies: [
      "TypeScript",
      "zod",
      "Next.js",
      "Express",
      "Recoil",
      "Tailwind CSS",
      "Node.js",
    ],
    githubUrl: "https://github.com/AbhimanyuAjudiya/paypal-web2",
  },
  {
    id: "4",
    title: "Medium-like Blogging Platform",
    description:
      "A modern, full-stack web application replicating Medium's core features—blog publishing, reading, and user management. Includes an interactive React frontend, RESTful backend APIs, authentication, and robust data validation.",
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Hono",
      "Prisma",
      "Cloudflare Workers",
      "Node.js",
    ],
    githubUrl: "https://github.com/example/social-analytics",
    demoUrl: "https://main--medium-abhimanyu.netlify.app/signup",
  },
  {
    id: "5",
    title: "Meme Generator",
    description:
      "A simple and fun meme generator web application built with React. Users can create custom memes by adding text to images, preview their creations, and download the final result. This project was made for learning and enjoyment, showcasing core React skills and web creativity.",
    technologies: [
      "React",
      "React DOM",
      "React Scripts",
      "HTML2Canvas",
      "web-vitals",
    ],
    githubUrl: "https://github.com/AbhimanyuAjudiya/meme-generator",
    demoUrl: "https://abhimanyuajudiya.github.io/meme-generator/",
  },
  {
    id: "6",
    title: "SuiSign",
    description:
      "SuiSign is a fully decentralized document signing platform that leverages the Sui blockchain and Walrus decentralized storage. It allows users to upload documents, define signers, and collect cryptographically verified signatures with zkLogin authentication via Google accounts. Features include multi-signature support, immutable document storage, flexible fee payment, and a public agreement explorer for transparency.",
    technologies: [
      "React",
      "TypeScript",
      "Sui Blockchain",
      "Move",
      "Walrus Decentralized Storage",
      "zkLogin",
      "Node.js",
      "pnpm",
    ],
    githubUrl: "https://github.com/AbhimanyuAjudiya/sui-sign",
    demoUrl: "https://sui-sign.vercel.app",
  },
];
