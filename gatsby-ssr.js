import React from 'react';

import Page from './src/components/Page';
import { Helmet } from 'react-helmet';

export const wrapRootElement = ({ element }) => <>{element}</>;

export const wrapPageElement = ({ element, ...props }) => (
  <>
    <Helmet>
      <link rel="stylesheet" type="text/css" href="/fonts/fonts.css" />
    </Helmet>
    <Page {...props}>{element}</Page>
  </>
);
