// components/BlogDetail.tsx
import {
  Container,
  Typography,
  Box,
  Chip,
  Divider,
  Avatar,
  Skeleton,
} from "@mui/material";
import { format } from "date-fns";
import { BlogPost } from "../types/blog";

interface BlogDetailProps {
  blog: BlogPost;
}

const BlogDetail = ({ blog }: BlogDetailProps) => {
  if (!blog) return <Skeleton variant="rectangular" height={400} />;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        {blog.title}
      </Typography>

      {blog.author && (
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <Avatar src={blog.author.avatar} sx={{ mr: 2 }} />
          <Box>
            <Typography variant="subtitle1">{blog.author.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {format(new Date(blog.date), "MMMM d, yyyy")} • {blog.readTime}{" "}
              min read
            </Typography>
          </Box>
        </Box>
      )}

      <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
        {blog.tags.map((tag) => (
          <Chip key={tag} label={tag} color="primary" variant="outlined" />
        ))}
      </Box>

      {blog.image && (
        <Box sx={{ mb: 4 }}>
          <img
            src={blog.image}
            alt={blog.title}
            style={{
              width: "100%",
              borderRadius: 8,
              maxHeight: "400px",
              objectFit: "cover",
            }}
          />
        </Box>
      )}

      <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
        {blog.content}
      </Typography>

      {blog.author && (
        <>
          <Divider sx={{ my: 4 }} />
          <Typography variant="h5" gutterBottom>
            About the Author
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <Avatar
              src={blog.author.avatar}
              sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Box>
              <Typography variant="h6">{blog.author.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.author.bio}
              </Typography>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

export default BlogDetail;
