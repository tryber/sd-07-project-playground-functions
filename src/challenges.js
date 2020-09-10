// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return (true);
  } else {
    return (false)
}
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(string) {
  var separador = ' '
  let stringSeparada = string.split(separador)
  return stringSeparada
}
// Desafio 4
function concatName(array) {
  let i = (array.length - 1)
  let ultimo = (array[i])
  let primeiro = (array[0])
  return ultimo + ', ' + primeiro
}
// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3
  let empate = ties
  return pontos = vitoria + empate
}
// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let contador = 0;
  for (let i = 0; i < array.length; i += 1){
    if (array[i] >= maiorNumero) {
      maiorNumero = array[i];
    }
  }
  for (let j = 0; j <array.length; j += 1){
    if (maiorNumero === array[j]){
      contador += 1
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1 - mouse;
  let distanciaCat2 = cat2 - mouse;

  if (distanciaCat1 < 0) {
    distanciaCat1 *= -1
  } 
  if (distanciaCat2 < 0){
    distanciaCat2 *= -1
  }

  if (distanciaCat1 > distanciaCat2) {
    return "cat2"
  }
  else if (distanciaCat1 < distanciaCat2) {
    return "cat1"
  } else {
    return "os gatos trombam e o rato foge"
  }
}
// Desafio 8
function fizzBuzz(array) {
  let resultado = []
  for (let i = 0; i < array.length; i += 1){
    if (array[i] % 3 === 0 && array[i] % 5 === 0){
    resultado.push("fizzBuzz")
    }
    else if (array[i] % 5 === 0){
      resultado.push("buzz")
    }
    else if  (array[i] % 3 === 0){
    resultado.push("fizz")
    }
    else {
      resultado.push("bug!")
   }
  }
  return resultado
}
// Desafio 9
function encode(string) {
  let troca1 = string.replace(/a/g, "1");
  let troca2 = troca1.replace(/e/g, "2");
  let troca3 = troca2.replace(/i/g, "3");
  let troca4 = troca3.replace(/o/g, "4");
  let troca5 = troca4.replace(/u/g, "5");

  let resultado = troca5
  return resultado
}
function decode(string) {
  let troca1 = string.replace(/1/g, "a");
  let troca2 = troca1.replace(/2/g, "e");
  let troca3 = troca2.replace(/3/g, "i");
  let troca4 = troca3.replace(/4/g, "o");
  let troca5 = troca4.replace(/5/g, "u");

  let resultado = troca5
  return resultado
}
// Desafio 10
function techList(array, name) {
  let ordem = array.sort();
  let listadeTec = []
  for (i = 0; i < ordem.length; i += 1){
    let  objeto = {};
    objeto = {
      tech: ordem[i],
      name: name
    }
    listadeTec.push(objeto)
  }
  if (listadeTec.length > 0){
  return listadeTec
  } else {
    return "Vazio!"
  }
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
