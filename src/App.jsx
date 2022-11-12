import { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Container,
  Stack,
  ThemeProvider,
} from "@mui/material";
import Search from "./components/Search";
import { getGithubUser } from "./data/users";
import UserCard from "./components/UserCard";
import { darkTheme, lightTheme } from "./utils/themeConfig";
import { SetupThemeProvider } from "./context/SetupThemeContext";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  // Theme Config setup
  const [darkMode, setDarkMode] = useState(true);
  const changeTheme = () => {
    console.log("click");
    setDarkMode(!darkMode);
  };

  const [inputUser, setInputUser] = useState("nvFede");
  const [notFoundError, setNotFoundError] = useState(false);
  const [userState, setUserState] = useState("");
  useEffect(() => {
    searchUser(inputUser);
  }, [inputUser]);

  const searchUser = async (userFetch) => {
    try {
      const user = await getGithubUser(userFetch);
      setUserState(user.data);
      // console.log(user);
    } catch (error) {
      setNotFoundError(true);
      console.log(error);
    }
  };

  return (
    <SetupThemeProvider value={{ darkMode, changeTheme }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container
          sx={{
            height: "80vh",
            width: "80vw",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: "100%",
              backgroundColor: "blue",
              borderRadius: "10px",
              padding: "5px",
              marginBottom: '10px'
            }}
          >
            
              <GitHubIcon  sx={{ color: "white",fontSize: '50px' }} />
            
            <Search inputUser={inputUser} setInputUser={setInputUser} />
            <Button color="primary" variant="contained" onClick={changeTheme}>
              {!darkMode ? (
                <WbIncandescentIcon />
              ) : (
                <WbIncandescentOutlinedIcon />
              )}
            </Button>
          </Stack>

          <UserCard userState={userState} />
        </Container>
      </ThemeProvider>
    </SetupThemeProvider>
  );
}

export default App;
