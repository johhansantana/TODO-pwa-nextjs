import App, { Container } from "next/app";
import React from "react";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import * as ReactGA from "react-ga";
import withReduxStore from "../lib/with-redux-store";

type Props = {
  reduxStore: any;
  persistor: any;
};

class MyApp extends App<Props> {
  componentDidMount() {
    ReactGA.initialize("UA-54970249-12");
    ReactGA.pageview(window.location.pathname + window.location.search);
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then(registration => {
          console.log("service worker registration successful: ", registration);
        })
        .catch(err => {
          console.warn("service worker registration failed", err.message);
        });
    }
  }
  render() {
    const { Component, pageProps, reduxStore, persistor } = this.props;
    return (
      <Container>
        <Head>
          <title>Todo List</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
        </Head>
        <Provider store={reduxStore}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
