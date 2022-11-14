import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const PagesContainer = ({ children }) => {
  return (
    <Grid2
      xs={12}
      sm={12}
      md={9}
      lg={10}
      xl={10}
      sx={{ backgroundColor: "secondary.main" }}
    >
      {children}
    </Grid2>
  );
};

export default PagesContainer;
