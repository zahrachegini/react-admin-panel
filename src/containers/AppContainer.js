import "./../App.css";
import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import { useState } from "react";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { Typography, Box } from "@mui/material";
import Page from "../pages/components/Page";
import DrawerActionButton from "./../components/drawer/DrawerActionButton";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (e, newPage) => {
    setPageNumber(newPage);
  };
  return (
    <MainContext.Provider
      value={{ pageNumber, handlePageNumber, drawerOpen, setDrawerOpen }}
    >
      <MainLayout>
        <SidebarContainer>
          <Sidebar value={pageNumber} handleChange={handlePageNumber} />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <Page pageNumber={pageNumber} index={0}>
            <Box
              sx={{
                backgroundImage: `url(${require("../assets/images/01.jpg")})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
              }}
            >
              <Typography
                variant="h5"
                sx={{ textAlign: "center", color: "whitesmoke" }}
              >
                صفحه اصلی
              </Typography>
            </Box>
          </Page>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
