export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Hello World',
    slug: 'hello-world',
    excerpt: 'A simple hello world blog post.',
    content: `
# Hello World
    `,
    date: '2025-06-08',
    readTime: '1 min read',
    tags: ['Introduction'],
  },
];