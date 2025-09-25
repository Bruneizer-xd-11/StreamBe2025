// 1) Arreglo de palabras
const words = [
  'californication','plataforma5','black','summer','flea','aeroplane',
  'peppers','unlimited','arcadium','love','getaway','stadium',
  'quixoticelixer','quarter','snow','dylan','zephyr','funky','chili'
];

// 2) Función que devuelve una palabra random
function randomWords() {
  const i = Math.floor(Math.random() * words.length);
  return words[i];
}
console.log('Palabra aleatoria ->', randomWords());
const randomWordElement = document.getElementById('randomWord');

let palabraAleatoria;
print("hola")
function addToDOM() {
  palabraAleatoria = randomWords();
  randomWordElement.innerText = palabraAleatoria;
}

addToDOM();


