import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./page/Main/Main";
import Contacts from "./page/Contacts/Contacts";

import { ThemeProvider, createTheme } from "@mui/material";
import styles from "./App.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ffffff",
    },
    background: {
      default: "#212121",
      paper: "#212121",
    },
    info: {
      main: "#212121",
      contrastText: "#212121",
    },
  },
  typography: {
    fontFamily: "Montserrat Alternates",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className={styles.App}>
          <Routes>
            <Route path="main" element={<Main />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </div>
    </ThemeProvider>
  );
}

export default App;
