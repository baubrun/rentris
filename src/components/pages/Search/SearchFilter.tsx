import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { filterData } from "./filterData";
import { useTheme } from "@mui/material";
import {useLocation} from "react-router-dom"
import { parsePath } from "../../../shared/helpers";

interface IProps {
    searchProperties: any, 
    setSearchProperties: (x: any) => void
}

const SearchFilter: React.FC<IProps> = (props) => {
  const {searchProperties, setSearchProperties} = props;
  const theme = useTheme();
  const {search} = useLocation()
  const [filters] = useState<any>(filterData);
  const [forSale, setForSale] = useState<boolean>(false)

  useEffect(() => {
    setForSale(parsePath(search) === "for-sale")
  }, [search])

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
                disabled={forSale && f.queryName === "rentFrequency"}
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
          )
          }
         
        )}

      </Grid>
    </>
  );
};

export default SearchFilter;
