import React, { useRef, useEffect } from 'react';
import Layout from '../components/layout';
import FallingStar from '../classes/FallingStar';
import '../styles/star-shower.css';
import { randomIntFromRange } from '../utils';

const IndexPage = () => {
  const canvas = useRef(null);
  const animationFrame = useRef(null);
  const stars = useRef([]);
  const bgStars = useRef([]);
  const ticker = useRef(0);
  const floorSize = 150;

  const onResizeHandler = () => {
    setCanvasSize();
  };

  const setCanvasSize = () => {
    canvas.current.width = window.innerWidth;
    canvas.current.height = window.innerHeight;
  };

  const drawBgStars = ctx => {
    if (!bgStars.current.length) {
      Array.from(new Array(150)).forEach(() => {
        const radius = randomIntFromRange(1, 3);
        const x = Math.random() * canvas.current.width;
        const y = Math.random() * canvas.current.height;
        bgStars.current.push(new FallingStar({ ctx, x, y, radius }));
      });
    }

    bgStars.current.forEach(star => star.draw());
  };

  const drawMountains = (ctx, numMountains, height, color) => {
    const mountainWidth = canvas.current.width / numMountains;
    Array.from(new Array(numMountains)).forEach((x, idx) => {
      ctx.beginPath();
      ctx.moveTo(idx * mountainWidth, canvas.current.height);
      ctx.lineTo(
        idx * mountainWidth + mountainWidth + 325,
        canvas.current.height
      );
      ctx.lineTo(
        idx * mountainWidth + mountainWidth / 2,
        canvas.current.height - height
      );
      ctx.lineTo(idx * mountainWidth - 325, canvas.current.height);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    });
  };

  const drawFloor = ctx => {
    ctx.beginPath();
    ctx.rect(
      0,
      canvas.current.height - floorSize,
      canvas.current.width,
      floorSize
    );
    ctx.fillStyle = '#182028';
    ctx.fill();
    ctx.closePath();
  };

  const clearCanvas = () => {
    const ctx = canvas.current.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const bg = ctx.createLinearGradient(0, 0, 0, height);
    bg.addColorStop(0, '#171e26');
    bg.addColorStop(1, '#3f586b');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);
    drawBgStars(ctx);
    drawMountains(ctx, 1, canvas.current.height - 100, '#384551');
    drawMountains(ctx, 2, canvas.current.height - 300, '#2b3843');
    drawMountains(ctx, 3, canvas.current.height - 500, '#26333e');
    drawFloor(ctx);
  };

  const animate = spawnRate => {
    clearCanvas();
    stars.current.forEach((star, idx) => {
      star.animate();
      if (Math.floor(star.radius) <= 0) {
        stars.current.splice(idx, 1);
      } else {
        star.particles.forEach((particle, pidx) => {
          particle.animate();
          if (!particle.ttl) {
            star.particles.splice(pidx, 1);
          }
        });
      }
    });
    ticker.current++;
    const newStar = ticker.current % spawnRate === 0;
    if (newStar) {
      stars.current.push(getNewStar(canvas.current.getContext('2d')));
    }
    const nextSpawn = newStar ? randomIntFromRange(100, 200) : spawnRate;

    animationFrame.current = requestAnimationFrame(() => animate(nextSpawn));
  };

  const getNewStar = ctx => {
    const radius = 12;
    const x = Math.max(radius, Math.random() * canvas.current.width - radius);
    const y = -100;
    return new FallingStar({ ctx, x, y, radius, floorSize });
  };

  useEffect(() => {
    setCanvasSize();
    window.addEventListener('resize', onResizeHandler);
    animationFrame.current = animate(75);

    return () => {
      window.removeEventListener('resize', onResizeHandler);
      cancelAnimationFrame(animationFrame.current);
    };
  });

  return (
    <Layout title="Star shower">
      <canvas ref={canvas} />
    </Layout>
  );
};

export default IndexPage;
