class CanvasCircle {
  constructor({ x, y, dx, dy, radius, color }) {
    this.radius = radius;
    this.minRadius = radius;
    this.maxRadius = 30;
    this.color = color;
    this.x = Math.floor(x);
    this.y = Math.floor(y);
    this.dx = Math.floor(dx);
    this.dy = Math.floor(dy);
  }

  draw = ctx => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  animate = (ctx, mouseX, mouseY) => {
    if (this.x > window.innerWidth - this.radius || this.x < this.radius) {
      this.dx = -this.dx;
    }

    if (this.y > window.innerHeight - this.radius || this.y < this.radius) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    if (mouseX !== undefined && mouseY !== undefined) {
      const circleXPosition = mouseX - this.x;
      const circleYPosition = mouseY - this.y;

      if (
        circleXPosition < 50 &&
        circleXPosition > -50 &&
        circleYPosition < 50 &&
        circleYPosition > -50 &&
        this.radius <= this.maxRadius
      ) {
        this.radius += 1;
      } else if (this.radius >= this.minRadius) {
        this.radius -= 1;
      }
    }

    this.draw(ctx);
  };
}

export default CanvasCircle;
