import React from "react";
import { IProperty } from "../../shared/models/property";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import DefaultImage from "../../images/default-home.jpg";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import millify from "millify";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import { numberFormat } from "../../shared/helpers";

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

  return (
    <Box sx={{ margin: 2 }}>
      <Link
        to={`/property/${externalID}`}
        style={{ textDecoration: "none", color: "#000", cursor: "pointer" }}
      >
        <Box sx={{}}>
          <Box
            sx={{
              height: 350,
            }}
          >
            <img
              alt=""
              src={coverPhoto ? coverPhoto?.url : DefaultImage}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Box>
              <Avatar src={agency?.logo?.url} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {isVerified && (
                <Box sx={{ marginX: 2 }}>
                  <VerifiedIcon />
                </Box>
              )}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                  {`AED ${numberFormat(price)} `}
                </Typography>
                <Typography sx={{textTransform: "capitalize"}}> {rentFrequency && `Rent Frequency: ${rentFrequency}`}</Typography>
              </Box>
            </Box>
          </Box>

          <Box
            id="asdf"
            sx={{
              padding: 1,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {rooms}
            <Box sx={{ marginX: 2, marginTop: 0.5 }}>
              <BedIcon />
            </Box>
            {baths}
            <Box sx={{ marginX: 2, marginTop: 0.5 }}>
              <BathtubIcon />
            </Box>
            {millify(area, {
              precision: 2,
              decimalSeparator: ",",
            })}
            sqft <Box sx={{ marginX: 2, marginTop: 0.5 }}><Grid4x4Icon /></Box>
          </Box>

          <Typography variant="h5" sx={{ textAlign: "center" }}>
            {title?.length > 30 ? title?.substring(0, 30) + "..." : title}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default Property;
