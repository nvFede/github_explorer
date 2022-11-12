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
        width: "100%",
        marginBottom:'20px',
      }}
    >
      <TextField
        label="Search Github User"
        variant="outlined"
        success
        placeholder="@username"
        value={inputValue}
        onChange={onSearchChange}
        sx={{
          color:'#535B91',
          width: "100%",
          border: "1px solid #535B91",
          borderRadius: "6px",
        }}
      ></TextField>
      <IconButton
        sx={{ left: "-50px", color: "#535B91" }}
        size="small"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Search;
