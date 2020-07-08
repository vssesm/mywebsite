import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Link from "../Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";

// function small screen scroll
function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// Styling Section

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "9em",
    width: "13em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
      width: "12.17em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "7.5em",
      width: "16.17em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    textDecorationColor: theme.palette.common.logoBackGround,
  },

  activeTab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
    textDecorationColor: theme.palette.common.logoBackGround,
    color: "#DC8700",
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    ...theme.typography.estimateButton,
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.8,
    "&:hover": {
      opacity: 1,
      backgroundColor: theme.palette.common.blue,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em",
    },
  },
  drawerItem: {
    ...theme.typography.tab,
    color: theme.palette.common.logoBackGround,
    opacity: 0.7,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
      color: "#DC8700",
    },
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  homepageHeaderBackground: {
    backgroundImage: `url("/assets/homepageHeaderBackground.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1,
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3.9em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2.2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "2.5em",
    },
  },
}));

// Main Header
const Header = ({ pageIndex, setPageIndex, subpageIndex, setsubpageIndex }) => {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  // for performance for other devices
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  //  drawer state
  const [openDrawer, setOpenDrawer] = useState(false);

  // for Menu State
  const [anchorEl, setAnchorEl] = useState("");
  const [menuState, setMenuState] = useState(false);

  const handleChange = (e, newIndexvalue) => {
    setPageIndex(newIndexvalue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuState(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setMenuState(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setMenuState(false);
    setsubpageIndex(i);
  };

  // routes configuration
  const menuOptions = [
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

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopUp: anchorEl ? "simple-menu" : undefined,
      mouseOver: (e) => handleClick(e),
    },
    { name: "The revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Our Clients", link: "/clients", activeIndex: 4 },

    // { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (pageIndex !== route.activeIndex) {
            setPageIndex(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== subpageIndex) {
              setsubpageIndex(route.selectedIndex);
            }
          }
          break;
        case "/contact":
          if (pageIndex !== 5) {
            setPageIndex(5);
          }
          break;
        default:
          break;
      }
    });
  }, [
    subpageIndex,
    pageIndex,
    setPageIndex,
    setsubpageIndex,
    menuOptions,
    routes,
  ]);
  const tabs = (
    <React.Fragment>
      <Tabs
        value={pageIndex}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, i) => (
          <Tab
            key={`${route}${i}`}
            className={
              route.activeIndex !== pageIndex ? classes.tab : classes.activeTab
            }
            component={Link}
            href={route.link}
            label={route.name}
            aria-owns={route.ariaOwns ? route.ariaOwns : undefined}
            aria-haspopup={route.ariaPopUp ? route.ariaPopUp : undefined}
            onMouseOver={route.mouseOver ? route.mouseOver : undefined}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        component={Link}
        href="/contact"
        color="secondary"
        className={classes.button}
        onClick={() => setPageIndex(5)}
      >
        Contact Us
      </Button>
      <Menu
        classes={{ paper: classes.menu }}
        id="simple-menu"
        anchorEl={anchorEl}
        open={menuState}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            href={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              setPageIndex(1);
              handleClose();
            }}
            selected={i === subpageIndex && pageIndex === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onOpen={() => {
          setOpenDrawer(true);
        }}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              onClick={() => {
                setOpenDrawer(false);
                setPageIndex(route.activeIndex);
              }}
              divider
              button
              component={Link}
              href={route.link}
              selected={pageIndex === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setPageIndex(5);
            }}
            divider
            button
            component={Link}
            classes={{
              root: classes.drawerItemEstimate,
              selected: classes.drawerItemSelected,
            }}
            href="/contact"
            selected={pageIndex === 5}
          >
            <ListItemText
              className={classes.drawerItem}
              style={{ color: "white" }}
              disableTypography
            >
              Contact Us
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <ToolBar disableGutters>
            <Button
              disableRipple
              component={Link}
              href="/"
              className={classes.logoContainer}
              onClick={() => setPageIndex(0)}
            >
              <img
                src="/assets/logo4.png"
                alt="Company logo"
                className={classes.logo}
              />
            </Button>
            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </ToolBar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

export default Header;
