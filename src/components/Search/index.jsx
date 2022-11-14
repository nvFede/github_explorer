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
    console.log(inputValue);
    if(e.target.value) {

    }
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
        paddingLeft: '10px',
      }}
    >
      <TextField
        label="Search Github User"
        variant="outlined"
        success
        placeholder="username"
        value={inputValue}
        onChange={onSearchChange}
        
        sx={{
          color:'#535B91',
          width: "100%",
          borderRadius: "6px",
          marginLeft: '10px'
        }}
      ></TextField>
      <IconButton
        sx={{ left: "-50px", color: 'primary.main' }}
        size="small"
        onClick={handleSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Search;
