// Initialize canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
let balls = [];
let animationId;
let isPaused = false;

// Function to generate random numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Function to generate random colors
function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}

// Ball constructor
function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

// Draw method for Ball
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// Update method for Ball
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }
  this.x += this.velX;
  this.y += this.velY;
};

// Collision detection method for Ball
Ball.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    let curBall = balls[j];
    if (this !== curBall) {
      var dx = this.x - curBall.x;
      var dy = this.y - curBall.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + curBall.size) {
        curBall.color = this.color = randomColor();
      }
    }
  }
};

// Animation loop
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while (balls.length < 30) {
    let ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7, 7),
      random(-7, 7),
      randomColor(),
      random(10, 20)
    );
    balls.push(ball);
  }

  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  if (!isPaused) {
    animationId = requestAnimationFrame(loop);
  }
}

// Start the animation loop
loop();

// Toggle pause/resume
document.getElementById('pauseResumeBtn').addEventListener('click', function() {
  isPaused = !isPaused;
  if (isPaused) {
    cancelAnimationFrame(animationId);
    this.textContent = 'Resume';
  } else {
    loop();
    this.textContent = 'Pause';
  }
});