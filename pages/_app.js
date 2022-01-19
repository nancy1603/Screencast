import '../styles/globals.css'
import React, {useState,useEffect} from 'react';
import App from 'next/app';
import Head from "next/head";
import Router from "next/router";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loader from "../components/Loader.js"
import theme from "../components/Theme";

function MyApp(props) {
  const[loaded,setLoaded]=useState(false);

  useEffect(() =>{
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    setLoaded(true);
    Router.events.on("routeChangeStart", () =>
      setLoaded(false)
    );
    Router.events.on("routeChangeComplete", () =>
      setLoaded(true)
    );
  },[]);

  

  
        const { Component, pageProps } = props;

        return(
        <>
        <React.Fragment>
        <Head>
        <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Screencast</title>
          <link rel="stylesheet" type="text/css" href="question.css" />
        </Head>
        <ThemeProvider theme={theme}>
          <div className="back">
          <CssBaseline />
          {loaded ? (
            <Component {...pageProps} />
          ) : (
            <Loader />
          )}
          </div>
        </ThemeProvider>
        </React.Fragment>
        </>
        );
    
}

export default MyApp;