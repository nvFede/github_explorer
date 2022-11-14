import { createTheme } from "@mui/material/styles";
import {indigo} from '@mui/material/colors';


const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#274472", //
      dark: "indigo[800]",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#41729F", //
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      paper: "#111111",
    },
    text: {
      primary: "#C3E0E5", //
      secondary: "#46505A",
    },
  },
});
export { darkTheme };

const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#FFFce8",
      main: "#F0F2F3", //
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#CBE6EF", //
      dark: "#ba000d",
      contrastText: "#000",
    },
    text: {
      primary: "#003366", //
      secondary: "#46505A",
    },
    background: {
      paper: "#EEEEEE",
    },
  },
});
export { lightTheme };
