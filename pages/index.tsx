import { Container, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Radiant Gardeners</title>
        <meta name="description" content="A couple sharing their love for video games with each other." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <Container disableGutters maxWidth={false}>
        <Grid container direction="column" justifyContent="center" width="100%">
          <Grid container item direction="column" justifyContent="center" alignItems="center" sx={{ height: 240,
          width: '100%', background: 'linear-gradient(45deg, #f0f, #0ff)', color: 'white', padding: 4}} xs={2}>
            <Typography variant="h1" sx={{
              textTransform: 'uppercase',
              fontWeight: '600',
              textAlign: 'center',
            }}>
              Radiant Gardeners
            </Typography>
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
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
