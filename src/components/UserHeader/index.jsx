import { Stack, Typography } from "@mui/material";
import React from "react";

const UserInfo = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack>
        <Typography variant="h2"   sx={{color:'white'}}>{name}</Typography>
        <Typography variant="h4" sx={{color:'white'}}>@{login}</Typography>
        <Typography sx={{color:'white'}}>{created_at}</Typography>
      </Stack>
    </>
  );
};

export default UserInfo;
