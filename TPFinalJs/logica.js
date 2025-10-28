
const words = [
  'californication', 'plataforma5', 'black', 'summer', 'flea', 'aeroplane',
  'peppers', 'unlimited', 'arcadium', 'love', 'getaway', 'stadium',
  'quixoticelixer', 'quarter', 'snow', 'dylan', 'zephyr', 'funky', 'chili'
];
const randomWordElement = document.getElementById('randomWord');
const text = document.getElementById('text');
const timeSpan = document.getElementById('timeSpan');
const scoreElement = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');

let palabraAleatoria;
let time = 10;
let score = 0;

function randomWords() {
  const i = Math.floor(Math.random() * words.length);
  return words[i];
}

function addToDOM() {
  palabraAleatoria = randomWords();
  randomWordElement.innerText = palabraAleatoria;
}
function updateScore() {
  score++;
  scoreElement.innerText = score;
}

function actualizarTiempo() {
  time--;
  timeSpan.innerText = `${time}s`;

  if (time === 0) {
    clearInterval(timer);
    gameOver();
  }
}

function gameOver() {
  document.querySelector('.main').remove();
  endGameContainer.innerHTML = `
    <h1>⏰ ¡Se acabó el tiempo!</h1>
    <p>Tu puntaje final es: ${score}</p>
    <button onclick="location.reload()">Jugar de nuevo</button>
  `;
}

text.addEventListener('input', function (e) {
  const palabraIngresada = e.target.value;

  if (palabraIngresada === palabraAleatoria) {
    addToDOM();       // nueva palabra
    updateScore();    // sumar punto
    e.target.value = ''; // limpiar input
    time += 3;        // sumar 3 segundos
  }
});

addToDOM();
const timer = setInterval(actualizarTiempo, 1000);
