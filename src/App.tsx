import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ServicesPage } from "./pages/ServicesPage";
import BlogDetailPage, { blogDetailLoader } from "./pages/BlogDetailPage";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./Theme";
import { CssBaseline } from "@mui/material";
import BlogPage, { blogLoader } from "./pages/BlogPages";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import emailJs from "@emailjs/browser";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
        loader: blogLoader,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/blog/:slug",
        element: <BlogDetailPage />,
        loader: blogDetailLoader,
      },
    ],
  },
]);

export default function App(props: { disableCustomTheme?: boolean }) {
  useEffect(() => {
    emailJs.init("fBmiXavakQ6zlsaQC");
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
