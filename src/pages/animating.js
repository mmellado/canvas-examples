import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';
import Circle from '../classes/CanvasCircle';

import '../styles/canvas.css';

const IndexPage = () => {
  const canvas = useRef(null);
  const animationFrame = useRef(null);
  const circles = useRef([]);

  const animateCircle = () => {
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    circles.current.forEach(c => {
      c.animate(ctx);
    });

    animationFrame.current = requestAnimationFrame(animateCircle);
  };

  useEffect(() => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    circles.current = [];

    Array.from(new Array(50)).forEach((v, i) => {
      const radius = Math.ceil(Math.random() * 30) + 10;
      const color = `rgba(${Math.random() * 255}, ${Math.random() *
        255}, ${Math.random() * 255}, 0.5)`;

      const x = Math.random() * (window.innerWidth - radius * 2) + radius + 5;
      const y = Math.random() * (window.innerHeight - radius * 2) + radius + 5;

      const dx = (i % 2 === 0 ? -5 : 5) * Math.random() + 3;
      const dy = (i % 2 === 0 ? 5 : -5) * Math.random() + 3;
      const c = new Circle({ x, y, dx, dy, radius, color });
      c.draw(ctx);
      circles.current.push(c);
    });

    animationFrame.current = animateCircle();

    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  });

  return (
    <Layout title="Animating">
      <canvas ref={canvas} />
    </Layout>
  );
};

export default IndexPage;
