export class Cube {
  size = 10;
  x: number;
  y: number;
  spacing: number;
  constructor(x: number, y: number, gridSpacing: number) {
    this.x = x;
    this.y = y;
    this.spacing = gridSpacing;
  }

  draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = `rgba(135, 251, 97, ${0.1})`;
    const offset = this.size / 2;
    ctx.fillRect(this.x - offset, this.y - offset, this.size, this.size);
    // Draw each connection
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.spacing, this.y - this.spacing);
    ctx.strokeStyle = `rgba(135, 251, 97, ${1})`;
    ctx.lineWidth = 10;
    ctx.stroke();
  };
}
