// TAB SWITCHING
function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
}

// Upload Trigger
function uploadImage() {
  document.getElementById("imageUpload").click();
}

// PARTICLE BACKGROUND
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 3 + 1,
  dx: Math.random() - 0.5,
  dy: Math.random() - 0.5
}));

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#20c997";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// AGRICULTURE EMOJI CONFETTI
function launchConfetti() {
  const emojis = ["🌾","🌱","🍃","🍀","🚜","🌽","🥕"];
  for (let i = 0; i < 40; i++) {
    const span = document.createElement("span");
    span.innerText = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.position = "fixed";
    span.style.left = Math.random() * 100 + "vw";
    span.style.top = "-20px";
    span.style.fontSize = "28px";
    span.style.animation = "fall 3s linear";
    document.body.appendChild(span);

    setTimeout(() => span.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh) rotate(360deg); }
}`;
document.head.appendChild(style);
