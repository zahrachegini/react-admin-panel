import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Drawer, Box, Fab } from "@mui/material";
import { grey } from "@mui/material/colors";
import DrawerContent from "./ui/DrawerContent";
import { MenuRounded } from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Grid2
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{ backgroundColor: grey[900] }}
    >
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Fab
          color="primary"
          aria-label="Sidebar"
          size="small"
          sx={{ m: 2 }}
          onClick={handleDrawerToggle}
        >
          <MenuRounded />
        </Fab>
      </Box>
      <DrawerContent value={value} handleChange={handleChange} />
      <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
          },
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <DrawerContent value={value} handleChange={handleChange} />
      </Drawer>
    </Grid2>
  );
};

export default Sidebar;

{
  /* <Tab
            label={
              <div>
                <Typography variant="subtitle2" color="whitesmoke">
                  <HomeRounded sx={{ verticalAlign: "middle", mx: 2 }} />
                  خانه
                </Typography>
              </div>
            }
          ></Tab> */
}
