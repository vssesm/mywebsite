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

const housekeeping = ({ setPageIndex, setsubpageIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Best Housekeeping in Tirupati | Vijayawada | Andhra Pradesh
        </title>
        <meta
          name="description"
          key="description"
          content="We provide best in class housekeeping service in in Tirupati, Vijayawada, Visakhapatnam and Andhra Pradesh and always try to ensure clients satisfaction."
        />
        <meta
          property="og:title"
          content="Bring Vinayaka Housekeeping Services to the Tirupati, Vijayawada and Andhra Pradesh | HouseKeeping Services"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://www.vinayakaesmgroup.co.in/housekeeping"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://www.vinayakaesmgroup.co.in/housekeeping"
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
              href="/securityservice"
              onClick={() => {
                setPageIndex(1);
                setsubpageIndex(1);
              }}
            >
              <img src="assets/backArrow.svg" alt="Back to service Page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid container item direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h1">
              House Keeping
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
              style={{ color: "lightseagreen" }}
            >
              <span style={{ fontWeight: "bold" }}> Know what you want : </span>
              <span style={{ color: "black" }}>
                If you are hiring a housekeeper, it’s always important to
                understand the different types of housekeeping services
                available. This will help you make the most informed decision to
                suit your budget, and your specific needs.
              </span>
            </Typography>

            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
              style={{ color: "lightseagreen" }}
            >
              <span style={{ fontWeight: "bold" }}> Constant Upgrade: </span>
              <span style={{ color: "black" }}>
                Our managers and supervisors constantly train the staff, to make
                sure they are up to date with the trend.     
              </span>
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              paragraph
              style={{ color: "lightseagreen" }}
            >
              <span style={{ fontWeight: "bold" }}> Industries: </span>
              <span style={{ color: "black" }}>
                We provide housekeeping services for the Healthcare sector,
                Educational sector, Industries, IT Industries,Office campus,
                Tourism and Hospitality sector, and Temples.
              </span>
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              style={{ backgroundColor: "transparent" }}
              component={Link}
              href="/outsourcing"
              onClick={() => {
                setValue(1);
                setsubpageIndex(3);
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

export default housekeeping;
