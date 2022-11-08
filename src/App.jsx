import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Search from "./components/Search";
import { getGithubUser } from "./lib/users";
import UserCard from "./components/UserCard";

function App() {
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
      console.log(user);
    } catch (error) {
      setNotFoundError(true);
      console.log(error);
    }
  };

  return (
    <Container
      sx={{
        height: "80vh",
        width: "80vw",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        border: "1px solid white",
      }}
    >
      <Search inputUser={inputUser} setInputUser={setInputUser} />
      <UserCard userState={userState} />
    </Container>
  );
}

export default App;
