import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  useTheme,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Code, DesignServices, School, Send } from "@mui/icons-material";
import { ContactMail } from "@mui/icons-material";
import { ContactFormModal } from "../components/ContactFormModal";
import { useState } from "react";

const HomePage = () => {
  const theme = useTheme();
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to ZOAN Systems and Solutions
          </Typography>
          <Typography variant="h5">
            Discover our services and get in touch
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            mb: 6,
            fontWeight: 700,
            color: theme.palette.primary.main,
            position: "relative",
            "&::after": {
              content: '""',
              display: "block",
              width: "80px",
              height: "4px",
              backgroundColor: theme.palette.secondary.main,
              margin: "20px auto 0",
            },
          }}
        >
          Crafting Digital Excellence
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Who We Are
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              We're a passionate team of JavaScript specialists dedicated to
              building high-performance web and mobile applications. With over
              decade of combined experience in React, TypeScript, and React
              Native, we bridge the gap between innovative ideas and
              production-ready solutions.
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ fontWeight: 600, mt: 4 }}
            >
              Our Technical Philosophy
            </Typography>
            <Typography paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
              We believe in <strong>clean, maintainable code</strong> that
              stands the test of time. Our approach combines:
            </Typography>
            <List dense>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: theme.palette.primary.main,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="TypeScript-first development for robust applications"
                  primaryTypographyProps={{ sx: { fontSize: "1.1rem" } }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: theme.palette.primary.main,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="React optimization techniques for buttery-smooth UIs"
                  primaryTypographyProps={{ sx: { fontSize: "1.1rem" } }}
                />
              </ListItem>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: theme.palette.primary.main,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="React Native expertise for truly cross-platform mobile apps"
                  primaryTypographyProps={{ sx: { fontSize: "1.1rem" } }}
                />
              </ListItem>
            </List>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: 3,
                position: "relative",
                height: "100%",
                minHeight: 400,
              }}
            >
              <img
                src="/images/home/tech.jpg"
                alt="Our team collaborating on code"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: "rgba(0,0,0,0.7)",
                  color: "white",
                  p: 3,
                }}
              >
                <Typography variant="h6" component="h3" gutterBottom>
                  Why Partner With Us?
                </Typography>
                <Typography variant="body1">
                  We don't just write code - we solve business challenges with
                  technical excellence. Our clients benefit from:
                </Typography>
                <Box
                  component="ul"
                  sx={{
                    pl: 2,
                    mt: 1,
                    "& li": {
                      mb: 1,
                      fontSize: "0.95rem",
                    },
                  }}
                >
                  <li>Deep expertise in modern JavaScript ecosystems</li>
                  <li>Proven strategies for scaling applications</li>
                  <li>Hands-on training for your development teams</li>
                  <li>Ongoing support and maintenance</li>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Core Values Section */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h3"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {[
              {
                title: "Technical Excellence",
                icon: <Code fontSize="large" />,
                description:
                  "We stay at the forefront of JavaScript, React, and TypeScript advancements",
              },
              {
                title: "Client Success",
                icon: <DesignServices fontSize="large" />,
                description:
                  "Your business objectives drive our technical decisions",
              },
              {
                title: "Knowledge Sharing",
                icon: <School fontSize="large" />,
                description: "We empower teams through comprehensive training",
              },
            ].map((value, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Box
                  sx={{
                    p: 3,
                    height: "100%",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                      borderColor: theme.palette.primary.main,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      bgcolor: theme.palette.primary.main,
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h4"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {value.title}
                  </Typography>
                  <Typography>{value.description}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Contact us today to discuss your project
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<ContactMail />}
            sx={{
              px: 6,
              fontSize: "1.1rem",
            }}
            onClick={() => setContactModalOpen(true)}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
      <ContactFormModal
        open={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </Box>
  );
};

export default HomePage;
