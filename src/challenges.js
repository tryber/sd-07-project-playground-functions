// Desafio 1

function compareTrue(a, b) {
  if (a && b) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (height * base) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length - 1];

  return `${ultimo}, ${primeiro}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = cat1 - mouse;
  let d2 = cat2 - mouse;

  if (Math.abs(d1) < Math.abs(d2)) return "cat1";
  else if (Math.abs(d1) > Math.abs(d2)) return "cat2";

  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  let saida = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) saida.push("fizzBuzz");
    else if (array[i] % 3 == 0) saida.push("fizz");
    else if (array[i] % 5 == 0) saida.push("buzz");
    else saida.push("bug!");
  }
  return saida;
}

// Desafio 9
function encode (string) {
let nstr = '';
let a = string ; 
  for (let i in a ) {
    switch (a[i]) {
      case 'a':
        nstr += 1;
        break;
      case 'e':
        nstr += 2;
        break;
      case 'i':
        nstr += 3;
        break;
      case 'o':
        nstr += 4;
        break;
      case 'u':
        nstr += 5;
        break;
      default:
        nstr += a[i]
    }
  }
  return nstr ;
}


function decode(string) {
  let saida = string.replace(/1/g, "a");
  let said = saida.replace(/2/g, "e");
  let sai = said.replace(/3/g, "i");
  let sa = sai.replace(/4/g, "o");
  let s = sa.replace(/5/g, "u");
  return s;
}

// Desafio 10
function techList(array, name) {
  array.sort();
  let saida = [];
  if (array.length == 0) return "Vazio!";

  for (let i = 0; i < array.length; i++) {
    saida.push({
      tech: array[i],
      name: name,
    });
  }
  return saida;
}

// Desafio 11
function generatePhoneNumber() {
  function getCount(str) {
    let vowelsCount = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < str.length; i++) {
      if (vowels.indexOf(str[i]) != -1) {
        vowelsCount++;
      }
    }

    return vowelsCount;
  }
}

// Desafio 12
function triangleCheck(a, b, c) {
  let condicion1 = a > b + c;
  let condicion2 = b > a + c;
  let condicion3 = c > b + a;
  if (condicion1 == true || condicion2 == true || condicion3 == true)
    return false;
  else return true;
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
};
