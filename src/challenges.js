// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(vetorString) {
  const str = vetorString;
  const splitStr = str.split(' ');
  return splitStr;
}

// Desafio 4
function concatName(vetorString) {
  const vetorFuncao = vetorString;
  const primeiroNome = vetorFuncao[0];
  const ultimoNome = vetorFuncao[vetorFuncao.length - 1];
  const concatenado = `${ultimoNome}, ${primeiroNome}`;
  return concatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  const quantidadeVitorias = wins;
  const quantidadeEmpates = ties;
  const pontosVitoria = quantidadeVitorias * 3;
  const pontosEmpates = quantidadeEmpates * 1;
  const resultado = pontosVitoria + pontosEmpates;
  return resultado;
}

// Desafio 6
function highestCount(vetor) {
  const vector = vetor;
  const len = vetor.length;
  let swapped;
  let j = 0;
  do {
    swapped = false;
    for (let i = 0; i < len; i += 1) {
      if (vector[i] > vector[i + 1]) {
        const tmp = vector[i];
        vector[i] = vector[i + 1];
        vector[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  for (let i = 0; i < vetor.length; i += 1) {
    if (vetor[vetor.length - 1] === vetor[i]) {
      j += 1;
    }
  }
  return j;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const rato = mouse;
  const gato1 = cat1;
  const gato2 = cat2;
  const distanciaGato1 = Math.abs(rato - gato1);
  const distanciaGato2 = Math.abs(rato - gato2);

  if (distanciaGato1 < distanciaGato2) {
    return 'cat1';
  } if (distanciaGato1 > distanciaGato2) return 'cat2';

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  const vetorSaida = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 5 === 0 && array[i] % 3 === 0) {
      vetorSaida.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      vetorSaida.push('fizz');
    } else if (array[i] % 5 === 0) {
      vetorSaida.push('buzz');
    } else {
      vetorSaida.push('bug!');
    }
  }

  return vetorSaida;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array, name) {
  const arrayObjetos = [];

  const nome = name;

  if (array.length === 0) {
    return 'Vazio!';
  }
  const habilidades = array.sort();
  for (let i = 0; i < habilidades.length; i += 1) {
    const objeto = {
      tech: habilidades[i],
      name: nome,
    };
    arrayObjetos.push(objeto);
  }

  return arrayObjetos;
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
};
