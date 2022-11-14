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
            padding: "3rem",
            backgroundColor: "primary.main",
          }}
        >
          <Stack
            direction="row"
            sx={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "10px",
              backgroundColor: "secondary.main",
              padding: "10px 0",
            }}
          >
            <GitHubIcon sx={{ color: "text.primary", fontSize: "50px", marginLeft: '10px' }} />
            <Search inputUser={inputUser} setInputUser={setInputUser}  />
            <Button
              sx={{ backgroundColor: "primary.main", marginRight: "10px" }}
              variant="contained"
              onClick={changeTheme}
            >
              {!darkMode ? (
                <WbIncandescentIcon sx={{ color: "text.primary" }} />
              ) : (
                <WbIncandescentOutlinedIcon sx={{ color: "text.primary" }} />
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
