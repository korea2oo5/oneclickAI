import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../css/main.css'

const App = ({ Component, pageProps  }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>OneCilckAI</title>
      </Head>
      <Component  {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
