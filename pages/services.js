import React from "react";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonArrow from "../src/ui/ButtonArrow";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "5em",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
}));

const ServicePage = ({
  setPageIndex,

  setsubpageIndex,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Top Security,Housekeeping,Outsourcing Services | Andhra Pradesh
        </title>
        <meta
          name="description"
          key="description"
          content="We provide best in class Security, Housekeeping, Outsourcing services in in Tirupati, Vijayawada, Visakhapatnam and Andhra Pradesh and always try to ensure clients satisfaction "
        />
        <meta
          property="og:title"
          content="Bring Vinayaka Security Services to the Tirupati, Vijayawada and Andhra Pradesh | Security, OutSourcing and Housekeeping Services"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://www.vinayakaesmgroup.co.in/services"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://www.vinayakaesmgroup.co.in/services"
        />
      </Head>
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "1em" : "2em",
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h1"
          gutterBottom
        >
          Services
        </Typography>
      </Grid>
      <Grid item>
        {/* --------------House keeping service---------------- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesMD ? "center" : "flex-end"}
          style={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : " 35em",
            }}
          >
            <Typography variant="h4">House keeping Service</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Today housekeeping demands high skilled specializations.
            </Typography>
            <Typography variant="subtitle1">
              We have the training and the expertise which will provide you with
              the best housekeeping experience.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              href="/housekeeping"
              onClick={() => {
                setPageIndex(1);
                setsubpageIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Know More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              src="/assets/housekeeping.jpg"
              alt="House Keeping"
              className={classes.icon}
              style={{
                maxHeight: matchesSM ? "15em" : matchesMD ? "18em" : "15em",
                minWidth: matchesSM ? "18em" : matchesMD ? "18em" : "15em",
                marginTop: matchesMD ? "2em" : undefined,
                borderRadius: 8,
              }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/* --------------Security Service---------------- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesMD ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">Security Service</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              If you’re looking to hire Licensed security guards In Tirupati and
              <br /> the rest of the Andhra Pradesh, you’ve come to the right
              place
            </Typography>
            <Typography variant="subtitle1">
              We offer a comprehensive service to any need <br />
              for manned guards to suit your
              <span className={classes.specialText}> exact requirements.</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              href="/securityservice"
              onClick={() => {
                setPageIndex(1);
                setsubpageIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Know More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item>
            <img
              src="/assets/securityguard.jpg"
              alt="Custom software icon"
              className={classes.icon}
              style={{
                maxHeight: matchesMD ? "18em" : "18em",
                minWidth: matchesSM
                  ? "22.5em"
                  : matchesMD
                  ? "25.5em"
                  : "22.5em",
                marginTop: matchesMD ? "2em" : undefined,
                borderRadius: 8,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* --------------Out Sourcing---------------- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesMD ? "center" : "flex-end"}
          style={{
            marginTop: matchesSM ? "1em" : "10em",
            marginBottom: matchesSM ? "1em" : "10em",
          }}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : " 35em",
            }}
          >
            <Typography variant="h4">Out Sourcing</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Outsource Services require domain expertise and operation
              excellence
            </Typography>
            <Typography variant="subtitle1">
              We provide manpower service to diverse industries across the state
              ranging from unskilled, semi-skilled and
              {matchesMD ? null : <br />}skilled workers to clients. 
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              href="/outsourcing"
              onClick={() => {
                setPageIndex(1);
                setsubpageIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Know More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              src="/assets/osclock.jpg"
              alt="House Keeping"
              className={classes.icon}
              style={{
                maxHeight: matchesSM ? "16em" : matchesMD ? "18em" : "18em",
                minWidth: matchesSM ? "22.5em" : matchesMD ? "26em" : "22.5em",
                marginTop: matchesMD ? "2em" : undefined,
                borderRadius: 8,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicePage;
