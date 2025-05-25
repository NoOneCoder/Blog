import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
  useTheme,
  Divider,
  Avatar,
  Grid,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Code,
  Build,
  School,
  DesignServices,
  ContactMail,
} from "@mui/icons-material";
import { ContactFormModal } from "../components/ContactFormModal";

export const ServicesPage = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleContactClick = (service: string) => {
    setSelectedService(service);
    setContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setContactModalOpen(false);
    setSelectedService("");
  };
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const services = [
    {
      id: "existing-software",
      title: "Existing Web/Mobile Software Consulting",
      icon: <Code />,
      color: theme.palette.primary.main,
      details: [
        "Comprehensive code reviews for React, React Native, and TypeScript projects",
        "Architecture assessment and modernization recommendations",
        "Performance optimization and bottleneck identification",
        "Legacy code refactoring strategies",
        "Security audit and vulnerability remediation",
        "Technical debt evaluation and reduction planning",
      ],
      examples: [
        "Convert class components to functional components with hooks",
        "Migrate from JavaScript to TypeScript",
        "Optimize React Native bridge communication",
        "Implement modern state management solutions",
      ],
    },
    {
      id: "new-development",
      title: "New Web/Mobile Application Development",
      icon: <Build />,
      color: theme.palette.secondary.main,
      details: [
        "Project kickstart and initial setup with best practices",
        "Technology stack selection guidance",
        "Recruitment support for building your dream team",
        "MVP development and rapid prototyping",
        "CI/CD pipeline setup and deployment strategy",
        "Cross-platform development approach for web and mobile",
      ],
      examples: [
        "Create React + TypeScript boilerplate with testing setup",
        "React Native app with Expo or bare workflow",
        "Micro-frontend architecture implementation",
        "Design system integration with Storybook",
      ],
    },
    {
      id: "customization",
      title: "Customize Existing Software",
      icon: <DesignServices />,
      color: theme.palette.success.main,
      details: [
        "Feature additions to existing applications",
        "Third-party API integrations",
        "Custom module development",
        "White-labeling solutions",
        "Accessibility improvements",
        "Localization and internationalization",
      ],
      examples: [
        "Add payment gateway to existing e-commerce app",
        "Implement real-time chat functionality",
        "Create admin dashboard for content management",
        "Add dark mode support",
      ],
    },
    {
      id: "training",
      title: "Team Training Programs",
      icon: <School />,
      color: theme.palette.warning.main,
      details: [
        "React Foundations (Virtual or In-Person across India)",
        "JavaScript/TypeScript Mastery",
        "State Management (Redux, Context API, Zustand)",
        "Testing Strategies (Jest, React Testing Library)",
        "React Native Best Practices",
        "Performance Optimization Techniques",
      ],
      examples: [
        "2-day intensive React hooks workshop",
        "TypeScript for React developers course",
        "End-to-end testing with Cypress",
        "Advanced React patterns training",
      ],
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: 6,
          color: theme.palette.primary.dark,
        }}
      >
        Our Technical Services
      </Typography>

      <Box sx={{ mb: 6 }}>
        {services.map((service) => (
          <Accordion
            key={service.id}
            expanded={expanded === service.id}
            onChange={handleChange(service.id)}
            sx={{
              mb: 2,
              borderRadius: "8px !important",
              overflow: "hidden",
              boxShadow: theme.shadows[3],
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                bgcolor:
                  expanded === service.id
                    ? `${service.color}10`
                    : "transparent",
                borderLeft: `4px solid ${service.color}`,
                minHeight: "72px",
              }}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", width: "100%" }}
              >
                <Avatar
                  sx={{
                    bgcolor: service.color,
                    color: theme.palette.getContrastText(service.color),
                    mr: 3,
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  {service.title}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0 }}>
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Service Offerings:
                  </Typography>
                  <List dense>
                    {service.details.map((item, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <Box
                            component="span"
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor: service.color,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    Example Projects:
                  </Typography>
                  <List dense>
                    {service.examples.map((item, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <Box
                            component="span"
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: "50%",
                              bgcolor: service.color,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              </Grid>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ContactMail />}
                  sx={{
                    px: 4,
                    bgcolor: service.color,
                    "&:hover": {
                      bgcolor: `${service.color}CC`,
                    },
                  }}
                  onClick={() => handleContactClick(service.title)}
                >
                  Contact About {service.title.split(" ")[0]} Services
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Divider sx={{ my: 4 }} />

      <Box
        sx={{
          textAlign: "center",
          p: 4,
          borderRadius: 2,
          bgcolor: theme.palette.grey[100],
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600 }}
        >
          Ready to Discuss Your Project?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Our experts are available for consultation across India
        </Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<ContactMail />}
          sx={{
            px: 6,
            py: 1.5,
            fontSize: "1.1rem",
          }}
          onClick={() => handleContactClick("General Inquiry")}
        >
          Contact Our Team
        </Button>
      </Box>
      <ContactFormModal
        open={contactModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </Container>
  );
};
