import React from "react";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";
import {
  Typography,
  Avatar,
  Divider,
  Box,
  Hidden,
  Tabs,
  Tab,
} from "@mui/material";
import { grey } from "@mui/material/colors";

const DrawerContent = ({ value, handleChange }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
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
      <Divider variant="middle" color={grey[800]} sx={{ mt: 2 }} />

      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
      >
        <Tab
          icon={<HomeRounded />}
          label="خانه"
          iconPosition="start"
          {...tabProps(0)}
        ></Tab>
        <Tab
          icon={<FaceRounded />}
          label="درباره من"
          iconPosition="start"
          {...tabProps(1)}
        ></Tab>
        <Tab
          icon={<TextSnippetRounded />}
          label="رزومه من"
          iconPosition="start"
          {...tabProps(2)}
        ></Tab>
        <Tab
          icon={<TerminalRounded />}
          label="نمونه کارها"
          iconPosition="start"
          {...tabProps(3)}
        ></Tab>
        <Tab
          icon={<MessageRounded />}
          label="نظرات"
          iconPosition="start"
          {...tabProps(4)}
        ></Tab>
        <Tab
          icon={<ConnectWithoutContactRounded />}
          label="تماس با من"
          iconPosition="start"
          {...tabProps(5)}
        ></Tab>
      </Tabs>
      <Divider variant="middle" color={grey[800]} sx={{ mt: 2 }} />
      <Box
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
      </Box>
    </Box>
  );
};

export default DrawerContent;
