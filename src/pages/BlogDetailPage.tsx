// pages/BlogDetailPage.tsx
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import BlogDetail from "../components/BlogDetail";
import { BlogPost } from "../types/blog";

export async function blogDetailLoader(
  args: LoaderFunctionArgs<{ slug: string }>
) {
  // In a real app, fetch by slug from API
  const blog: BlogPost = {
    id: 1,
    title: "Facing error Error: EMFILE: too many open files, watch",
    content: "sudo ln /opt/homebrew/bin/watchman /usr/local/bin/watchman",
    slug: args.params.slug ?? "",
    date: "2025-05-01",
    readTime: 5,
    tags: ["React Native", "JavaScript"],
    image: "/images/nature/flower.jpg",
    author: {
      name: "Alfurqan Shaikh",
      avatar: "/images/author-avatar.jpg",
      bio: "Senior React Developer with 12+ years of experience",
    },
    excerpt: "Not found...",
  };
  return { blog };
}

const BlogDetailPage = () => {
  const { blog } = useLoaderData() as { blog: BlogPost };
  return <BlogDetail blog={blog} />;
};

export default BlogDetailPage;
