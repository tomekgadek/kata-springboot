const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");

const SUN_RADIUS = 50;
const EARTH_RADIUS = 20;
const MOON_RADIUS = 5;
const MARS_RADIUS = 10;

let earthAngle = 0;
let moonAngle = 0;
let marsAngle = 0;
let stars = []; // Przechowywanie pozycji gwiazd

// Funkcja tworząca gwiazdy na początku
function createStars() {
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 0.5, // Zmienna wielkość gwiazd
    });
  }
}

// Funkcja rysująca gwiazdy (bez poruszania)
function drawStars() {
  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
  });
}

// Dopasowanie rozmiaru canvas do okna przeglądarki
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function draw() {
  // Czyszczenie canvasa
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Rysowanie gwiazd (jednorazowo, jako tło)
  drawStars();

  // Rysowanie Słońca
  const sunX = canvas.width / 2;
  const sunY = canvas.height / 2;

  // Dodawanie cienia do Słońca
  ctx.shadowBlur = 40; // Intensywność rozmycia cienia
  ctx.shadowColor = "rgba(255, 165, 0, 0.8)"; // Kolor cienia (pomarańczowy)
  ctx.shadowOffsetX = 0; // Opcjonalne przesunięcie cienia w osi X
  ctx.shadowOffsetY = 0; // Opcjonalne przesunięcie cienia w osi Y

  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(sunX, sunY, SUN_RADIUS, 0, 2 * Math.PI);
  ctx.fill();

  // Resetowanie cienia, aby nie wpływał na inne elementy
  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";

  // Dynamiczne odległości od Słońca, dopasowane do rozmiaru okna
  const earthOrbitRadius = Math.min(canvas.width, canvas.height) * 0.2;
  const marsOrbitRadius = Math.min(canvas.width, canvas.height) * 0.35;
  const moonOrbitRadius = EARTH_RADIUS + 10;

  // Rysowanie Ziemi
  const earthX = sunX + earthOrbitRadius * Math.cos(earthAngle);
  const earthY = sunY + earthOrbitRadius * Math.sin(earthAngle);

  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(earthX, earthY, EARTH_RADIUS, 0, 2 * Math.PI);
  ctx.fill();

  // Rysowanie Księżyca
  const moonX = earthX + moonOrbitRadius * Math.cos(moonAngle);
  const moonY = earthY + moonOrbitRadius * Math.sin(moonAngle);

  ctx.fillStyle = "gray";
  ctx.beginPath();
  ctx.arc(moonX, moonY, MOON_RADIUS, 0, 2 * Math.PI);
  ctx.fill();

  // Rysowanie Marsa
  const marsX = sunX + marsOrbitRadius * Math.cos(marsAngle);
  const marsY = sunY + marsOrbitRadius * Math.sin(marsAngle);

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(marsX, marsY, MARS_RADIUS, 0, 2 * Math.PI);
  ctx.fill();

  // Aktualizacja kątów
  earthAngle += 0.01;
  moonAngle += 0.03;
  marsAngle += 0.005;

  // Wywołanie kolejnej klatki animacji
  requestAnimationFrame(draw);
}

// Inicjalizacja gwiazd i rozpoczęcie animacji
createStars();
draw();

console.log("Hi there :)");
console.log("https://github.com/tomekgadek");
console.log("https://tgadek.bitbucket.io/");
