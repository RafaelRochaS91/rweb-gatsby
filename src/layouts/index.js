import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title={'RWeb'}
      meta={[
        { name: 'description', content: 'Personal Webpage of Rafael Rocha' },
        { name: 'keywords', content: 'rafael rocha, portfolio, website' },
      ]}
    />
    <main>
      {children()}
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
