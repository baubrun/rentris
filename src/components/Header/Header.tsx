import React from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";

const drawerWidth: number = 50;

const Header: React.FC<any> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <AppBar
        sx={{
          position: "fixed",
          top: "auto",
          bottom: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          [theme.breakpoints.up("sm")]: {
            top: 0,
            bottom: "auto",
          },
        }}
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" sx={{ mr: 4, textTransform: "uppercase" }}>
            rentris
          </Typography>
         
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
