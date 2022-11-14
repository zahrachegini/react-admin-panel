import React, { useContext } from "react";

import { Tabs, Tab } from "@mui/material";
import { grey } from "@mui/material/colors";
import MainContext from "../../context";
import { tabsData } from "../data/tabsData.sidebar";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);

  const data = tabsData();
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            my: 0.5,
            mx: 1,
            backgroundColor: grey[800],
            borderRadius: 2,
            "&.MuiTab-root": { minHeight: 50 },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        ></Tab>
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
