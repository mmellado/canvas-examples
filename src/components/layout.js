/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import SEO from './seo';

import '../styles/reset.css';
import '../styles/layout.css';

const Layout = ({ title, children, back = true }) => {
  return (
    <>
      <SEO title={title} />
      {back && (
        <nav className="back">
          <Link to="/">
            <span className="arrow">&lt;</span>
            <span className="text">Back to Home</span>
          </Link>
        </nav>
      )}
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  back: PropTypes.bool,
};

export default Layout;
