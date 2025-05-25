// types/blog.ts
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: number;
  tags: string[];
  image?: string;
  content?: string;
  author?: {
    name: string;
    avatar: string;
    bio: string;
  };
}

export interface BlogListProps {
  blogs: BlogPost[];
}
