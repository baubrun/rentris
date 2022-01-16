import React, { useState } from "react";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { filterData } from "../../../prac/filterData";
import { useTheme } from "@mui/material";

interface IProps {
    searchProperties: any, 
    setSearchProperties: (x: any) => void
}

const SearchFilter: React.FC<IProps> = (props) => {
  const theme = useTheme();
  const [filters] = useState<any>(filterData);
  const {searchProperties, setSearchProperties} = props;
  
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
        {filters.map((f: any) => (
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
                onChange={(evt) =>
                    setSearchProperties((prev: any) => ({
                    ...prev,
                    [f?.queryName]: evt.target.value,
                  }))
                }
                value={searchProperties[f?.queryName] || ""}
                sx={{color: theme.palette.primary.main}}
              >
                {f?.items?.map((item: any) => (
                  <MenuItem key={item?.value} value={item?.value}>
                    {item?.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SearchFilter;
