import { Box } from "@mui/material";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      {/* Footer can go here if needed */}
    </Box>
  );
};

export default Layout;
