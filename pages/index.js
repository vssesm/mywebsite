import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Link from "../src/Link";
import ButtonArrow from "../src/ui/ButtonArrow";
import Head from "next/head";

// Styling Section

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "3.9em",
    [theme.breakpoints.down("md")]: {
      marginTop: "-1.6em",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-1.6em",
    },
  },
  homepageHeaderBackground: {
    backgroundImage: `url("/assets/homepageHeaderBackground.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    "&:hover": {
      opacity: 0.9,
    },
  },
  headerText: {
    fontWeight: "bold",
    animation: "$textUp 4s ease-in-out",
    color: "#DC8700",
  },
  headerSubText: {
    fontWeight: "800",
    marginBottom: "2em",
    marginTop: "2em",
    animation: "$textDown 4s cubic-bezier(.65,.05,.36,1)",
  },

  revolutionCard: {
    backgroundColor: "gainsboro",
    marginTop: "1em",
    width: "40em",
    maxWidth: "45em",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "2em",
    [theme.breakpoints.down("sm")]: {
      padding: "0em 0em",
      borderRadius: 0,
      width: "95%",
      marginTop: "3em",
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
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
  },
  "@keyframes textUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(100%)",
    },
    "50%": {
      opacity: 0.5,
      transform: "translateY(-10%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0%)",
    },
  },
  "@keyframes textDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(-100%)",
    },
    "50%": {
      opacity: 0.5,
      transform: "translateY(10%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0%)",
    },
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "6em",
    },
  },

  servicesBackground: {
    // backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundColor: "antiquewhite",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoBackground: {
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
}));

const index = ({ setPageIndex, setsubpageIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Head>
        <title key="title">
          Top Security, Housekeeping, OutSourcing | Vinayaka Security Services
        </title>
        <meta
          name="description"
          key="description"
          content="We provide best | top in class Security, Housekeeping, Outsourcing services in in Tirupati, Vijayawada, Visakhapatnam and Andhra Pradesh and always try to ensure clients satisfaction"
        />
        <meta
          property="og:title"
          content="Bring Vinayaka Security Services to the Tirupati, Vijayawada and Andhra Pradesh | Vinayaka security services"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://www.vinayakaesmgroup.co.in"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://www.vinayakaesmgroup.co.in/"
        />
      </Head>
      <Grid item>
        <Grid
          style={{ height: matchesSM ? "50em" : "60em" }}
          container
          className={classes.homepageHeaderBackground}
          item
        >
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.revolutionCard}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  style={{ textAlign: "center" }}
                >
                  <Grid item>
                    <Typography
                      variant="h1"
                      align="center"
                      className={classes.headerText}
                    >
                      Vinayaka Security Services
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      align="center"
                      className={classes.headerSubText}
                    >
                      Your's security under secure hands
                    </Typography>
                    <Button
                      variant="outlined"
                      className={classes.learnButtonHero}
                      component={Link}
                      href="/revolution"
                      onClick={() => setValue(2)}
                    >
                      <span style={{ marginRight: 10 }}> Know More</span>
                      <ButtonArrow
                        width={15}
                        height={15}
                        fill={theme.palette.common.blue}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.servicesBackground}>
        {/* --------------Security Service---------------- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
            md={5}
          >
            <Typography variant="h4">Security Service</Typography>
            <Typography
              variant="subtitle1"
              className={classes.subtitle}
              style={{ color: "forestgreen" }}
            >
              If you’re looking to hire Licensed security guards In Tirupati and
              the rest of the Andhra Pradesh, you’ve come to the right place
            </Typography>
            <Typography variant="subtitle1" style={{ color: "forestgreen" }}>
              We offer a comprehensive service to any need for manned guards to
              suit your
              <span className={classes.specialText}> exact requirements.</span>
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              href="/securityservice"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
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
          <Grid item md={5}>
            <img
              src="/assets/securityguard.jpg"
              alt="Security Guard"
              className={classes.icon}
              style={{
                maxHeight: "20em",
                minWidth: "20em",

                borderRadius: 5,
                opacity: "0.9",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.servicesBackground}>
        {/* --------------House Keeping---------------- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
            }}
          >
            <Typography variant="h4">House keeping Service</Typography>
            <Typography
              variant="subtitle1"
              className={classes.subtitle}
              style={{ color: "crimson" }}
            >
              Today housekeeping demands high skilled specializations.
            </Typography>
            <Typography variant="subtitle1" style={{ color: "crimson" }}>
              We have the training and the expertise which will provide you with
              the
              {matchesSM ? null : <br />}best housekeeping experience.
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              href="/housekeeping"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
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
          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : "5em",
            }}
          >
            <img
              src="/assets/hk.jpg"
              alt="Mobile icon"
              className={classes.icon}
              style={{
                maxHeight: "20em",
                minWidth: "20em",

                borderRadius: 5,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.servicesBackground}>
        {/* --------------Out Sourcing---------------- */}
        <Grid
          container
          direction="row"
          className={classes.serviceContainer}
          justify={matchesSM ? "center" : undefined}
          style={{ marginBottom: "12em" }}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined,
            }}
            md={5}
          >
            <Typography variant="h4">Out Sourcing</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Outsource Services require domain expertise and operation
              excellence
            </Typography>
            <Typography variant="subtitle1">
              We provide manpower service to diverse industries across the state
              ranging from unskilled, semi-skilled and skilled workers to
              clients.  
            </Typography>
            <Button
              variant="outlined"
              className={classes.learnButton}
              component={Link}
              href="/outsourcing"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
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
          <Grid item md={5}>
            <img
              src="/assets/osclock.jpg"
              alt="website icon"
              className={classes.icon}
              style={{
                maxHeight: "20em",
                minWidth: "20em",

                borderRadius: 5,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/* --------------Information Block---------------- */}
        <Grid
          container
          direction="row"
          alignItems="center"
          style={{ height: matchesSM ? "50em" : "80em" }}
          className={classes.infoBackground}
        >
          <Grid
            container
            style={{
              textAlign: matchesXS ? "center" : "inherit",
            }}
            direction={matchesSM ? "column" : "row"}
          >
            <Grid
              item
              sm
              style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
            >
              <Grid
                container
                style={{ marginBottom: matchesXS ? "10em" : 0 }}
                direction="column"
              >
                <Typography variant="h1" style={{ color: "#003969" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle2" style={{ color: "black" }}>
                  Let's get personal.
                </Typography>
                <Grid>
                  <Button
                    variant="outlined"
                    style={{ color: "black", borderColor: "black" }}
                    className={classes.learnButton}
                    component={Link}
                    href="/about"
                    onClick={() => setValue(3)}
                  >
                    <span style={{ marginRight: 10 }}>Know More</span>

                    <ButtonArrow width={15} height={15} fill="#003969" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              sm
              style={{
                marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                textAlign: matchesXS ? "center" : "right",
              }}
            >
              <Grid container direction="column">
                <Typography variant="h1" style={{ color: "#003969" }}>
                  Contact Us
                </Typography>
                <Typography variant="subtitle2" style={{ color: "black" }}>
                  Say hello!{" "}
                </Typography>
                <Grid>
                  <Button
                    variant="outlined"
                    style={{ color: "black", borderColor: "black" }}
                    className={classes.learnButton}
                    component={Link}
                    href="/contact"
                    onClick={() => setValue(4)}
                  >
                    <span style={{ marginRight: 10 }}>Know More</span>
                    <ButtonArrow width={15} height={15} fill="#003969" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default index;
