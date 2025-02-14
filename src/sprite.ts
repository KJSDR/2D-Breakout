class Sprite {
  protected x: number;
  protected y: number;
  protected width: number;
  protected height: number;
  protected color: string;

  constructor(x: number, y: number, width: number, height: number, color: string = '#f0000') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  public render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Sprite;
