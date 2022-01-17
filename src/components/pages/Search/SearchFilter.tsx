import React, { useState } from "react";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { filterData } from "./filterData";
import { useTheme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

interface IProps {
  searchProperties: any;
  setSearchProperties: (x: any) => void;
  setFilterDirty: (y: boolean) => void;
  handleReset: () => void;
  loading: boolean;
}

const SearchFilter: React.FC<IProps> = (props) => {
  const {
    handleReset,
    searchProperties,
    setSearchProperties,
    loading,
    setFilterDirty,
  } = props;
  const theme = useTheme();
  const [filters] = useState<any>(filterData);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        rowSpacing={2}
        columnSpacing={2}
      >
        <Grid
          container
          item
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{marginBottom: 2}}
        >
          <Button variant="outlined" onClick={() => handleReset()}>
            RESET
          </Button>
        </Grid>

        {filters.map((f: any) => {
          return (
            <Grid item key={f?.queryName}>
              <FormControl
                sx={{
                  minWidth: 200,
                }}
              >
                <InputLabel id="filter-select">{f?.placeholder}</InputLabel>
                <Select
                  fullWidth
                  label={f?.placeholder}
                  labelId="filter-select"
                  onChange={(evt) => {
                    setSearchProperties((prev: any) => ({
                      ...prev,
                      [f?.queryName]: evt.target.value,
                    }));
                    setFilterDirty(true);
                  }}
                  value={searchProperties[f?.queryName] || ""}
                  sx={{ color: theme.palette.primary.main }}
                >
                  {f?.items?.map((item: any) => (
                    <MenuItem key={item?.value} value={item?.value}>
                      {item?.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {loading && (
                <CircularProgress
                  size={60}
                  sx={{
                    color: theme.palette.primary.light,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                    zIndex: 100,
                  }}
                />
              )}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SearchFilter;
