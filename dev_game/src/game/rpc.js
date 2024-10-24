const canvas = document.getElementById("rpc");
const ctx = canvas.getContext("2d");
let gameRunning = true;
let animationFrameId;

class Player {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
}
