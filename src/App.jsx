
import React, { useMemo } from "react";
import MainRoutes from "./Routes/Routes";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from 'react-toastify';

import "./styles.css";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      <MainRoutes />
    </ThemeProvider>
  );
}

export default App;
