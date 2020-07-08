import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },

  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  imgConatiner: { margin: "2em", maxHeight: "17em", maxWidth: "17em" },
  img: {
    maxHeight: "15em",
    maxWidth: "15em",
  },
  sectorsPadding: {
    paddingTop: "1em",
  },
}));

const clients = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Clients | Vinayaka Security Services</title>

        <meta
          name="description"
          key="description"
          content="We provide best in class Security, Housekeeping, Outsourcing services in in Tirupati, Vijayawada, Visakhapatnam and Andhra Pradesh and always try to ensure clients satisfaction "
        />
        <meta
          property="og:title"
          content="Bring Vinayaka Security Services to the Tirupati, Vijayawada and Andhra Pradesh | Clients"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://www.vinayakaesmgroup.co.in/clients"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://www.vinayakaesmgroup.co.in/clients"
        />
      </Head>

      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h1">
          Our Clients
        </Typography>
      </Grid>

      <Grid
        item
        className={classes.rowContainer}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item className={classes.imgConatiner} container justify="center">
          <img src="assets/iskcon.png" alt="sj" className={classes.img} />
          <Typography align="center" variant="subtitle1">
            Iskcon
          </Typography>
        </Grid>
        <Grid item className={classes.imgConatiner} container justify="center">
          <img src="assets/chinmaya.jpg" alt="sj" className={classes.img} />
          <Typography align="center" variant="subtitle1">
            Chinmaya Vidyalaya
          </Typography>
        </Grid>
        <Grid item className={classes.imgConatiner} container justify="center">
          <img src="assets/mcc.jpg" alt="sj" className={classes.img} />
          <Typography align="center" variant="subtitle1">
            Model Career Centre
          </Typography>
        </Grid>
        <Grid item className={classes.imgConatiner} container justify="center">
          <img src="assets/podar.jpg" alt="sj" className={classes.img} />
          <Typography align="center" variant="subtitle1">
            Podar International School
          </Typography>
        </Grid>
        <Grid item className={classes.imgConatiner} container justify="center">
          <img
            src="assets/RsvpLogo_Black.jpg"
            alt="sj"
            className={classes.img}
          />
          <Typography align="center" variant="subtitle1">
            National Sanskrit University
          </Typography>
        </Grid>
        <Grid item className={classes.imgConatiner}>
          <img src="assets/air.jpg" alt="sj" className={classes.img} />
          <Typography align="center" variant="subtitle1">
            All India Radio
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h1">
          Up untill now provided services to these sectors....
        </Typography>
      </Grid>
      <Grid
        item
        className={classes.rowContainer}
        style={{
          marginTop: matchesMD ? "1em" : "2em",
          marginBottom: matchesMD ? "2em" : "5em",
        }}
      >
        <Grid container direction="column">
          <Grid item className={classes.sectorsPadding}>
            <Typography variant="h6">Engineering and Construction</Typography>
          </Grid>
          <Grid item className={classes.sectorsPadding}>
            <Typography variant="h6">Medical Institutions</Typography>
          </Grid>
          <Grid item className={classes.sectorsPadding}>
            <Typography variant="h6">Educational Institutions</Typography>
          </Grid>
          <Grid item className={classes.sectorsPadding}>
            <Typography variant="h6">Pharmaceutical Industry</Typography>
          </Grid>
          <Grid item className={classes.sectorsPadding}>
            <Typography variant="h6">Transportation Industry</Typography>
          </Grid>
          <Grid item className={classes.sectorsPadding}>
            <Typography variant="h6">Temples</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default clients;
