import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "../src/Link";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const securityservice = ({ setPageIndex, setsubpageIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Best Security Service in Tirupati | Vijayawada | Andhra Pradesh
        </title>
        <meta
          name="description"
          key="description"
          content="We provide best in class security service in in Tirupati, Vijayawada, Visakhapatnam and Andhra Pradesh and always try to ensure clients satisfaction"
        />
        <meta
          property="og:title"
          content="Bring Vinayaka Security Services to the Tirupati, Vijayawada and Andhra Pradesh | Security Services"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://www.vinayakaesmgroup.co.in/securityservice"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://www.vinayakaesmgroup.co.in/securityservice"
        />
      </Head>
      <Grid
        className={classes.rowContainer}
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginLeft: "-3.5em", marginRight: "1em" }}
          >
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/services"
              onClick={() => setPageIndex(1)}
            >
              <img src="assets/backArrow.svg" alt="Back to service Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid container item direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h1">
              Security Service
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
              style={{ color: "lightseagreen" }}
            >
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Recruitment of Quality Manpower:{" "}
              </span>
              <span style={{ color: "black" }}>
                The agency recruits and engage its manpower bearing mandatory
                educational and physical standards by the qualified officials.
              </span>
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
              style={{ color: "lightseagreen" }}
            >
              <span style={{ fontWeight: "bold" }}> Training: </span>
              <span style={{ color: "black" }}>
                As all the security staff (all managers and field staff ) has
                been engaged from defence forces who have vast experience in
                security activities and possess the ability to train the guards,
                intensive training in access control, use of surveillance
                equipment, vehicle marshaling, frisking of employees & visitors,
                drill, first aid and casualty evacuation.
              </span>
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
              style={{ color: "lightseagreen" }}
            >
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Clientele Relationship:{" "}
              </span>
              <span style={{ color: "black" }}>
                Our managers and field staff constantly monitor the Security
                System and positioning of manpower in every shift schedule and
                also regularly interact with Clientele units with a great sense
                of hospitality to attend the time to time requirements/resolve
                security-related problems.
              </span>
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
              style={{ color: "lightseagreen" }}
            >
              <span style={{ fontWeight: "bold" }}> Discipline: </span>
              <span style={{ color: "black" }}>
                The Agency has set of ladder system of officers of different
                ranks like Security Supervisors, Security Officers, Field
                Officers, Managers, and Regional Managers, Deputy General
                Managers to check the security personnel at different levels to
                keep them on time and alert. 
              </span>
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/housekeeping"
              onClick={() => {
                setValue(1);
                setsubpageIndex(2);
              }}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to House Keeping Page"
              />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        className={classes.rowContainer}
        item
        container
        direction="row"
        justify="center"
        style={{ marginTop: "15em", marginBottom: "20em" }}
      >
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Bright Service</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/bulb.svg" alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{
            maxWidth: "40em",
            marginTop: matchesSM ? "10em" : 0,
            marginBottom: matchesSM ? "10em" : 0,
          }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Round The Clock</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/stopwatch.svg" alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          md
          style={{ maxWidth: "40em" }}
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4">Best In Class</Typography>
          </Grid>
          <Grid item>
            <img src="/assets/cash.svg" alt="cash" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default securityservice;
