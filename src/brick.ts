// eslint-disable-next-line import/extensions
import Sprite from './sprite';

class Brick extends Sprite {
  public status: number;

  constructor(x: number, y: number, width: number, height: number, color: string = '#0095DD') {
    super(x, y, width, height, color);
    this.status = 1;
  }
}

export default Brick;
