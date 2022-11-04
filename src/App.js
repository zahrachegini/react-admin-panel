import { ThemeProvider, createTheme } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Button } from "@mui/material";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import "./App.css";

//Note Create Custom Theme
const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir, roboto",
  },
});

//Note Create RTL Cache
const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وب سایت شخصی زهرا چگینی</title>
          </Helmet>
          <div className="App">
            <Button variant="contained">کلیک کن</Button>
          </div>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
