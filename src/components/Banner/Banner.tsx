import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IBanner } from "../../shared/models/banner";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Banner: React.FC<IBanner> = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          height: 350,
          width: 350,
          [theme.breakpoints.up("sm")]: {
            height: 500,
            width: 500,
          },
          [theme.breakpoints.up("md")]: {
            height: "100%",
            width: "100%",
          },
        }}
      >
        <LazyLoadImage
          alt=""
          effect="blur"
          src={imageUrl}
          height={"100%"}
          width={"100%"}
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" color="gray">
          {purpose}
        </Typography>
        <Typography variant="h4">
          {title1}
          <br />
          {title2}
        </Typography>
        <Typography sx={{ paddingY: 3 }}>
          {desc1}
          <br />
          {desc2}
        </Typography>
        <Button variant="outlined" sx={{ color: "primary", marginBottom: 5 }}>
          <Link to={linkName} style={{ textDecoration: "none", color: "#000" }}>
            {buttonText}
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default Banner;
