// eslint-disable-next-line import/extensions
import Ball from './ball';
// eslint-disable-next-line import/extensions
import Paddle from './paddle';
// eslint-disable-next-line import/extensions
import Brick from './brick';
// eslint-disable-next-line import/extensions
import Score from './score';
// eslint-disable-next-line import/extensions
import Lives from './lives';
// eslint-disable-next-line import/extensions
import {
  canvas, ctx, paddleWidth, brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetLeft, brickOffsetTop
} from './constants';

class Game {
  private ball: Ball;
  private paddle: Paddle;
  private score: Score;
  private lives: Lives;
  private bricks: Brick[][];
  private gameRunning: boolean;

  constructor() {
    this.ball = new Ball(canvas.width / 2, canvas.height - 30);
    this.paddle = new Paddle((canvas.width - paddleWidth) / 2, canvas.height - 10, paddleWidth, 10);
    this.score = new Score(8, 20);
    this.lives = new Lives(canvas.width - 65, 20);
    this.bricks = [];
    this.gameRunning = false;

    this.createBricks();
  }

  private createBricks(): void {
    for (let c = 0; c < brickColumnCount; c++) {
      this.bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        const brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
        this.bricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight);
      }
    }
  }

  private drawBricks(): void {
    for (let c = 0; c < brickColumnCount; c++) {
      for (let r = 0; r < brickRowCount; r++) {
        const brick = this.bricks[c][r];
        if (brick.status === 1) {
          brick.render(ctx);
        }
      }
    }
  }

  private draw(): void {
    if (!this.gameRunning) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawBricks();
    this.ball.move();
    this.paddle.move();

    this.ball.render(ctx);
    this.paddle.render(ctx);
    this.score.draw(ctx);
    this.lives.draw(ctx);

    requestAnimationFrame(() => this.draw());
  }

  public start(): void {
    if (!this.gameRunning) {
      this.gameRunning = true;
      this.draw();
    }
  }
}

export default Game;
