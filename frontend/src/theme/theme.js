import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black as the primary color
    },
    secondary: {
      main: "#ffffff", // White as the secondary color
    },
    background: {
      default: "#ffffff", // White background for a clean look
    },
    text: {
      primary: "#000000", // Black text for readability
    },
  },
});

export default theme;
