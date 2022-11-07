// import { cloneElement } from "react";
// import {
//   AppBar,
//   Button,
//   Toolbar,
//   useScrollTrigger,
//   Typography,
// } from "@mui/material";
// import logo from "../../assets/images/logo.png";

// const Header = () => {
//   function ElevationScroll(props) {
//     const { children } = props;
//     const trigger = useScrollTrigger({
//       disableHysteresis: true,
//       threshold: 0,
//     });

//     return cloneElement(children, {
//       elevation: trigger ? 4 : 0,
//     });
//   }

//   return (
//     <>
//       <ElevationScroll>
//         <AppBar position="static">
//           <Toolbar disableGutters>
//             <img src={logo} alt="لوگو" style={{ width: "3rem" }} />
//             <Typography variant="h4" sx={{ marginLeft: 10, typography: "h3" }}>
//               وب سایت شخصی
//             </Typography>
//             <Button variant="contained" color="secondary">
//               کلیک کن
//             </Button>
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
//     </>
//   );
// };

// export default Header;
