class Lives {
  private x: number;
  private y: number;
  private lives: number;
  private color: string;
  private font: string;

  constructor(x: number, y: number, initialLives: number = 3, color: string = '#0095DD', font: string = '16px Arial') {
    this.x = x;
    this.y = y;
    this.lives = initialLives;
    this.color = color;
    this.font = font;
  }

  decrement(): void {
    this.lives -= 1;
  }

  reset(): void {
    this.lives = 3;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Lives: ${this.lives}`, this.x, this.y);
  }
}

export default Lives;
