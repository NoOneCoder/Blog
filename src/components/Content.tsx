import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
};
