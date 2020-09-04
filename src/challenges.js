// Desafio 1
function compareTrue(a, b) {
  let teste = true;
  if (a === teste && b === teste) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let separador = ' ';
  let palavra = frase.split(separador);
  return palavra;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(array) {
  let maior = Math.max(...array);
  let contador = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (maior === array[i]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = 0;
  let dist2 = 0;
  dist1 = Math.abs(mouse - cat1);
  dist2 = Math.abs(mouse - cat2);
  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  } else if (dist1 < dist2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let armazena = [];
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] % 3) === 0 && (array[i] % 5) === 0) {
      armazena[i] = 'fizzBuzz';
    } else if ((array[i] % 3) === 0) {
      armazena[i] = 'fizz';
    } else if ((array[i] % 5) === 0) {
      armazena[i] = 'buzz';
    } else {
      armazena[i] = 'bug!';
    }
  }
  return armazena;
}

// Desafio 9
function encode(word) {
  word = word.replace(/a/g, 1);
  word = word.replace(/e/g, 2);
  word = word.replace(/i/g, 3);
  word = word.replace(/o/g, 4);
  word = word.replace(/u/g, 5);
  return word;
}

function decode(word) {
  word = word.replace(/1/g, 'a');
  word = word.replace(/2/g, 'e');
  word = word.replace(/3/g, 'i');
  word = word.replace(/4/g, 'o');
  word = word.replace(/5/g, 'u');
  return word;
}

// Desafio 10
function techList(tecnologias, name) {
  let arrayDeObjetos = [];
  if (tecnologias.length === 0) {
    return 'Vazio!'
  }
  tecnologias.sort();
  for (let i = 0; i < tecnologias.length; i += 1) {
    arrayDeObjetos[i] = {
      tech: tecnologias[i],
      name,
    };
  }
  arrayDeObjetos.sort();
  return arrayDeObjetos;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) { return 'Array com tamanho incorreto.'; }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < 0 || array[i] > 9) return 'não é possível gerar um número de telefone com esses valores';
    let contador = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        contador += 1;
      }
    }
    if (contador >= 3) return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC) || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  if (lineB > (lineA + lineC) || lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  if (lineC > (lineB + lineA) || lineC < Math.abs(lineB - lineA)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(frase) {
  let ref = /\d+/g;
  let resultado = frase.match(ref);
  let contador = 0;
  for (let i = 0; i < resultado.length; i += 1) {
    let num = parseInt(resultado[i], 10);
    contador += num;
  }
  if (contador === 1) { return `${contador} copo de água`; }
  return `${contador} copos de água`;
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
