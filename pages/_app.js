import React, { useState } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../src/ui/theme";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  const [pageIndex, setPageIndex] = useState(0);
  const [subpageIndex, setsubpageIndex] = useState(0);
  //for MenuItem index State
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={Theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}

        <Header
          pageIndex={pageIndex}
          subpageIndex={subpageIndex}
          setsubpageIndex={setsubpageIndex}
          setPageIndex={setPageIndex}
        />
        <Component
          {...pageProps}
          setsubpageIndex={setsubpageIndex}
          setPageIndex={setPageIndex}
        />
        <Footer
          pageIndex={pageIndex}
          subpageIndex={subpageIndex}
          setsubpageIndex={setsubpageIndex}
          setPageIndex={setPageIndex}
        />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
