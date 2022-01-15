import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { useTheme } from "@mui/material";
import SearchFilter from "./SearchFilter";
import FilterListIcon from "@mui/icons-material/FilterList";
import Property from "../../Property/Property";
import propertyService from "../../../services/property";
import {
    hideLoader,
    showLoader,
    showToaster,
  } from "../../../redux/layoutSlice";
  import { STATUS_ERROR } from "../../../shared/constants/status";
  import { propertyQuery } from "../../../services/helper";
  import type { AppDispatch } from "../../../redux/store";

const Search: React.FC = () => {
  const theme = useTheme();
  const { search } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  const [properties, setProperties] = useState<any[]>([]);


    const propertyType = search?.split("=")[1]
    
    const getProperties = async () => {
        try {
          dispatch(showLoader());
          const result = await propertyService.getProperties(
            propertyQuery({ purpose: propertyType })
          );
          setProperties(result);
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
          getProperties()
      }, [])

  return (
    <>
      <Accordion
        sx={{
          backgroundColor: theme.palette.secondary.light,
        }}
      >
        <AccordionSummary
          expandIcon={<FilterListIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
            Search By FIlters
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SearchFilter />
        </AccordionDetails>
      </Accordion>

      <Typography>{`Properties ${propertyType}`}</Typography>

      <Box>
        {properties?.map((p) => (
          <Property property={p} />
        ))}
      </Box>

      <Box>
        {properties?.length === 0 && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginY: 10 }}
          >
            <Grid item>
              <Typography variant="h4" sx={{ textTransform: "uppercase" }}>
                No results found
              </Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Search;
