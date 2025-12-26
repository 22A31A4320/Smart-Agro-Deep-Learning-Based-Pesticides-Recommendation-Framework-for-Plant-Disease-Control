/* ======================
   TAB SWITCHING
====================== */
function showTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab =>
    tab.classList.remove("active")
  );

  document.getElementById(tabId).classList.add("active");

  if (tabId === "result") {
    showLeafName("Tomato Leaf 🍃");
    launchConfetti();
  }
}

/* Upload */
function uploadImage() {
  document.getElementById("imageUpload").click();
}

/* ======================
   PARTICLE BACKGROUND
====================== */
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

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

/* ======================
   AGRICULTURE CONFETTI 🍀
====================== */
function launchConfetti() {
  for (let i = 0; i < 500; i++) {
    const leaf = document.createElement("span");
    leaf.textContent = "🍀";
    leaf.style.position = "fixed";
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.top = "-30px";
    leaf.style.fontSize = "30px";
    leaf.style.pointerEvents = "none";
    leaf.style.animation = "fall 3.5s linear";
    document.body.appendChild(leaf);

    setTimeout(() => leaf.remove(), 3500);
  }
}

/* ======================
   LEAF NAME DISPLAY
====================== */
function showLeafName(name) {
  const leaf = document.getElementById("leafName");
  leaf.textContent = `Detected Leaf: ${name}`;
  leaf.style.opacity = 0;
  leaf.style.animation = "leafFade 1s forwards";
}

/* ======================
   DYNAMIC STYLES
====================== */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh) rotate(360deg); }
}

@keyframes leafFade {
  to { opacity: 1; }
}
`;
document.head.appendChild(style);
