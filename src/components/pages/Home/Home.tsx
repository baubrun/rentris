import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Banner from "../../Banner/Banner";
import Property from "../../Property/Property";
import propertyService from "../../../services/property";
import type { AppDispatch } from "../../../redux/store";
import {
  hideLoader,
  showLoader,
  showToaster,
} from "../../../redux/layoutSlice";
import { STATUS_ERROR } from "../../../shared/constants/status";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [forSale, setForSale] = useState<any[]>([]);
  const [forRent, setForRent] = useState<any[]>([]);

  const getProperties = async (propertyType: string, cb: (x: any) => void) => {
    try {
      dispatch(showLoader());
      const result = await propertyService.getProperties(
        `/properties/list?locationExternalIDs=5002&purpose=${propertyType}&hitsPerPage=6`
      );
      cb(result);
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
    getProperties("for-sale", setForSale);
    getProperties("for-rent", setForRent);
  }, []);

  return (
    <Box 
    sx={{ margin: 2 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Banner
            purpose="RENT A HOME"
            title1="Rental Homes for"
            title2="Everyone"
            desc1=" Explore from Apartments, builder floors, villas"
            desc2="and more"
            buttonText="Explore Renting"
            linkName="/search?purpose=for-rent"
            imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
          />
        </Grid>

        <Grid
          item
          container
          columns={{
            xs: 1,
            md: 12,
          }}
        >
          {forSale.map((property) => (
            <Grid item key={property.id} xs={12} md={4}>
              <Property property={property} />
            </Grid>
          ))}
        </Grid>

        <Grid item sx={{ marginTop: 5 }}>
          <Banner
            purpose="BUY A HOME"
            title1=" Find, Buy & Own Your"
            title2=" sDream Home"
            desc1=" Explore from Apartments, land, builder floors,"
            desc2=" villas and more"
            buttonText="Explore Buying"
            linkName="/search?purpose=for-sale"
            imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
          />
        </Grid>

        <Grid
          item
          container
          columns={{
            xs: 1,
            md: 12,
          }}
          
        >
          {forRent.map((property) => (
            <Grid item key={property.id} xs={12} md={4}>
              <Property property={property} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
