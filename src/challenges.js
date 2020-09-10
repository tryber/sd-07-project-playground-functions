// Desafio 1
function compareTrue(a, b) {
  let compare = a && b;
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let trianguloArea = ((base * height) / 2);
  return trianguloArea;
}

// Desafio 3
function splitSentence(frase) {
  let aPalavras = frase.split(' ');
  return aPalavras;
}

// Desafio 4
function concatName(nomes) {
  let tamanho = nomes[nomes.length -1] + `, ` + nomes[0];
  return tamanho;
}

// Desafio 5
function footballPoints(wins, ties ) {
  pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let repete = 0;
  let maiorNum = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] > maiorNum) {
      maiorNum = numeros[i];
      repete = 1;
    } else if (numeros[i] === maiorNum) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let retorno ='';
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse)
  if (cat1 === cat2) {
    retorno = "os gatos trombam e o rato foge";
  } else {
    retorno = (cat1 > cat2) ? "cat2" : "cat1";
  }
  return retorno;
}
console.log(catAndMouse(5, 3, 9))

// Desafio 8
function fizzBuzz(arrayNumerosFB) {
  let arrayFB = [];
  for (let i = 0; i < arrayNumerosFB.length; i+= 1) {
    let resto3 = arrayNumerosFB[i] % 3;
    let resto5 = arrayNumerosFB[i] % 5
    if ((resto3 === 0) || (resto5 === 0)) {
      if ((resto3 === 0) && (resto5 === 0)) {
        arrayFB[i] = 'fizzBuzz';
      } else if (resto3 === 0) {
        arrayFB[i] = 'fizz';
      } else {
        arrayFB[i] = 'buzz';
      }
    } else {
      arrayFB[i] = 'bug!';
    }
  }
  return arrayFB;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode(frase) {
  let fraseResultante = frase.replace(/a/g, '1');
  fraseResultante = fraseResultante.replace(/e/g, '2');
  fraseResultante = fraseResultante.replace(/i/g, '3');
  fraseResultante = fraseResultante.replace(/o/g, '4');
  fraseResultante = fraseResultante.replace(/u/g, '5');
  return fraseResultante;
}
function decode(frase) {
  let fraseResultante = frase.replace(/1/g, 'a');
  fraseResultante = fraseResultante.replace(/2/g, 'e');
  fraseResultante = fraseResultante.replace(/3/g, 'i');
  fraseResultante = fraseResultante.replace(/4/g, 'o');
  fraseResultante = fraseResultante.replace(/5/g, 'u');
  return fraseResultante;
}
console.log (encode('hi there!'));
console.log(decode("h3, th2r2!"));
// Desafio 10
function techList() {
  // seu código aqui
}
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}
// Desafio 13
function hydrate() {
  // seu código aqui
}
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
