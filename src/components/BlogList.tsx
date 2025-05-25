// components/BlogList.tsx
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Chip,
  Button,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import { BlogListProps } from "../types/blog";

const BlogList: React.FC<BlogListProps> = ({ blogs }) => {
  return (
    <Grid container spacing={3}>
      {blogs.map((blog) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
            }}
          >
            <CardActionArea
              component={Link}
              to={`/blog/${blog.slug}`}
              sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              {blog.image && (
                <CardMedia
                  component="img"
                  height="160"
                  image={blog.image}
                  alt={blog.title}
                  sx={{ objectFit: "cover" }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", gap: 1, mb: 1, flexWrap: "wrap" }}>
                  {blog.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Typography gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {blog.excerpt}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                {new Date(blog.date).toLocaleDateString()} • {blog.readTime} min
                read
              </Typography>
              <Button
                component={Link}
                to={`/blog/${blog.slug}`}
                variant="outlined"
                size="small"
              >
                Read More
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlogList;
