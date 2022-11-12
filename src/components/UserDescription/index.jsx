import { Grid,  Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebAssetIcon from '@mui/icons-material/WebAsset';
import React from "react";

const UserDescription = ({ userState }) => {
  const {
    bio,
    followers,
    following,
    public_repos,
    location_on,
    twitter_username,
    company,
    blog,
  } = userState;

  return (
    <>
      <Stack>
        <Typography sx={{ color: "white" }}>
          {bio !== null ? bio : "No Bio found on this profile."}
        </Typography>

        <Stack direction="row">
          <Stack spacing={2} color={'primary'}>
            <Typography sx={{ color: "black", textAlign: 'center' }} m={2} variant="h3">Repos</Typography>
            <Typography sx={{ color: "black", textAlign: 'center' }} m={2} variant="h3">{public_repos}</Typography>
          </Stack>
          <Stack spacing={2} sx={{ backgroundColor: '#272845'}}>
            <Typography sx={{ color: "black", textAlign: 'center' }} m={2} variant="h3">Followers</Typography>
            <Typography sx={{ color: "black", textAlign: 'center' }} m={2} variant="h3">{followers}</Typography>
          </Stack>
          <Stack spacing={2} sx={{ backgroundColor: '#272845'}}>
            <Typography sx={{ color: "black", textAlign: 'center' }} m={2} variant="h3">Following</Typography>
            <Typography sx={{ color: "black", textAlign: 'center' }} m={2} variant="h3">{following}</Typography>
          </Stack>
        </Stack>

        <Grid container>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} sx={{ margin: '10px 0'}}>
              <TwitterIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>
                {twitter_username != null ? twitter_username : "Not Available"}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ margin: '10px 0'}}>
              <LocationOnIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>
                {company != null ? company : "Not Available"}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} sx={{ margin: '10px 0'}}>
              <LocationOnIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>
                {location_on != null ? location_on : "Not Available"}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ margin: '10px 0'}}>
              <GitHubIcon sx={{ color: "white" }} />
              <Typography sx={{ color: "white" }}>
                {blog != null ? blog : "Not Available"}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default UserDescription;
