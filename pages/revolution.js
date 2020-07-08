import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Head from "next/head";

// import technologyAnimantion from "../src/animations/technologyAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">Revolution | Web Development </title>
        <meta
          name="description"
          key="description"
          content="We provide best in class security service in in Tirupati, Vijayawada, Visakhapatnam and Andhra Pradesh and always try to ensure clients satisfaction"
        />
        <meta
          property="og:title"
          content="Bring Vinayaka Security Services to the Tirupati, Vijayawada and Andhra Pradesh | The Revolution"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="https://www.vinayakaesmgroup.co.in/revolution"
        />
        <link
          rel="canonical"
          key="canonical"
          href="https://www.vinayakaesmgroup.co.in/revolution"
        />
      </Head>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "2em", marginBottom: "10em" }}
      >
        <Grid
          container
          item
          direction="column"
          lg
          style={{ maxWidth: "40em", marginRight: "5em" }}
        >
          <Grid item>
            <Typography
              variant="h1"
              style={{ fontFamily: "Pacifico" }}
              align={matchesMD ? "center" : undefined}
            >
              The Revolution
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: matchesMD ? "1em" : "2em" }}>
            <Typography
              variant="body2"
              paragraph
              style={{ color: "#868686" }}
              align={matchesMD ? "center" : undefined}
            >
              Our high priority is to provide protection, outsourcing and
              security service to all our clients with high Quality.By taking
              care care of ultimate safety and security of the client premise
              and assets.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              style={{ color: "#868686" }}
              align={matchesMD ? "center" : undefined}
            >
              We are always commited in improving the quality of the services
              that we provide to our clients
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              paragraph
              style={{ color: "#868686" }}
              align={matchesMD ? "center" : undefined}
            >
              We always aim to fullfill all the client's expectations by
              providing high quality service and earning trust of our clients
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify="center"
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Consulation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Our process begins the moment you realize you need a piece of
              service for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best service.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration..
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/consultationIcon.svg"
            alt="consultation"
            width="100%"
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FF7373", height: "90em" }}
        align={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              Once you’re completely satisfied with the vision for our service
              we get down to the nitty gritty and fine-details.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg style={{ alignSelf: "center" }}>
          <img width="100%" src="/assets/reviewIcon.svg" alt="mockup" />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#8E45CE", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Why Us?
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
              gutterBottom
              paragraph
            >
              We aren’t just another company offering security guards or manned
              guarding. Many of our staff are ex-military personnel and have
              provided security in some the most hostile places.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Highly experienced and professional security guards.
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#fff", maxWidth: "20em" }}
              gutterBottom
              align={matchesMD ? "center" : undefined}
              paragraph
            >
              This experience and the ongoing training and support they receive
              makes us one of the leading security companies around.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            width="100%"
            src={"/assets/maintainIcon.svg"}
            alt="consultation"
            style={{ maxWidth: 500 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
