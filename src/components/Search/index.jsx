import React, { useEffect, useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = (props) => {
  const { inputUser, setInputUser } = props;
  useEffect(() => {}, []);

  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () => {
    setInputUser(inputValue);

    console.log(inputUser);
  };
  const onSearchChange = (e) => {
    const inputVal = e.target.value;
    setInputValue(inputVal);
  };
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "80%",
      }}
    >
      <TextField
        label="Search Github User"
        variant="outlined"
        placeholder="@username"
        value={inputValue}
        onChange={onSearchChange}
        sx={{ width: "90%", border: "1px solid white", borderRadius: "6px" }}
      ></TextField>
      <IconButton sx={{ left: "-50px", color:'white' }} size="small" onClick={handleSubmit}>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Search;
