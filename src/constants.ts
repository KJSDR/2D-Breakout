export const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

export const ballRadius: number = 10;
export const paddleHeight: number = 10;
export const paddleWidth: number = 75;

export const brickRowCount: number = 5;
export const brickColumnCount: number = 3;
export const brickWidth: number = 75;
export const brickHeight: number = 20;
export const brickPadding: number = 10;
export const brickOffsetTop: number = 30;
export const brickOffsetLeft: number = 30;
