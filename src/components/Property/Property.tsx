import React from "react";
import { IProperty } from "../../shared/models/property";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import DefaultImage from "../../images/default-home.jpg";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import { numberFormat } from "../../shared/helpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useMediaQuery } from "@mui/material";

const Property: React.FC<IProperty> = ({
  property: {
    coverPhoto,
    price,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
    rentFrequency,
  },
}) => {
  const isNotMobile: any = useMediaQuery((theme: any) => theme.breakpoints.up("sm"));

  return (
    <Box sx={{ margin: 2 }}>
      <Link
        to={`/property/${externalID}`}
        style={{ textDecoration: "none", color: "#000", cursor: "pointer" }}
      >
        <Box>
          <Box
            sx={{
              height: 350,
            }}
          >
            <LazyLoadImage
              alt=""
              effect="blur"
              src={coverPhoto ? coverPhoto?.url : DefaultImage}
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 2 }}
          >
            <Grid
              container
              item
              alignItems="center"
              justifyContent="center"
              columnSpacing={2}
            >
              <Grid item>
                <Avatar src={agency?.logo?.url} />
              </Grid>

              <Grid item>{isVerified && <VerifiedIcon />}</Grid>

              <Grid item>
                <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                  {`AED ${numberFormat(price)} `}
                </Typography>
                <Typography sx={{ textTransform: "capitalize" }}>
                  {rentFrequency &&
                    `Rent Frequency: ${rentFrequency}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container item alignItems="center" justifyContent="center">
            {rooms}
            <Grid item sx={{ marginX: 2, marginTop: 0.5 }}>
              <BedIcon />
            </Grid>
            {baths}
            <Grid item sx={{ marginX: 2, marginTop: 0.5 }}>
              <BathtubIcon />
            </Grid>
            <Grid item>
              <Typography>{`${numberFormat(area)} sqft`}</Typography>
            </Grid>

            <Grid item sx={{ marginX: 2, marginTop: 0.5 }}>
              <Grid4x4Icon />
            </Grid>
          </Grid>

          <Grid container item>
            <Typography variant="h6" sx={{ textAlign: "center", textTransform: "capitalize" }}>
              {title?.length > 30 && !isNotMobile ? title?.substring(0, 30) + "..." : title}
            </Typography>
          </Grid>
        </Box>
      </Link>
    </Box>
  );
};

export default Property;
