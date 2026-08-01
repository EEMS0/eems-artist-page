const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const canvas = document.querySelector('#visualizer');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (canvas && !reducedMotion) {
  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let pointerX = 0.5;

  function resize() {
    width = window.innerWidth;
    height = Math.max(170, window.innerHeight * 0.26);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);
    const bars = Math.max(34, Math.floor(width / 24));
    const gap = width / bars;
    const baseline = height;

    for (let i = 0; i < bars; i += 1) {
      const x = i * gap;
      const waveA = Math.sin(time * 0.0014 + i * 0.42);
      const waveB = Math.sin(time * 0.0007 + i * 0.17);
      const pointerLift = 1 - Math.min(1, Math.abs(i / bars - pointerX) * 3.5);
      const barHeight = 18 + Math.abs(waveA * waveB) * height * 0.58 + pointerLift * 34;
      const hue = 165 + (i / bars) * 155;
      const gradient = ctx.createLinearGradient(0, baseline - barHeight, 0, baseline);
      gradient.addColorStop(0, `hsla(${hue}, 100%, 66%, .9)`);
      gradient.addColorStop(1, `hsla(${hue + 42}, 100%, 55%, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(x + gap * 0.23, baseline - barHeight, Math.max(2, gap * 0.42), barHeight);
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', (event) => {
    pointerX = event.clientX / Math.max(1, window.innerWidth);
  }, { passive: true });

  resize();
  requestAnimationFrame(draw);
}

const cards = document.querySelectorAll('.social-card');
cards.forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});
