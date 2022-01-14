import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Home: React.FC = () => {
  

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item >
          <Box
            component="h1"
            sx={{
              fontSize: 64,
            }}
          >
            RENTRIS
          </Box>
        </Grid>
        <Grid item xs={12}>
          {/* <Box component="h3" sx={{ fontFamily: "Roboto", textAlign: "center" }}> */}
          
          {/* </Box> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
