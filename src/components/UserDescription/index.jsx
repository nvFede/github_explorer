import { Grid, Stack, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import BusinessIcon from '@mui/icons-material/Business';
import LanguageIcon from '@mui/icons-material/Language';
import React from "react";

const UserDescription = ({ userState }) => {
  let {
    bio,
    followers,
    following,
    public_repos,
    location_on,
    twitter_username,
    company,
    created_at,
    blog,
  } = userState;

  let new_date = new Date(created_at);
  console.log(new_date);

  return (
    <>
      <Stack sx={{ bacgroundColor: "secondary.main" }}>
        <Stack direction={"row"} sx={{ margin: '20px 0', justifyContent: 'space-between'}}>
          <Typography sx={{ color: "text.primary", fontStyle:'italic' }}>
            {bio !== null ? bio : "No Bio found on this profile."}
          </Typography>

          <Typography sx={{ color: "text.primary" }}>{new_date.toDateString()}</Typography>
        </Stack>
        <Grid container wrap="nowrap" sx={{ gap: "10px", margin: "10px 0" }}>
          <Grid
            item
            xs={4}
            sx={{
              color: "text.primary",
              backgroundColor: "primary.main",
              borderRadius: "5px",
              alignItems: "center",
              paddingBottom: "16px",
            }}
          >
            <Typography sx={{ textAlign: "center" }} m={2} variant="h3">
              Repos
            </Typography>
            <Typography
              sx={{ textAlign: "center", margin: "0 !important" }}
              m={2}
              variant="h3"
            >
              {public_repos}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              color: "text.primary",
              backgroundColor: "primary.main",
              borderRadius: "5px",
              alignItems: "center",
              paddingBottom: "16px",
            }}
          >
            <Typography sx={{ textAlign: "center" }} m={2} variant="h3">
              Followers
            </Typography>
            <Typography
              sx={{ textAlign: "center", margin: "0 !important" }}
              m={2}
              variant="h3"
            >
              {followers}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              color: "text.primary",
              backgroundColor: "primary.main",
              borderRadius: "5px",
              alignItems: "center",
              paddingBottom: "16px",
            }}
          >
            <Typography sx={{ textAlign: "center" }} m={2} variant="h3">
              Following
            </Typography>
            <Typography
              sx={{ textAlign: "center", margin: "0 !important" }}
              m={2}
              variant="h3"
            >
              {following}
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ marginTop: "20px" }}>
          <Grid item xs={6}>
            <Stack
              direction="row"
              spacing={1}
              sx={{ margin: "10px 0", color: " text.primary" }}
            >
              <TwitterIcon sx={{ color: "text.primary" }} />
              <Typography sx={{ color: "text.primary" }}>
                {twitter_username != null ? twitter_username : "Not Available"}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ margin: "10px 0" }}>
              <BusinessIcon sx={{ color: "text.primary" }} />
              <Typography sx={{ color: "text.primary" }}>
                {company != null ? company : "Not Available"}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} sx={{ margin: "10px 0" }}>
              <LocationOnIcon sx={{ color: "text.primary" }} />
              <Typography sx={{ color: "text.primary" }}>
                {location_on != null ? location_on : "Not Available"}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ margin: "10px 0" }}>
              <LanguageIcon sx={{ color: "text.primary" }} />
              <Typography sx={{ color: "text.primary" }}>
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
