import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import VerifiedIcon from "@mui/icons-material/Verified";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import Grid4x4Icon from "@mui/icons-material/Grid4x4";
import { numberFormat } from "../../../shared/helpers";
import ImageScrollBar from "../../ImageScrollBar/ImageScrollBar";
import { useTheme, Grid } from "@mui/material";
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
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();

  const getPropertyDetail = async (id: string) => {
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
    if (id) getPropertyDetail(id);
  }, []);

  return (
    <>
      {detail?.id && (
        <Box sx={{ margin: 2 }}>
          {detail?.photos && <ImageScrollBar data={detail?.photos} />}
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
                <Avatar src={detail?.agency?.logo?.url} />
              </Grid>

              <Grid item>{detail?.isVerified && <VerifiedIcon />}</Grid>

              <Grid item>
                <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                  {`AED ${numberFormat(detail?.price)} `}
                </Typography>
                <Typography sx={{ textTransform: "capitalize" }}>
                  {detail?.rentFrequency &&
                    `Rent Frequency: ${detail?.rentFrequency}`}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography>{detail?.rooms}</Typography>
            </Grid>

            <Grid item sx={{ marginX: 2, marginTop: 0.5 }}>
              <BedIcon />
            </Grid>

            <Grid item>
              <Typography>{detail?.baths}</Typography>
            </Grid>

            <Grid item sx={{ marginX: 2, marginTop: 0.5 }}>
              <BathtubIcon />
            </Grid>

            <Grid item>
              <Typography>
                {numberFormat(detail?.area)}
                sqft
              </Typography>
            </Grid>

            <Grid item sx={{ marginX: 2, marginTop: 0.5 }}>
              <Grid4x4Icon />
            </Grid>
          </Grid>

          <Grid container sx={{ marginTop: 2 }}>
            <Grid item>
              <Typography sx={{ fontWeight: "bolder", marginBottom: 2 }}>
                {detail?.title}
              </Typography>
            </Grid>

            <Grid item>
              <Typography sx={{ color: "gray" }}>
                {detail?.description}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginTop: 3 }}
          >
            <Grid item>
              <Typography sx={{ textTransform: "uppercase" }}>Type</Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontWeight: "bolder", textTransform: "uppercase" }}
              >
                {detail?.type}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ textTransform: "uppercase" }}>
                purpose
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ fontWeight: "bolder", textTransform: "uppercase" }}
              >
                {detail?.purpose}
              </Typography>
            </Grid>

            {detail?.furnishingStatus && (
              <>
                <Grid item>
                  <Typography sx={{ textTransform: "uppercase" }}>
                    Furnishing Status
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ fontWeight: "bolder", textTransform: "uppercase" }}
                  >
                    {detail?.furnishingStatus}
                  </Typography>
                </Grid>
              </>
            )}

            {detail?.amenities?.length > 0 && (
              <Grid item container direction="row" alignItems="center">
                <Grid item>
                  <Typography
                    sx={{
                      marginTop: 5,
                      fontWeight: "bolder",
                      textTransform: "uppercase",
                    }}
                  >
                    Amenities
                  </Typography>
                </Grid>

                <Grid id="amenities" container item flexWrap="wrap">
                  {detail?.amenities?.map((item: any) =>
                    item?.amenities?.map((amenity: any) => (
                      <Grid item key={amenity?.text}>
                        <Typography
                          variant="body1"
                          sx={{
                            borderRadius: 5,
                            backgroundColor: theme.palette.secondary.dark,
                            color: theme.palette.secondary.light,
                            fontWeight: "bolder",
                            margin: 1,
                            padding: 2,
                          }}
                        >
                          {amenity?.text}
                        </Typography>
                      </Grid>
                    ))
                  )}
                </Grid>
              </Grid>
            )}

          </Grid>
        </Box>
      )}
    </>
  );
};

export default PropertyDetail;
