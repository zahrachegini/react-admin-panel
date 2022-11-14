import React, { useContext } from "react";
import { Box, Fab } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";

import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);
  return (
    <Box
      sx={{
        display: {
          position: "absolute",
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <Fab
        aria-label="Sidebar"
        size="small"
        sx={{ m: 2, backgroundColor: grey[500] }}
        onClick={() => setDrawerOpen(true)}
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
