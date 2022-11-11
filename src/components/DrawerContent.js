import React from "react";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded
} from "@mui/icons-material";
import { Divider, Box, Tabs, Tab } from "@mui/material";
import { grey } from "@mui/material/colors";
import SidebarHeader from "./sidebar/SidebarHeader";

const DrawerContent = ({ value, handleChange, setDrawerOpen }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", mt: 2 }}>
      <SidebarHeader />
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
          sx={{
            my: 0.5,
            mx: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            "&.MuiTab-root": { minHeight: 50 },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(0)}
        ></Tab>
        <Tab
          icon={<FaceRounded />}
          label="درباره من"
          iconPosition="start"
          sx={{
            my: 0.5,
            mx: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            "&.MuiTab-root": { minHeight: 50 },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(1)}
        ></Tab>
        <Tab
          icon={<TextSnippetRounded />}
          label="رزومه من"
          iconPosition="start"
          sx={{
            my: 0.5,
            mx: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            "&.MuiTab-root": { minHeight: 50 },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(2)}
        ></Tab>
        <Tab
          icon={<TerminalRounded />}
          label="نمونه کارها"
          iconPosition="start"
          sx={{
            my: 0.5,
            mx: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            "&.MuiTab-root": { minHeight: 50 },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(3)}
        ></Tab>
        <Tab
          icon={<MessageRounded />}
          label="نظرات"
          iconPosition="start"
          sx={{
            my: 0.5,
            mx: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            "&.MuiTab-root": { minHeight: 50 },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(4)}
        ></Tab>
        <Tab
          icon={<ConnectWithoutContactRounded />}
          label="تماس با من"
          iconPosition="start"
          sx={{
            my: 0.5,
            mx: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            "&.MuiTab-root": { minHeight: 50 },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tabProps(5)}
        ></Tab>
      </Tabs>
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

export default DrawerContent;
