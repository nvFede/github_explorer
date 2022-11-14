import { Stack, Typography } from "@mui/material";
import React from "react";

const UserInfo = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;

  return (
    <>
      <Stack width="100%">
        <Typography variant="h2" sx={{ color: "text.primary" }}>
          {name}
        </Typography>

        <Typography variant="h4" sx={{ color: "text.primary" }}>
          @{login}
        </Typography>
      </Stack>
    </>
  );
};

export default UserInfo;
