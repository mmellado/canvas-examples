import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';
import Circle from '../classes/CanvasCircle';

import '../styles/canvas.css';

const IndexPage = () => {
  const canvas = useRef(null);
  const animationFrame = useRef(null);
  const circles = useRef([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  // const colors = ['#F9F9F9', '#CCBDBD', '#EEEEEE', '#E3E3EF', '#F7EAEA'];
  const colors = ['#DDD0C1', '#E2DBD8', '#FEFEFE', '#FFF6F2', '#F1ECE9'];

  const animateCircle = () => {
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const { x, y } = mousePosition.current;

    circles.current.forEach(c => {
      c.animate(ctx, x, y);
    });

    animationFrame.current = requestAnimationFrame(animateCircle);
  };

  const onMoveHandler = e => {
    const { x, y } = e;
    mousePosition.current = { x, y };
  };

  const buildCircles = () => {
    const windowWidht = window.innerWidth;
    const windowHeight = window.innerHeight;

    canvas.current.width = windowWidht;
    canvas.current.height = windowHeight;
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, windowWidht, windowHeight);
    circles.current = [];

    Array.from(new Array(windowWidht + windowHeight)).forEach((v, i) => {
      const radius = Math.random() * 3 + 3;
      const color = colors[i % 5];

      const x = Math.random() * (windowWidht - radius * 2) + radius + 5;
      const y = Math.random() * (windowHeight - radius * 2) + radius + 5;

      const dx = (Math.random() < 0.5 ? -1 : 1) * (Math.random() + 0.5);
      const dy = (Math.random() < 0.5 ? -1 : 1) * (Math.random() + 0.5);
      const c = new Circle({ x, y, dx, dy, radius, color });
      c.draw(ctx);
      circles.current.push(c);
    });
  };

  useEffect(() => {
    const currentCanvas = canvas.current;
    buildCircles();

    window.addEventListener('resize', buildCircles);
    canvas.current.addEventListener('mousemove', onMoveHandler);
    animationFrame.current = animateCircle();

    return () => {
      window.removeEventListener('resize', buildCircles);
      currentCanvas.removeEventListener('mousemove', onMoveHandler);
      cancelAnimationFrame(animationFrame.current);
    };
  });

  return (
    <Layout title="Animating">
      <canvas ref={canvas} style={{ background: '#151515' }} />
    </Layout>
  );
};

export default IndexPage;
