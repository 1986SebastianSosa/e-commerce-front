import { createTheme } from "@mui/material";

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#ab832a",
      light: "#f5ebd5",
      dark: "#3E2707",
    },
    secondary: {
      main: "#7B8723",
      light: "#f6feea",
      contrastText: "#F2DBB8",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.8)",
      secondary: "#494948;",
    },
    background: {
      default: "#FCFAF6",
      paper: "#FCFAF6",
    },
  },
  typography: {
    fontFamily: ["Raleway"],
  },
});
