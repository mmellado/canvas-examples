import { randomIntFromRange } from '../utils';

class FallingStar {
  constructor({ ctx, x, y, radius, color, floorSize }) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color || '#e3eaef';
    this.floorSize = floorSize;
    this.velocity = {
      x: randomIntFromRange(-5, 5),
      y: randomIntFromRange(5, 10),
    };
    this.friction = 0.4;
    this.gravity = 0.3;
    this.particles = [];
  }

  draw = () => {
    const { ctx, x, y, radius, color } = this;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 5;
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  };

  shatter = () => {
    const { ctx, x, y, radius, floorSize } = this;

    this.radius = radius / 2;
    Array.from(new Array(8)).forEach(() => {
      const p = new StarParticle({
        ctx,
        x,
        y,
        radius: radius / 4,
        floorSize,
      });
      this.particles.push(p);
    });
  };

  animate = () => {
    console.log(this.floorSize);
    if (
      this.y + this.radius + this.velocity.y >
      window.innerHeight - this.floorSize
    ) {
      this.velocity.y = -this.velocity.y * this.friction;
      this.shatter();
    } else {
      this.velocity.y += this.gravity;
    }

    if (
      this.x + this.radius + this.velocity.x > window.innerWidth ||
      this.x - this.radius <= 0
    ) {
      this.velocity.x = -this.velocity.x;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.draw();
  };
}

class StarParticle extends FallingStar {
  constructor(props) {
    super(props);
    this.ttl = 100;
    this.opacity = 1;
    this.velocity = {
      x: randomIntFromRange(-10, 10),
      y: randomIntFromRange(-20, 20),
    };
    this.draw();
  }

  draw = () => {
    // Particle drawing
    const { ctx, x, y, radius, color } = this;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgba(227, 234, 239, ${this.opacity})`;
    ctx.shadowColor = color;
    ctx.shadowBlur = 5;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  };

  animate = () => {
    if (
      this.y + this.radius + this.velocity.y >
      window.innerHeight - this.floorSize
    ) {
      this.velocity.y = -this.velocity.y * this.friction;
      this.shatter();
    } else {
      this.velocity.y += this.gravity;
    }

    if (
      this.x + this.radius + this.velocity.x > window.innerWidth ||
      this.x - this.radius <= 0
    ) {
      this.velocity.x = -this.velocity.x;
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.ttl -= 1;
    this.opacity -= 1 / this.ttl;
    this.draw();
  };
}

export default FallingStar;
