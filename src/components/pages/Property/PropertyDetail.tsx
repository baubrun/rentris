import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IProperty } from "../../../shared/models/property";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import millify from "millify";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import { numberFormat } from "../../../shared/helpers";
import ImageScrollBar from "../../ImageScrollBar/ImageScrollBar";
import { dividerClasses, Grid } from "@mui/material";
import {
    hideLoader,
    showLoader,
    showToaster,
  } from "../../../redux/layoutSlice";
  import { STATUS_ERROR } from "../../../shared/constants/status";
  import propertyService from "../../../services/property";

const PropertyDetail: React.FC<any> = () => {
    const dispatch = useDispatch();
    const [detail, setDetail] = useState<any>({});
    const { id } = useParams<{id: string}>();

    const getPropertyDetail = async () => {
        try {
          dispatch(showLoader());
          const result = await propertyService.getPropertyDetail(id);
          setDetail(result);
        } catch (err: any) {
          dispatch(
            showToaster({
              message: err?.response ? err?.response.data : err?.message,
              status: STATUS_ERROR,
            })
          );
        }
        dispatch(hideLoader());
      };
    
      useEffect(() => {
        if (id) getPropertyDetail()
      }, [])

  return (
    <>
        {detail?.id && (

       
      <Box sx={{ margin: 2 }}>
        <Box >
        {detail?.photos && <ImageScrollBar data={detail?.photos} />}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Box>
              <Avatar src={detail?.agency?.logo?.url} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {detail?.isVerified && (
                <Box sx={{ marginX: 2 }}>
                  <VerifiedIcon />
                </Box>
              )}
              <Box>
                <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                  {`AED ${numberFormat(detail?.price)} `}
                </Typography>
                <Typography sx={{ textTransform: "capitalize" }}>
                  {detail?.rentFrequency && `Rent Frequency: ${detail?.rentFrequency}`}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              padding: 1,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {detail?.rooms}
            <Box sx={{ marginX: 2, marginTop: 0.5 }}>
              <BedIcon />
            </Box>
            {detail?.baths}
            <Box sx={{ marginX: 2, marginTop: 0.5 }}>
              <BathtubIcon />
            </Box>
            {numberFormat(detail?.area)}
            sqft{" "}
            <Box sx={{ marginX: 2, marginTop: 0.5 }}>
              <Grid4x4Icon />
            </Box>
          </Box>

          <Box sx={{ marginTop: 2 }}>
            <Typography sx={{ fontWeight: "bolder", marginBottom: 2 }}>
              {detail?.title}
            </Typography>
            <Typography sx={{ color: "gray" }}>{detail?.description}</Typography>
          </Box>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography>Type</Typography>
              <Typography sx={{ fontWeight: "bolder" }}>{detail?.type}</Typography>
            </Grid>

            <Grid item>
              <Typography>purpose</Typography>
              <Typography sx={{ fontWeight: "bolder" }}>{detail?.purpose}</Typography>
            </Grid>
            <Grid item>
              <Typography>Furnishing Status</Typography>
              <Typography sx={{ fontWeight: "bolder" }}>
                {detail?.furnishingStatus}
              </Typography>
            </Grid>
            <Grid item>
              {detail?.amenities.length && (
                <Typography sx={{ marginTop: 5 }}>Facilites:</Typography>
              )}

              <Grid container item flexWrap="wrap">
                {detail?.amenities?.map((item: any) =>
                  item?.amenities?.map((amenity: any) => (
                    <Grid item key={amenity?.text}>
                      <Typography
                        variant="body1"
                        
                        sx={{
                          fontWeight: "bolder",
                        }}
                      >
                        {amenity?.text}
                      </Typography>
                    </Grid>
                  ))
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
       )}
    </>
  );
};

export default PropertyDetail;
