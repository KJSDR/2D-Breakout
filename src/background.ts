class Background {
  private color: string;

  constructor(color: string = '#eee') {
    this.color = color;
  }

  render(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

export default Background;
