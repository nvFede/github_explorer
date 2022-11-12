import { CardMedia, Grid } from "@mui/material";
import React from "react";
import UserDescription from "../UserDescription";
import UserHeader from "../UserHeader";

const UserCard = ({ userState }) => {
  return (
    <Grid container sx={{ padding: " 10px", backgroundColor:'#202545' }}>
      <Grid item xs={3}>
        <CardMedia
          sx={{ borderRadius: "50%"}}
          component="img"
          alt="github user"
          image={userState.avatar_url}
        />
      </Grid>
      <Grid item xs={9} p={2}>
        <UserHeader userState={userState} />
        <UserDescription userState={userState} />
      </Grid>
    </Grid>
  );
};

export default UserCard;
