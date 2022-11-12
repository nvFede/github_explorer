import { createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3fA011",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
export { darkTheme };


const lightTheme = createTheme({
  palette: {
    primary: {
      light: "#FFFce8",
      main: "#FFFce8",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
export { lightTheme };
