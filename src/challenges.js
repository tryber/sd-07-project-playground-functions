// Desafio 1
function compareTrue(val1, val2) {
  if (val1 && val2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let copia = frase;
  let partida = [];
  let indice = 0;

  for (let i = 0; i < copia.length; i += 1) {
    if (i === 0) {
      partida[indice] = copia[i];
    } else if (copia[i] !== ' ') {
      partida[indice] += copia[i];
    } else {
      indice += 1;
      i += 1;
      partida[indice] = copia[i];
    }
  }
  return partida;
}

// Desafio 4
function concatName(array) {
  let saida;
  saida = array[array.length - 1] + ', ' + array[0];
  return saida;
}
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = Math.max.apply(Math, array);
  let contador = 0;

  for (let i in array) {
    if (array[i] === maior) {
      contador += 1;
    }
  }
  console.log(maior);
  return contador;
}
console.log(highestCount([9, 1, 2, 3, 9, 9, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist2 < dist1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
  // seu código aqui
}
// console.log(catAndMouse(3, 0, 9));

// Desafio 8
function fizzBuzz(array) {
  let resposta = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resposta.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      resposta.push('fizz');
    } else if (array[i] % 5 === 0) {
      resposta.push('buzz');
    } else {
      resposta.push('bug!');
    }
  }
  return resposta;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

function convert1(array, X) {
  //convert X=1 encode, X=0 decode;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'a') {
      array[i] = '1';
    } else if (array[i] === 'e') {
      array[i] = '2';
    } else if (array[i] === 'i') {
      array[i] = '3';
    } else if (array[i] === 'o') {
      array[i] = '4';
    } else if (array[i] === 'u') {
      array[i] = '5';
    }
  }
  return array;
}

function convert0(array, X) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '1') {
      array[i] = 'a';
    } else if (array[i] === '2') {
      array[i] = 'e';
    } else if (array[i] === '3') {
      array[i] = 'i';
    } else if (array[i] === '4') {
      array[i] = 'o';
    } else if (array[i] === '5') {
      array[i] = 'u';
    }
  }
  return array;
}

// Desafio 9
function encode(entrada) {
  let array = [];
  for (let i = 0; i < entrada.length; i += 1) {
    array.push(entrada[i]);
  }
  convert1(array, 1);
  let frase = array[0];
  for (let i = 1; i < array.length; i += 1) {
    frase += array[i];
  }
  return frase;
}
// console.log(encode('Hi There'));

function decode(entrada) {
  let array = [];
  for (let i = 0; i < entrada.length; i += 1) {
    array.push(entrada[i]);
  }
  convert0(array, 0);
  let frase = array[0];
  for (let i = 1; i < array.length; i += 1) {
    frase += array[i];
  }
  return frase;
}
//  console.log('encode funcionando?' + encode('Hi there a e i o u'))
//  console.log('decode funcionando?' + decode('H3 Th2r2 11 22 33 44 55'))

// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let saida = {};
  let emOrdem = array.sort(); // ordena o array da entrada
  let lista = [];

  for (let i in emOrdem) {
    saida.tech = emOrdem[i];
    saida.name = name;
    lista[i] = { ...saida };
  }

  return lista;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Fernando'));

// Desafio 11

// function montando (numeros){
//   numeros.unshift('(');
//   numeros.splice(3, 0, ')', ' ');
//   numeros.splice(10, 0, '-');

//   let saida = numeros[0];
//   for (let i = 1; i < numeros.length; i += 1) {
//     saida += numeros[i];
//   }
//   return (saida)
// }
function generatePhoneNumber(entrada) {
  let numeros = entrada;
  // testando se números são válidos
  if (numeros.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let frequencia = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i in numeros) {
    if (numeros[i] < 0 || numeros[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    frequencia[numeros[i]] += 1;
  }
  for (let i in frequencia) {
    if (frequencia[i] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // números aprovados. Hora de montar o número de telefone
  numeros.unshift('(');
  numeros.splice(3, 0, ')', ' ');
  numeros.splice(10, 0, '-');

  let saida = numeros[0];
  for (let i = 1; i < numeros.length; i += 1) {
    saida += numeros[i];
  }
  return saida;
}

 console.log (generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let A = Math.abs(lineA);
  let B = Math.abs(lineB);
  let C = Math.abs(lineC);
  if (A < B + C && B < A + C && C < A + B) {
    return true;
  } else {
    return false;
  }
  // seu código aqui
}
// console.log(triangleCheck(10,4,6))

// Desafio 13
function hydrate(bebidas) {
  let matches = bebidas.match(/\d+/g);
  let total = 0;

  for (let i in matches) {
    total += parseInt(matches[i], 10); // O '10' é para indicar a base decimal.
  }
  if (total === 1) {
    return total + ' copo de água';
  } else {
    return total + ' copos de água';
  }
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
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
