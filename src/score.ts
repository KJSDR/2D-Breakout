class Score {
  private x: number;
  private y: number;
  private score: number;
  private color: string;
  private font: string;

  constructor(x: number, y: number, color: string = '#0095DD', font: string = '16px Arial') {
    this.x = x;
    this.y = y;
    this.score = 0;
    this.color = color;
    this.font = font;
  }

  public increment(): void {
    this.score += 1;
  }

  public reset(): void {
    this.score = 0;
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(`Score: ${this.score}`, this.x, this.y);
  }
}

export default Score;
