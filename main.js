// Initialize canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
let balls = [];
let animationId;
let isPaused = false;
let mouse = { x: width / 2, y: height / 2 };
let speedMultiplier = 1;

const attraction = {
    enabled: false,
    distance: 100,
    factor: 0.02
}

// Function to generate random numbers
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Function to generate random colors
function randomColor() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
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
  /*this.velY += 0.1;  ADD GRAVITY, remove the commentary notation to test*/
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

    
    if (attraction.enabled) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < attraction.distance) { //  Attraction range
        this.velX += dx * attraction.factor;
        this.velY += dy * attraction.factor;
      }
    }

    this.x += this.velX * speedMultiplier;
    this.y += this.velY * speedMultiplier;
};

// Collision detection method for Ball
Ball.prototype.collisionDetect = function() {
    for (let j = 0; j < balls.length; j++) {
        const curBall = balls[j];
        if (this !== curBall) {
            const dx = this.x - curBall.x;
            const dy = this.y - curBall.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

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
        const ball = new Ball(
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
        const ball = balls[i];
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
    this.style.backgroundColor = '#555';
      setTimeout(() => this.style.backgroundColor = '#333', 100); /* Visible button clicks*/
    isPaused = !isPaused;
    if (isPaused) {
        cancelAnimationFrame(animationId);
        this.textContent = 'Resume';
    } else {
        loop();
        this.textContent = 'Pause';
    }
});

// Toggle speed multiplier
document.getElementById('speedBtn').addEventListener('click', function() {
    this.style.backgroundColor = '#555'; 
      setTimeout(() => this.style.backgroundColor = '#333', 100); /* Visible button clicks*/
    if (speedMultiplier === 0.5) {
        speedMultiplier = 1;
        this.textContent = 'Speed: 1x';
    } else if (speedMultiplier === 1) {
        speedMultiplier = 2;
        this.textContent = 'Speed: 2x';
    } else if (speedMultiplier === 2) {
        speedMultiplier = 0.5;
        this.textContent = 'Speed: 0.5x';
  }
});

document.getElementById('attractionBtn').addEventListener('click', function() {
  attraction.enabled = !attraction.enabled;

  this.textContent = attraction.enabled ? 'Attraction: ON' : 'Attraction: OFF';
  this.style.backgroundColor = attraction.enabled ? '#555' : '#333';
});

// Evento para detectar el movimiento del mouse
canvas.addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});