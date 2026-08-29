// Shared 3D-tilt + glare handlers for .feat-card / .integ-card, ported
// verbatim from the mockup's tiltCards() script.
const MAX_TILT = 10;

export function handleTiltMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width;
  const py = (e.clientY - rect.top) / rect.height;
  const rotateY = (px - 0.5) * MAX_TILT * 2;
  const rotateX = (0.5 - py) * MAX_TILT * 2;
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.015)`;
  card.style.setProperty("--mx", `${px * 100}%`);
  card.style.setProperty("--my", `${py * 100}%`);
}

export function handleTiltLeave(e) {
  e.currentTarget.style.transform = "";
}
