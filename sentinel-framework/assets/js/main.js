// Sentinel Framework Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize framework
    initializeSentinel();
    
    // Add interactive elements
    addInteractiveEffects();
    
    // Initialize navigation
    initializeNavigation();
});

function initializeSentinel() {
    console.log('🛡️ Sentinel Framework initialized');
    console.log('⚡ EverLightOS quantum substrata stabilized');
    console.log('🔮 SphinxGuardian protocols active');
    
    // Add loading animation
    document.body.classList.add('loaded');
}

function addInteractiveEffects() {
    // Add hover effects to feature cards
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = '0 15px 30px rgba(138, 43, 226, 0.3)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

function initializeNavigation() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Active navigation highlighting
const navLinks = document.querySelectorAll('nav a');
let current = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
  if (link.getAttribute('href') === current ||
      link.getAttribute('href') === '/' && current === 'index.html') {
    link.classList.add('active');
  }
});


// Lattice visualization (for lattice.html page)
function initializeLatticeVisualization() {
    const canvas = document.getElementById('lattice-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    let time = 0;
    
    function drawSierpinskiLattice() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const size = Math.min(canvas.width, canvas.height) * 0.4;
        
        // Draw fractal pattern
        drawTriangle(ctx, centerX, centerY - size/2, size, 0, time);
        
        time += 0.02;
        requestAnimationFrame(drawSierpinskiLattice);
    }
    
    function drawTriangle(ctx, x, y, size, depth, time) {
        if (depth > 5 || size < 2) return;
        
        const height = size * Math.sqrt(3) / 2;
        const hue = (depth * 60 + time * 50) % 360;
        
        ctx.strokeStyle = `hsl(${hue}, 70%, 60%)`;
        ctx.lineWidth = Math.max(1, 3 - depth * 0.5);
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - size/2, y + height);
        ctx.lineTo(x + size/2, y + height);
        ctx.closePath();
        ctx.stroke();
        
        // Recursive triangles
        const newSize = size / 2;
        drawTriangle(ctx, x, y, newSize, depth + 1, time);
        drawTriangle(ctx, x - newSize/2, y + height/2, newSize, depth + 1, time);
        drawTriangle(ctx, x + newSize/2, y + height/2, newSize, depth + 1, time);
    }
    
    drawSierpinskiLattice();
}

// Quantum field animation
function initializeQuantumField() {
    const particles = [];
    const canvas = document.getElementById('quantum-field');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            hue: Math.random() * 360
        });
    }
    
    function animateField() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, 0.8)`;
            ctx.fill();
            
            // Update hue for color cycling
            particle.hue = (particle.hue + 1) % 360;
        });
        
        requestAnimationFrame(animateField);
    }
    
    animateField();
}

// Initialize page-specific features
if (window.location.pathname.includes('lattice.html')) {
    document.addEventListener('DOMContentLoaded', initializeLatticeVisualization);
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .loaded {
        animation: fadeIn 0.5s ease-in;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    nav a.active {
        color: var(--highlight-color);
    }
    
    nav a.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);
