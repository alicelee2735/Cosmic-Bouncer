// Canvas setup
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const width = canvas.width;
const height = canvas.height;

// State variables
let balls = [];
let animationId;
let isPaused = false;
let mouse = { x: width / 2, y: height / 2 };
let speedMultiplier = 1;
let ballCount = 30;
const GRAVITY = { enabled: false, amount: 0.1 };
const ATTRACTION = { enabled: false, distance: 100, factor: 0.02 };

// Utility functions
const random = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(random(min, max));
const randomColor = () => `rgb(${randomInt(0, 256)}, ${randomInt(0, 256)}, ${randomInt(0, 256)})`;

// Ball class
class Ball {
    constructor(x, y, velX, velY, color, size) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    update() {
        if (GRAVITY.enabled) this.velY += GRAVITY.amount;

        if (this.x + this.size >= width) this.velX = -Math.abs(this.velX);
        if (this.x - this.size <= 0) this.velX = Math.abs(this.velX);
        if (this.y + this.size >= height) this.velY = -Math.abs(this.velY);
        if (this.y - this.size <= 0) this.velY = Math.abs(this.velY);

        if (ATTRACTION.enabled) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < ATTRACTION.distance) {
                const force = ATTRACTION.factor * (1 - distance / ATTRACTION.distance);
                this.velX += dx * force;
                this.velY += dy * force;
            }
        }

        this.x += this.velX * speedMultiplier;
        this.y += this.velY * speedMultiplier;
    }

    collisionDetect() {
        for (const ball of balls) {
            if (this !== ball) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < this.size + ball.size) {
                    ball.color = this.color = randomColor();
                }
            }
        }
    }
}

// Attraction visualization with cursor
const drawAttraction = () => {
    if (!ATTRACTION.enabled) return;

    // Draw attraction range (faint circle)
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, ATTRACTION.distance, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw cursor circle
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
};

// Animation loop
const loop = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < ballCount) {
        balls.push(new Ball(
            random(0, width),
            random(0, height),
            random(-7, 7),
            random(-7, 7),
            randomColor(),
            random(10, 20)
        ));
    }
    while (balls.length > ballCount) balls.pop();

    balls.forEach(ball => {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    });

    drawAttraction();

    if (!isPaused) animationId = requestAnimationFrame(loop);
};

// Button click effect
const buttonClickEffect = (btn) => {
    btn.style.backgroundColor = '#555';
    setTimeout(() => btn.style.backgroundColor = '#333', 100);
};

// Event listeners
document.getElementById('pauseResumeBtn').addEventListener('click', (e) => {
    buttonClickEffect(e.target);
    isPaused = !isPaused;
    e.target.textContent = isPaused ? 'Resume' : 'Pause';
    if (!isPaused) loop();
    else cancelAnimationFrame(animationId);
});

document.getElementById('speedBtn').addEventListener('click', (e) => {
    buttonClickEffect(e.target);
    speedMultiplier = speedMultiplier === 1 ? 2 : speedMultiplier === 2 ? 0.5 : 1;
    e.target.textContent = `Speed: ${speedMultiplier}x`;
});

document.getElementById('attractionBtn').addEventListener('click', (e) => {
    buttonClickEffect(e.target); // Added click effect here
    ATTRACTION.enabled = !ATTRACTION.enabled;
    e.target.textContent = `Attraction: ${ATTRACTION.enabled ? 'ON' : 'OFF'}`;
    e.target.style.backgroundColor = ATTRACTION.enabled ? '#555' : '#333';
});

document.getElementById('gravityBtn').addEventListener('click', (e) => {
    buttonClickEffect(e.target); // Added click effect here
    GRAVITY.enabled = !GRAVITY.enabled;
    e.target.textContent = `Gravity: ${GRAVITY.enabled ? 'ON' : 'OFF'}`;
    e.target.style.backgroundColor = GRAVITY.enabled ? '#555' : '#333';
});

document.getElementById('ballsBtn').addEventListener('click', (e) => {
    buttonClickEffect(e.target);
    ballCount = ballCount === 30 ? 50 : ballCount === 50 ? 100 : ballCount === 100 ? 10 : 30;
    e.target.textContent = `Amount: ${ballCount}`;
});

canvas.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    balls.forEach(ball => {
        ball.x = Math.min(ball.x, canvas.width);
        ball.y = Math.min(ball.y, canvas.height);
    });
});

// Start animation
loop();
