/* ======================
   MAIN TAB SWITCH
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

/* ======================
   TOP TAB SLIDE
====================== */
function switchTopTab(id, el) {
  const panels = document.querySelectorAll(".top-panel");
  const tabs = document.querySelectorAll(".top-tab");

  panels.forEach(panel => {
    if (panel.classList.contains("active")) {
      panel.classList.add("exit");
      setTimeout(() => {
        panel.classList.remove("active", "exit");
      }, 600);
    }
  });

  document.getElementById(id).classList.add("active");

  tabs.forEach(tab => tab.classList.remove("active"));
  el.classList.add("active");
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
  canvas.width = innerWidth;
  canvas.height = innerHeight;
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
   🍀 RANDOM LEAF FALL
====================== */
function launchConfetti() {
  for (let i = 0; i < 60; i++) {
    const leaf = document.createElement("span");
    leaf.textContent = "🍀";
    leaf.className = "leaf-confetti";

    const startX = Math.random() * window.innerWidth;
    const duration = 3 + Math.random() * 3;
    const sway = Math.random() * 120 - 60;
    const rotation = Math.random() * 720 - 360;

    leaf.style.left = `${startX}px`;
    leaf.style.animationDuration = `${duration}s`;
    leaf.style.setProperty("--sway", `${sway}px`);
    leaf.style.setProperty("--rotate", `${rotation}deg`);

    document.body.appendChild(leaf);
    setTimeout(() => leaf.remove(), duration * 1000);
  }
}

/* ======================
   LEAF NAME
====================== */
function showLeafName(name) {
  const leaf = document.getElementById("leafName");
  leaf.textContent = `Detected Leaf: ${name}`;
  leaf.style.animation = "none";
  leaf.offsetHeight;
  leaf.style.animation = "fadeLeaf 1s forwards";
}

/* Leaf fade */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeLeaf {
  to { opacity: 1; }
}`;
document.head.appendChild(style);
