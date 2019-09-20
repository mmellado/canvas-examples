import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = () => (
  <Layout title="Home" back={false}>
    <h1>Canvas Examples</h1>
    <nav>
      <ul>
        <li>
          <Link to="/canvas-resize">Canvas resize</Link>
        </li>
        <li>
          <Link to="/drawing">Drawing</Link>
        </li>
        <li>
          <Link to="/animating">Animating</Link>
        </li>
        <li>
          <Link to="/interactions">Interactions</Link>
        </li>
      </ul>
    </nav>
  </Layout>
);

export default IndexPage;
