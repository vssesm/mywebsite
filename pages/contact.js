import React, { useState } from "react";
import axios from "axios";
import Link from "../src/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Head from "next/head";
import Card from "@material-ui/core/Card";

const whiteSpace = (
  <span>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span>
);
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "20em",
    width: "20em",
    marginTop: "2em",
    minHeight: "15em",
    padding: "2em",
    // border: `0.1px solid ${theme.palette.common.blue}`,
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
    },

    "&:hover": {
      border: `1px solid grey`,
      backgroundColor: "#C7C7C7",
      backgroundColor: "#FFBA60",
    },
  },

  message: {
    marginTop: "5em",
    border: `2px solid ${theme.palette.common.blue} `,
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
}));

const Contact = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [helper, setHelper] = useState({
    emailHelper: "",
    phoneHelper: "",
  });

  const [openDialog, setDialog] = useState(false);
  const [progressLoading, progressSetLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const handleChange = (e) => {
    let valid;
    switch (e.target.id) {
      case "email":
        setContact({ ...contact, [e.target.id]: e.target.value });
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setHelper({ ...helper, emailHelper: "Invalid Email" });
        } else {
          setHelper({ ...helper, emailHelper: "" });
        }
        break;
      case "phone":
        setContact({ ...contact, [e.target.id]: e.target.value });
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!valid) {
          setHelper({ ...helper, phoneHelper: "Invalid Number" });
        } else {
          setHelper({ ...helper, phoneHelper: "" });
        }
        break;
      default:
        setContact({ ...contact, [e.target.id]: e.target.value });
        break;
    }
  };

  const onConfirm = async () => {
    progressSetLoading(true);
    try {
      await axios.get(
        "https://us-central1-vss-email-functions.cloudfunctions.net/sendMail",
        {
          params: {
            ...contact,
          },
        }
      );

      progressSetLoading(false);
      setDialog(false);
      setContact({
        ...contact,
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setAlert({
        open: true,
        message: "Message Sent Succesfully",
        backgroundColor: "#4bb543",
      });
    } catch (error) {
      progressSetLoading(false);
      setAlert({
        open: true,
        message: "Something went wrong,please try again!",
        backgroundColor: "#ff3232",
      });
    }
  };
  const buttonContents = (
    <React.Fragment>
      Send Message
      <img
        src="assets/send.svg"
        alt="paper plane"
        style={{ marginLeft: "1em" }}
      />
    </React.Fragment>
  );
  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us | Vinayaka Security Services</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the security, outsourcing, manpower services process.Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bring Vinayaka Security Services to the Tirupati, Vijayawada and Andhra Pradesh | Conatct Us"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://www.vinayakaesmgroup.co.in/contact"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://www.vinayakaesmgroup.co.in/contact"
        />
      </Head>
      <Grid
        container
        item
        direction="column"
        style={{
          marginBottom: matchesSM ? "1em" : matchesMD ? "5em" : "1em",
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : "1em",
        }}
        lg={4}
        xl={3}
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h1"
                style={{ lineHeight: 1 }}
                align={matchesMD ? "center" : undefined}
              >
                Contact Us
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body2"
                style={{ color: theme.palette.common.blue }}
              >
                We' re waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  style={{ marginRight: "0.5em", fontSize: "1rem" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.common.blue }}
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="tel:9032339622"
                  >
                    +91 90323 39622
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src="assets/email.svg"
                  alt="phone"
                  style={{
                    marginRight: "0.5em",
                    verticalAlign: "bottom",
                    fontSize: "1rem",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  style={{ color: theme.palette.common.blue }}
                >
                  <a
                    href="mailto:vinayakass13esm@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    vinayakass13esm@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  fullWidth
                  label="Name"
                  id="name"
                  value={contact.name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  fullWidth
                  error={helper.emailHelper.length !== 0}
                  helperText={helper.emailHelper}
                  label="Email"
                  id="email"
                  value={contact.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid>
                <TextField
                  style={{ marginBottom: "0.5em" }}
                  fullWidth
                  error={helper.phoneHelper.length !== 0}
                  helperText={helper.phoneHelper}
                  label="Phone"
                  id="phone"
                  value={contact.phone}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "20em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={contact.message}
                rows={10}
                multiline
                id="message"
                onChange={handleChange}
                className={classes.message}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                variant="contained"
                className={classes.sendButton}
                onClick={() => setDialog((prevState) => !prevState)}
                disabled={
                  contact.name.length === 0 ||
                  contact.message.length === 0 ||
                  contact.email.length === 0 ||
                  contact.phone.length === 0 ||
                  helper.emailHelper.length !== 0 ||
                  helper.phoneHelper.length !== 0
                }
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={openDialog}
        onClose={() => setDialog((prevState) => !prevState)}
        fullScreen={matchesSM}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em ",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
            paddingBottom: matchesXS ? "1em" : "5em ",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align="center">
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                label="Name"
                id="name"
                value={contact.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={helper.emailHelper.length !== 0}
                helperText={helper.emailHelper}
                label="Email"
                id="email"
                value={contact.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                fullWidth
                error={helper.phoneHelper.length !== 0}
                helperText={helper.phoneHelper}
                label="Phone"
                id="phone"
                value={contact.phone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <TextField
              fullWidth
              InputProps={{ disableUnderline: true }}
              value={contact.message}
              rows={10}
              multiline
              placeholder="Tell us more about your project."
              id="message"
              onChange={handleChange}
              className={classes.message}
            />
          </Grid>
          <Grid item>
            <Grid
              item
              container
              direction={matchesSM ? "column" : "row"}
              style={{ marginTop: "2em" }}
              alignItems="center"
            >
              <Grid item>
                <Button
                  style={{ fontWeight: 300 }}
                  color="primary"
                  onClick={() => setDialog((prevState) => !prevState)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.sendButton}
                  onClick={onConfirm}
                  disabled={
                    contact.name.length === 0 ||
                    contact.message.length === 0 ||
                    contact.email.length === 0 ||
                    contact.phone.length === 0 ||
                    helper.emailHelper.length !== 0 ||
                    helper.phoneHelper.length !== 0
                  }
                >
                  {progressLoading ? (
                    <CircularProgress size={30} />
                  ) : (
                    buttonContents
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
      <Grid
        container
        item
        direction="column"
        lg={8}
        xl={9}
        alignItems="center"
        style={{
          marginBottom: matchesSM ? "1em" : matchesMD ? "5em" : "1em",
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : "1em",
        }}
      >
        <Typography variant="h3">Reach Us </Typography>
        <Grid
          item
          container
          justify={matchesMD ? "center" : undefined}
          style={{ textAlign: matchesMD ? "center" : undefined }}
        >
          <Card className={classes.root}>
            <Grid item style={{ padding: "1em 0" }}>
              <Typography variant="h1">
                Tirupati {matchesMD ? undefined : ":"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  color: theme.palette.common.blue,
                  fontWeight: "lighter",
                }}
              >
                Address: 20-2-202G,
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  color: theme.palette.common.blue,
                  fontWeight: "lighter",
                }}
              >
                {matchesMD ? undefined : whiteSpace}
                Tirumala Bypass Road,
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  color: theme.palette.common.blue,
                  fontWeight: "lighter",
                }}
              >
                {matchesMD ? undefined : whiteSpace}
                Korlagunta Junction,
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  color: theme.palette.common.blue,
                  fontWeight: "lighter",
                }}
              >
                {matchesMD ? undefined : whiteSpace}
                Opp:Saibaba Temple.
              </Typography>
            </Grid>
            <br />
            <Grid item>
              <Typography
                variant="body2"
                style={{ color: theme.palette.common.blue }}
              >
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="tel:9032339622"
                >
                  Phone: +91 90323 39622
                </a>
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Grid
          item
          container
          justify={matchesMD ? "center" : "flex-end"}
          style={{ textAlign: matchesMD ? "center" : undefined }}
        >
          <Card
            className={classes.root}
            style={{ marginRight: matchesMD ? undefined : "5em" }}
          >
            <Grid item style={{ paddingTop: "1em 0" }}>
              <Typography variant="h1">
                Tirupati {matchesMD ? undefined : ":"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  color: theme.palette.common.blue,
                  fontWeight: "lighter",
                }}
              >
                Address: 20-2-202G,
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  color: theme.palette.common.blue,
                  fontWeight: "lighter",
                }}
              >
                {matchesMD ? undefined : whiteSpace}
                Tirumala Bypass Road,
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  color: theme.palette.common.blue,
                  fontWeight: "lighter",
                }}
              >
                {matchesMD ? undefined : whiteSpace}
                Korlagunta Junction,
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  color: theme.palette.common.blue,
                  fontWeight: "lighter",
                }}
              >
                {matchesMD ? undefined : whiteSpace}
                Opp:Saibaba Temple.
              </Typography>
            </Grid>
            <br />
            <Grid item>
              <Typography
                variant="body2"
                style={{ color: theme.palette.common.blue }}
              >
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="tel:9032339622"
                >
                  Phone: +91 90323 39622
                </a>
              </Typography>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
