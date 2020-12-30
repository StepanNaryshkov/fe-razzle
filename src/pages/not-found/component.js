import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>not-found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Link to="/">main-page</Link>
      <h1 data-testid="not-found">not-found</h1>
    </>
  );
};
