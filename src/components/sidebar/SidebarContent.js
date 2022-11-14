import React from "react";
import { Divider, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarHeader, SidebarTabs } from "./";

const SidebarContent = () => {
  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
      <SidebarHeader />
      <Divider variant="middle" color={grey[800]} sx={{ mt: 2 }} />

      <SidebarTabs />
      <Divider variant="middle" color={grey[800]} sx={{ mt: 2 }} />
      {/* <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "center",
          height: 100,
        }}
      >
        <Typography variant="subtitle2" color="whitesmoke">
          طراحی شده با{" "}
          <FavoriteRounded
            sx={{ verticalAlign: "middle", color: "tomato", height: 20 }}
          />{" "}
        </Typography>
        <Typography variant="caption" color="whitesmoke" sx={{ mt: 2 }}>
          کپی رایت 1401{""}{" "}
          <CopyrightRounded sx={{ verticalAlign: "middle", height: 16 }} />
        </Typography>
      </Box> */}
    </Box>
  );
};

export default SidebarContent;
