// 🌸 Floating Petals Logic
function createFloatingPetal() {
  const petal = document.createElement("div");
  petal.className = "floating-petal";
  petal.innerText = "🌸";

  // Random positioning & size
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${5 + Math.random() * 3}s`;
  petal.style.fontSize = `${1 + Math.random() * 1.2}rem`;

  document.body.appendChild(petal);

  // Auto remove after animation
  setTimeout(() => {
    petal.remove();
  }, 9000);
}

// Drop 1 petal every 2.2 seconds
setInterval(createFloatingPetal, 2200);

// 👁️ Scroll-Reveal Logic
function revealOnScroll() {
  const elements = document.querySelectorAll(".fade-in");
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 50) {
      el.classList.add("visible");
    }
  });
}

document.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
