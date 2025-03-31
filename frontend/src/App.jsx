import { Box, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import theme from "./theme/theme.js";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import InitialLoadingScreen from "./components/initialLoadingScreen/index.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InitialLoadingScreen />
    </ThemeProvider>
  );
}

export default App;
