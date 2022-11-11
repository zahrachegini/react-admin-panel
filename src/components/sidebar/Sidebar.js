import { useState } from "react";
import { Drawer, Box, Fab } from "@mui/material";
import { red } from "@mui/material/colors";
import DrawerContent from "../DrawerContent";
import { MenuRounded } from "@mui/icons-material";
import SidebarContainer from "../../containers/SidebarContainer";

const Sidebar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
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
          aria-label="Sidebar"
          size="small"
          sx={{ m: 2, backgroundColor: red[500] }}
          onClick={() => setDrawerOpen(true)}
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
        <DrawerContent
          value={value}
          handleChange={handleChange}
          setDrawerOpen={setDrawerOpen}
        />
      </Drawer>
    </>
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
