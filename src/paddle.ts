/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import Sprite from './sprite';
import { canvas } from './constants';

class Paddle extends Sprite {
  private dx: number;
  private rightPressed: boolean;
  private leftPressed: boolean;

  constructor(x: number, y: number, width: number, height: number, color: string = '#0095DD') {
    super(x, y, width, height, color);
    this.dx = 7;
    this.rightPressed = false;
    this.leftPressed = false;

    document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
    document.addEventListener('mousemove', this.mouseMoveHandler.bind(this), false);
  }

  private keyDownHandler(e: KeyboardEvent): void {
    if (e.code === 'ArrowRight') {
      this.rightPressed = true;
    } else if (e.code === 'ArrowLeft') {
      this.leftPressed = true;
    }
  }

  private keyUpHandler(e: KeyboardEvent): void {
    if (e.code === 'ArrowRight') {
      this.rightPressed = false;
    } else if (e.code === 'ArrowLeft') {
      this.leftPressed = false;
    }
  }

  private mouseMoveHandler(e: MouseEvent): void {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      this.x = relativeX - this.width / 2;
    }
  }

  public move(): void {
    if (this.rightPressed && this.x < canvas.width - this.width) {
      this.x += this.dx;
    } else if (this.leftPressed && this.x > 0) {
      this.x -= this.dx;
    }
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Paddle;
