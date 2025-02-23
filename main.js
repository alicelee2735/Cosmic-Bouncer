//initialize canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
//width&height
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
//empty 
let balls = []

function random(min,max) {
  return Math.floor(Math.random()*(max-min)) + min;
}

function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}

function Ball(x,y,velX,velY,color,size) {
  this.x = x
  this.y = y
  this.velX = velX
  this.velY = velY
  this.color = color
  this.size = size
}

Ball.prototype.draw = function(){
  ctx.beginPath()
  ctx.fillStyle = this.color;
  ctx.arc(this.x,this.y,this.size,0,2*Math.PI)
  ctx.fill()
}

Ball.prototype.update = function(){
  if((this.x+this.size)>=width){
    this.velX = -(this.velX);
  }
  if((this.x - this.size)<=0){
    this.velX = -(this.velX);
  }

  if((this.y+this.size)>=height){
    this.velY = -(this.velY);
  }
  if((this.y - this.size)<=0){
    this.velY = -(this.velY);
  }
  this.x += this.velX
  this.y += this.velY
}

Ball.prototype.collisionDetect = function(){
  for(let j=0;j<balls.length;j++){
    let curBall = balls[j]
    if( (this!==curBall) ){
      var dx = this.x - curBall.x;
      var dy = this.y - curBall.y;
      var distance = Math.sqrt(dx*dx + dy*dy)

      if(distance < this.size+ curBall.size){
        curBall.color = this.color = randomColor()
      }
    }
  }
}
function loop(){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
  while(balls.length<30){
    let ball = new Ball(
      random(0,width),
      random(0,height),
      random(-7,7),
      random(-7,7),
      randomColor(),
      random(10,20)
      )
      balls.push(ball)
  }
  for(let i=0;i<balls.length;i++){
    let ball = balls[i]
    ball.draw()
    ball.update()
    ball.collisionDetect()
  }
  requestAnimationFrame(loop)
}
loop()