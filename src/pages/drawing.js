import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';

import '../styles/canvas.css';

const IndexPage = () => {
  const canvas = useRef(null);

  useEffect(() => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;

    const ctx = canvas.current.getContext('2d');

    // Rectangles
    ctx.fillStyle = 'cyan';
    ctx.fillRect(100, 100, 100, 100);
    ctx.fillStyle = 'rgba(23, 56, 255, 0.5)';
    ctx.fillRect(400, 100, 100, 100);
    ctx.fillStyle = '#ccc';
    ctx.fillRect(300, 300, 100, 100);

    // Line
    ctx.beginPath();
    ctx.moveTo(50, 300);
    ctx.lineTo(300, 100);
    ctx.lineTo(400, 300);
    ctx.strokeStyle = 'tomato';
    ctx.stroke();

    // Arcs
    for (let i = 0; i < 500; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const r = Math.random() * 255;
      const g = Math.random() * 255;
      const b = Math.random() * 255;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2, false);
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${Math.random()})`;
      ctx.stroke();
    }
  }, []);

  return (
    <Layout title="Canvas resize">
      <canvas ref={canvas} />
    </Layout>
  );
};

export default IndexPage;
