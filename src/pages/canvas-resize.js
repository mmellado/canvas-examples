import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';

import '../styles/canvas.css';

const IndexPage = () => {
  const canvas = useRef(null);

  useEffect(() => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;

    const ctx = canvas.current.getContext('2d');
    ctx.fillRect(100, 100, 100, 100);
    ctx.fillRect(200, 200, 100, 100);
    ctx.fillRect(400, 300, 100, 100);
  }, []);

  return (
    <Layout title="Canvas resize">
      <canvas ref={canvas} />
    </Layout>
  );
};

export default IndexPage;
