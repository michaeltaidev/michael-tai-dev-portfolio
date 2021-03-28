const canvas = document.getElementById('hero-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Create particles
class Particle {
  // TODO: Destructure
  constructor(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = '#222324';
    ctx.fill();
  }

  // Called every step
  update() {
    // Reverse the particle direction if it reaches the edge of the screen
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }

    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }

    // Passive particle movement
    this.x += this.directionX;
    this.y += this.directionY;

    this.draw();
  }
}

function init() {
  particlesArray = [];

  // Create more particles the bigger the screen size
  let numberOfParticles = (canvas.height * canvas.width) / 12000;

  for (let i = 0; i < numberOfParticles; i++) {
    let size = (Math.random() * 2);

    // Randomize particle spawn with a buffer from the edge of the screen
    let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
    let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);

    // Randomizes particle direction and speed
    let particleSpeed = 1.2;
    let directionX = (Math.random() * particleSpeed * (Math.round(Math.random()) * 2 - 1));
    let directionY = (Math.random() * particleSpeed * (Math.round(Math.random()) * 2 - 1));

    let color = '#222324';

    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

function animate() {
  // Smooths the animation
  requestAnimationFrame(animate);

  // Clear old animations
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update()
  }

  connect();
}

// Draws a line between particles if they're close enough to each other
function connect() {
  let opacityValue = 1;

  // Compares each particle to all other particles
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

      if (distance < 20000) {
        // Fade-out the line as particles get further from each other
        opacityValue = 1 - (distance/20000);
        ctx.strokeStyle = 'rgba(34, 35, 36,' + opacityValue + ')';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

// Recreates particles when resizing the window
window.addEventListener('resize', function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
})

init();
animate();