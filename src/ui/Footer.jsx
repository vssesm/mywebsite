import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Link from "../Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    // To make z-index work
    zIndex: 1302,
    position: "relative",
    //
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  link: {
    fontFamily: "Arial",
    color: "white",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
    },
  },
}));

const serviceRoutes = [
  { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
  {
    name: "Security Services",
    link: "/securityservice",
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    name: "House Keeping",
    link: "/housekeeping",
    activeIndex: 1,
    selectedIndex: 2,
  },
  {
    name: "Out Sourcing",
    link: "/outsourcing",
    activeIndex: 1,
    selectedIndex: 3,
  },
];
const RevolutionRoutes = [
  { name: "The revolution", link: "/revolution", activeIndex: 2 },
  {
    name: "Vision",
    link: "/revolution",
    activeIndex: 2,
  },
  {
    name: "Consulation",
    link: "/revolution",
    activeIndex: 2,
  },
  {
    name: "Why Us",
    link: "/revolution",
    activeIndex: 2,
  },
];

const AboutRoutes = [
  { name: "About Us", link: "/about", activeIndex: 3 },
  {
    name: "History",
    link: "/about",
    activeIndex: 3,
  },
  {
    name: " Team",
    link: "/about",
    activeIndex: 3,
  },
];

const Footer = ({ setPageIndex, setsubpageIndex }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify="center" className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/"
                onClick={() => setPageIndex(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {serviceRoutes.map((route, i) => (
                <Grid
                  key={`${route.activeIndex}${i}`}
                  item
                  className={classes.link}
                  component={Link}
                  href={route.link}
                  onClick={() => {
                    setPageIndex(route.activeIndex);
                    setSelectedIndex(route.selectedIndex);
                  }}
                >
                  {route.name}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {RevolutionRoutes.map((route, i) => (
                <Grid
                  key={`${route.activeIndex}${i}`}
                  item
                  className={classes.link}
                  component={Link}
                  href={route.link}
                  onClick={() => setPageIndex(route.activeIndex)}
                >
                  {route.name}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              {AboutRoutes.map((route, i) => (
                <Grid
                  key={`${route.activeIndex}${i}`}
                  item
                  className={classes.link}
                  component={Link}
                  href={route.link}
                  onClick={() => setPageIndex(route.activeIndex)}
                >
                  {route.name}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/contact"
                onClick={() => setPageIndex(5)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src="/assets/footerAdornment.svg"
        alt="black decorative slash"
        className={classes.adornment}
      />
      <Grid
        container
        justify="flex-end"
        spacing={2}
        className={classes.socialContainer}
      >
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/facebook.svg"
            alt="Facebook logo"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/twitter.svg"
            alt="Twitter logo"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/instagram.svg"
            alt="Instagram logo"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
