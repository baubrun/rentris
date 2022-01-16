import React, { useContext, useState } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item>
        <IconButton onClick={() => scrollPrev()}>
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item>
        <IconButton onClick={() => scrollNext()}>
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

const ImageScrollBar: React.FC<any> = ({ data }) => {
  return (
    <Box>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item: any) => (
          <Box
            sx={{ overflow: "hidden", padding: 1 }}
            itemID={item?.id}
            key={item?.id}
          >
            <LazyLoadImage
              alt=""
              effect="blur"
              src={item?.url}
              height={650}
              width={650}
            />
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default ImageScrollBar;
