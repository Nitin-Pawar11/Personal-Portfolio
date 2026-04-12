// --- 1. Circular Cursor Logic ---
const cursor = document.getElementById('cursor');
const blur = document.getElementById('cursor-blur');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    blur.style.left = e.clientX + 'px';
    blur.style.top = e.clientY + 'px';
});

// --- 2. Particles Background Animation ---
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let particles = [];
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    draw() {
        ctx.fillStyle = 'rgba(99, 102, 241, 0.3)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

// --- 3. Scroll Reveal Animations ---
ScrollReveal().reveal('.reveal', { 
    delay: 200, 
    distance: '50px', 
    origin: 'bottom', 
    duration: 1900 
});

ScrollReveal().reveal('.reveal-left', { 
    delay: 300, 
    distance: '50px', 
    origin: 'left', 
    duration: 1900 
});

ScrollReveal().reveal('.reveal-right', { 
    delay: 300, 
    distance: '50px', 
    origin: 'right', 
    duration: 1900 
});