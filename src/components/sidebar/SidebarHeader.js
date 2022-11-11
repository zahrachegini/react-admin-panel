import React from "react";
import { Typography, Avatar } from "@mui/material";

const SidebarHeader = () => {
  return (
    <>
      <Avatar
        src={require("../../assets/images/avatar.png")}
        // src="./images.jpg"
        sx={{
          height: 150,
          width: 150,
          margin: "0 auto",
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        ZC
      </Avatar>
      <Typography variant="h6" color="whitesmoke" sx={{ mt: 2, mb: 2 }}>
        زهرا چگینی
      </Typography>

      <Typography variant="caption" color="whitesmoke">
        توسعه دهنده فرانت
      </Typography>
    </>
  );
};

export default SidebarHeader;
