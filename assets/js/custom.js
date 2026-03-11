(function () {
    var canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');
    var particles = [];
    var particleCount = Math.min(70, Math.floor(window.innerWidth / 18));
    var mouse = { x: null, y: null };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        for (var i = 0; i < particleCount; i += 1) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
                size: Math.random() * 2.2 + 1,
            });
        }
    }

    function drawConnections(particle) {
        for (var i = 0; i < particles.length; i += 1) {
            var other = particles[i];
            var dx = particle.x - other.x;
            var dy = particle.y - other.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 130) {
                ctx.strokeStyle = 'rgba(103, 240, 255,' + (0.12 - distance / 1400) + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.stroke();
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < particles.length; i += 1) {
            var p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            if (mouse.x !== null) {
                var mx = p.x - mouse.x;
                var my = p.y - mouse.y;
                var md = Math.sqrt(mx * mx + my * my);
                if (md < 120) {
                    p.x += mx / 30;
                    p.y += my / 30;
                }
            }

            drawConnections(p);
            ctx.beginPath();
            ctx.fillStyle = 'rgba(103, 240, 255, 0.8)';
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        }
        requestAnimationFrame(animate);
    }

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener('resize', function () {
        particleCount = Math.min(70, Math.floor(window.innerWidth / 18));
        resizeCanvas();
        createParticles();
    });

    window.addEventListener('mousemove', function (event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener('mouseout', function () {
        mouse.x = null;
        mouse.y = null;
    });

    var revealElements = document.querySelectorAll('[data-reveal]');
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.16 });

    revealElements.forEach(function (element) {
        observer.observe(element);
    });

    var skillObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var fills = entry.target.querySelectorAll('.skill-fill');
                fills.forEach(function (fill) {
                    fill.style.width = fill.getAttribute('data-width') + '%';
                });
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }

    var heroVisual = document.querySelector('.hero-visual');
    var heroFrame = document.querySelector('.hero-photo-frame');
    if (heroVisual && heroFrame) {
        heroVisual.addEventListener('mousemove', function (event) {
            var bounds = heroVisual.getBoundingClientRect();
            var offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
            var offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
            heroFrame.style.setProperty('--hero-rotate-y', (-10 + offsetX * 10) + 'deg');
            heroFrame.style.setProperty('--hero-rotate-x', (4 - offsetY * 10) + 'deg');
        });

        heroVisual.addEventListener('mouseleave', function () {
            heroFrame.style.setProperty('--hero-rotate-y', '-10deg');
            heroFrame.style.setProperty('--hero-rotate-x', '4deg');
        });
    }
})();
