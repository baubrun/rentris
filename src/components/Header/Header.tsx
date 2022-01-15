import React from "react";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";

const Header: React.FC<any> = () => {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          top: "auto",
          bottom: 0,
          [theme.breakpoints.up("sm")]: {
            top: 0,
            bottom: "auto",
          },
        }}
        position="fixed"
      >
        <Toolbar>

          <Navbar />
          
          <Box>
          <Typography variant="h6" sx={{ mr: 4, textTransform: "uppercase" }}>
            rentris
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
