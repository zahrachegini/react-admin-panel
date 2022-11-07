import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { theme } from "./../ui/theme";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

//Note Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children }) => {
  
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی زهرا چگینی</title>
          </Helmet>
          {/* Grid system */}
          <Grid2 container sx={{ height: "100vh" }}>
            {children}
          </Grid2>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
