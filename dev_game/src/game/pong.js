const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
let raf;
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    const canvas = document.getElementById('game');
    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;
}

const KEY_CODES = {
  37: { player: 'player2', change: -10 },
  39: { player: 'player2', change: 10 },
  65: { player: 'player1', change: -10 },
  68: { player: 'player1', change: 10 },
};
let keys = {};
//let nm = window.prompt("What's your name?");

// CLASS PART
class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.vx = 5;
    this.vy = 2;
    this.radius = radius;
    this.color = color;
    this.speed = 1.00000001;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  setColor(color)
  {
    if (! color)
      // thanks stackoverflow
      this.color = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
    else
      this.color = color;
  }

  reset()
  {
    delete [];
  }
}

class Paddle {
  constructor(x, y, color, nm) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 10;
    this.color = color;
    this.radius = 10;
    this.score = 0;
    this.name = nm;
  }
  draw() {
    ctx.beginPath();
    ctx.roundRect(this.x, this.y, this.width, this.height, this.radius);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  reset()
  {
    this.x = this.initialX;
    this.y = this.initialY;
    this.vx = 5;
    this.vy = 2;
    this.color = "white";
    this.speed = 1.00000001;
  }
}

// CREATE INSTANCE
resizeCanvas();
ball = new Ball(canvas.width / 2, canvas.height / 2, 10, "white");

// horyzontal

player1 = new Paddle(canvas.width / 2 - 70 / 2, 30, "white", "test");
player2 = new Paddle(canvas.width / 2 - 70 / 2, canvas.height - 10 - 30, "white", "Opponents");
if (canvas.width > 900)
{
  player1.x = 30;
  player1.y = canvas.height / 2 - 70 / 2;
  player1.height = 70;
  player1.width = 10;
  player2.x = canvas.width - 10 - 30;
  player2.y = canvas.height / 2 - 70 / 2;
  player2.height = 70;
  player2.width = 10;
}
else 
{
  player1.x = canvas.width / 2 - 70 / 2;
  player1.y = 30;
  player1.height = 10;
  player1.width = 70;
  player2.x = canvas.width / 2 - 70 / 2;
  player2.y = canvas.height - 10 - 30;
  player2.height = 10;
  player2.width = 70;
}
// FUNCTIONS
function debug_print()
{
  let i = 20;
  ctx.font = "10px Arial";
  ctx.fillText("Ball X : " + ball.x, i, 40);
  ctx.fillText("Ball Y: " + ball.y, i, 60);
  ctx.fillText("Ball vX : " + ball.vx, i, 80);
  ctx.fillText("Ball vy : " + ball.vy, i, 100);
  ctx.fillText("width : " + canvas.width, i, 120);
  ctx.fillText("height : " + canvas.height, i, 140);
  raf = window.requestAnimationFrame(debug_print);  
}

function draw_table() {
  // RESPONSIVE PART
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 2;
  
  if (canvas.width < 900)
  {
    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.font = "30px Arial";
    ctx.fillText(player1.score, 10, canvas.height / 2 - 20);
    ctx.fillText(player2.score, 10, canvas.height / 2 + 40);
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
  }
  else
  {
    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.font = "30px Arial";
    ctx.fillText(player1.score, canvas.width / 2 - 40, 30);
    ctx.fillText(player2.score, canvas.width / 2 + 25, 30);
    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
  }
  raf = window.requestAnimationFrame(draw_table);
}

function circleRectCollision(circleX, circleY, circleRadius, rectX, rectY, rectWidth, rectHeight) {
  var distX = Math.abs(circleX - rectX - rectWidth / 2);
  var distY = Math.abs(circleY - rectY - rectHeight / 2);

  if (distX > (rectWidth / 2 + circleRadius)) { return false; }
  if (distY > (rectHeight / 2 + circleRadius)) { return false; }

  if (distX <= (rectWidth / 2)) { return true; }
  if (distY <= (rectHeight / 2)) { return true; }

  var dx = distX - rectWidth / 2;
  var dy = distY - rectHeight / 2;
  return (dx * dx + dy * dy <= (circleRadius * circleRadius));
}


function draw_ball() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();

  ball.x += ball.vx;
  ball.y += ball.vy;

  if (
    ball.y + ball.vy > canvas.height - ball.radius ||
    ball.y + ball.vy < ball.radius
  ) {
    if (canvas.width < 900)
    {
      if (ball.y >= 800)
      {
        player1.score++;
        reset(1);
      }
      else if (ball.y <= 20)
      {
        player2.score++;
        reset(2);
      }
    }
    else
      ball.vy = -ball.vy * ball.speed;
    ball.setColor("white");
  }
  if (
    ball.x + ball.vx > canvas.width - ball.radius ||
    ball.x + ball.vx < ball.radius
  ) {
    if (canvas.width > 900){
      if (ball.y <= 260)
      {
        player1.score++;
        reset(1);
      }
      else if (ball.y >= 600)
      {
        player2.score++;
        reset(2);
      }
    }
    else
      ball.vx = -ball.vx * ball.speed;
    ball.setColor("white");
  }
  // COLLISION detection very simple (need to implement a better collision checker)
  let old_x = ball.x;
  let old_y = ball.y;

  if (canvas.width < 900)
  {
    if (circleRectCollision(old_x, old_y, ball.radius, player1.x , player1.y, 70, 10))
      ball.vy = -ball.vy * ball.speed;
    if (circleRectCollision(old_x, old_y, ball.radius, player2.x , player2.y, 70, 10))
      ball.vy = -ball.vy * ball.speed;
    } else if (canvas.width > 900)
    {
      if (circleRectCollision(old_x, old_y, ball.radius, player1.x, player1.y, 10, 70))
        ball.vx = -ball.vx * ball.speed;
      if (circleRectCollision(old_x, old_y, ball.radius, player2.x, player2.y, 10, 70))
        ball.vx = -ball.vx * ball.speed;
    }
  raf = window.requestAnimationFrame(draw_ball);
}

function draw_paddle()
{
  player1.draw();
  player2.draw();

  // FOR responsive player but broke the movemen
  raf = window.requestAnimationFrame(draw_paddle);
}


function reset(player_win)
{
  ball = new Ball(canvas.width / 2, canvas.height / 2, 10, "white");
  if (canvas.width < 900)
  {
    if (player_win == 2) {
      ball.vx = -5;
      ball.vy = 2;
    }
    else if (player_win == 1) {
      ball.vx = 5;
      ball.vy = -2;
    }
  } else if (canvas.width > 900)
  {
    if (player_win == 1) {
      ball.vx = -5;
      ball.vy = 2;
    }
    else if (player_win == 2) {
      ball.vx = 5;
      ball.vy = -2;
    }
  }

}


// MOVEMENTS
function checkKeyDown(e) {
  const action = KEY_CODES[e.keyCode];
  if (action) {
    keys[e.keyCode] = action;
  }
}
function checkKeyUp(e) {
  const action = KEY_CODES[e.keyCode];
  if (action) {
    delete keys[e.keyCode];
  }
}
function move_players() {
  for (let key in keys) {
    let player = window[keys[key].player];
    if (canvas.width < 900)
    {
      let newX = player.x + keys[key].change;
      if (newX >= 0 && newX <= canvas.width - player1.width)
        player.x = newX;
    } else {
      let newY = player.y + keys[key].change;
      if (newY >= 0 && newY <= canvas.height - player1.height)
        player.y = newY;
    }
  }
  raf = window.requestAnimationFrame(move_players);
}

window.addEventListener('keydown', checkKeyDown, false);
window.addEventListener('keyup', checkKeyUp, false);


function main()
{
  draw_ball();
  draw_paddle();
  draw_table();
  move_players();
  //debug_print();
}
raf = window.requestAnimationFrame(main);


