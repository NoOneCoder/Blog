// pages/BlogPage.tsx
import { Container, Typography, Box, Skeleton } from "@mui/material";
import BlogList from "../components/BlogList";
import { useLoaderData } from "react-router-dom";
import { BlogPost } from "../types/blog";

export async function blogLoader() {
  // In a real app, this would be an API call
  const blogs: BlogPost[] = [
    {
      id: 1,
      title: "Facing Error: EMFILE: too many open files, watch",
      excerpt: "Solve quickly by following these steps",
      slug: "EMFILE-too-many-open-files",
      date: "2023-05-15",
      readTime: 1,
      tags: ["React Native", "JavaScript"],
      image: "/images/nature/flower.jpg",
    },
    // Add more blog posts...
  ];
  return { blogs };
}

const BlogPage = () => {
  const { blogs } = useLoaderData() as { blogs: BlogPost[] };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Latest Blog Posts
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Discover our latest articles and tutorials
      </Typography>
      <BlogList blogs={blogs} />
    </Container>
  );
};

export default BlogPage;
