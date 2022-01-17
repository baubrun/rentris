import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import type { AppDispatch, RootState } from "../../../redux/store";
import { IPropertyQuery } from "../../../shared/models/property";
import { parsePath } from "../../../shared/helpers";

const Search: React.FC = () => {
  const theme = useTheme();
  const { search } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((s: RootState) => s.layout);
  const [properties, setProperties] = useState<any[]>([]);
  const [searchProperties, setSearchProperties] = useState<IPropertyQuery>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [filterDirty, setFilterDirty] = useState<boolean>(false);

  const propertyType = parsePath(search);

  useEffect(() => {
    setSearchProperties({ purpose: propertyType });
  }, [propertyType]);

  const getProperties = async (searchProperties: IPropertyQuery) => {
    try {
      if (!filterDirty) dispatch(showLoader());
      else setLoading(true);
      const result = await propertyService.getProperties(
        propertyQuery(searchProperties)
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
    if (!filterDirty) dispatch(hideLoader());
    else {
      setLoading(false);
      setFilterDirty(false);
    }
  };

  useEffect(() => {
    getProperties(searchProperties);
  }, [searchProperties]);

  const handleReset = () => {
    if (Object.values(searchProperties)?.length <= 1) return;
    setFilterDirty(true);
    setSearchProperties({ purpose: propertyType });
  };

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
          <Grid container alignItems="center" justifyContent="flex-start">
            <Grid item>
              <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                Search By Filters
              </Typography>
            </Grid>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <SearchFilter
            handleReset={handleReset}
            setFilterDirty={setFilterDirty}
            searchProperties={searchProperties}
            setSearchProperties={setSearchProperties}
            loading={loading}
          />
        </AccordionDetails>
      </Accordion>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography
            variant="h5"
            sx={{
              marginTop: 2,
              textTransform: "uppercase",
              fontWeight: "bolder",
            }}
          >
            {propertyType && `Properties ${propertyType}`}
          </Typography>
        </Grid>
      </Grid>

      <Box>
        {properties?.map((p) => (
          <Property property={p} key={p?.id} />
        ))}
      </Box>

      <Box>
        {!properties?.length  && !isLoading && !loading && (
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ marginY: 10 }}
          >
            <Grid item>
              <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
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
