// eslint-disable-next-line import/extensions
import Sprite from './sprite';
// eslint-disable-next-line import/extensions
import { canvas } from './constants';

class Ball extends Sprite {
  radius: number;
  dx: number;
  dy: number;

  constructor(x: number, y: number, radius: number = 10, color: string = '#0095DD') {
    super(x, y, 0, 0, color);
    this.radius = radius;
    this.dx = 2;
    this.dy = -2;
  }

  reset(): void {
    this.x = canvas.width / 2;
    this.y = canvas.height - 30;
    this.dx = 2;
    this.dy = -2;
  }

  move(): void {
    this.x += this.dx;
    this.y += this.dy;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Ball;
