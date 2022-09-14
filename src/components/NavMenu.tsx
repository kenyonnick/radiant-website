import { Grid } from "@mui/material"

export const NavMenu = () => {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="space-between" xs={8}>
              <Grid item xs={1}>
                Twitch
              </Grid>
              <Grid item xs={1}>
                YouTube
              </Grid>
              <Grid item xs={1}>
                Twitter
              </Grid>
              <Grid item xs={1}>
                Instagram
              </Grid>
              <Grid item xs={1}>
                About Us
              </Grid>
            </Grid>
    )
}