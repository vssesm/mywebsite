import { createMuiTheme } from "@material-ui/core/styles";

const logoBackGround = "#C7C7C7";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";
const logoTextColor = "#003969";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${logoTextColor}`,
      orange: `${arcOrange}`,
      logoBackGround: logoBackGround,
      arcGrey: arcGrey,
    },
    primary: {
      main: `${logoTextColor}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1.25rem",
      color: `${logoBackGround}`,
    },
    estimateButton: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h1: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: logoTextColor,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: logoTextColor,
    },
    h4: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.75rem",
      color: logoTextColor,
    },
    h6: {
      fontFamily: "Raleway",
      fontWeight: 500,
      color: logoTextColor,
      lineHeight: 1,
    },

    subtitle1: {
      fontWeight: 500,
      fontSize: "1.25rem",
      color: arcGrey,
      fontFamily: "Raleway",
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: "white",
    },
    body2: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: logoTextColor,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: logoTextColor,
      color: logoTextColor,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: logoTextColor,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${logoTextColor}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${logoTextColor}`,
        },
      },
    },
  },
});
