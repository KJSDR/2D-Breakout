/* eslint-disable import/extensions */
import Sprite from './sprite';

export default class Label extends Sprite {
  private text: string;

  constructor(x: number, y: number, text: string, color: string = 'black') {
    super(x, y, 0, 0, color);
    this.text = text;
  }

  render(ctx: CanvasRenderingContext2D): void {
    ctx.font = '16px Arial';
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.x, this.y);
  }
}
