// Desafio 1
function compareTrue(valor1, valor2) {
  return (valor1 && valor2);
}

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  return String(string).split(' ');
}

// Desafio 4
function concatName(string) {
  let contaString = 0;

  for (const key in string) {
    if (Object.prototype.hasOwnProperty.call(string, key)) {
      contaString = key;
    }
  }

  let newString = `${string[contaString]}, ${string[0]}`;
  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let qtdVitorias = 3;
  return (wins * qtdVitorias) + ties;
}

// Desafio 6
function highestCount(vetor) {
  vetor = vetor.sort().reverse();
  let posMaior = 0;

  for (const key in vetor) {
    if (vetor[0] === vetor[key]) {
      posMaior = key;
    }
  }
  posMaior = parseInt(posMaior, 10) + 1;

  return posMaior;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = 0;
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if (cat1 === cat2) {
    resultado = 'os gatos trombam e o rato foge';
  } else {
    resultado = (cat1 > cat2) ? 'cat2' : 'cat1';
  }

  return resultado;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayRetorno = [];
  array.forEach((element) => {
    if (element % 5 === 0 && element % 3 === 0) {
      arrayRetorno.push('fizzBuzz');
    } else if (element % 3 === 0) {
      arrayRetorno.push('fizz');
    } else if (element % 5 === 0) {
      arrayRetorno.push('buzz');
    } else if (element % 5 && element % 3) {
      arrayRetorno.push('bug!');
    }
  });

  return arrayRetorno;
}

// Desafio 9
function encode(string) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < 5; i += 1) {
    let regExp = new RegExp(vogais[i], 'g');
    string = string.replace(regExp, `${i + 1}`);
  }
  return string;
}

function decode(string) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];

  for (let i = 0; i < 5; i += 1) {
    let regExp = new RegExp(i + 1, 'g');
    string = string.replace(regExp, vogais[i]);
  }

  return string;
}

// Desafio 10
function techList(tecnologias, nome) {
  let saida = [];

  if (tecnologias.length === 0) {
    saida = 'Vazio!';
  }

  tecnologias.sort().forEach((element) => {
    saida.push({
      tech: element,
      name: nome,
    });
  });

  return saida;
}

// Desafio 11

function contaNumeroOcorrencias(num, arr) {
  let limiteOcorrencias = 3;
  let ocorrencias = arr.filter(function (elem) {
    return elem === num;
  });
  return ocorrencias.length < limiteOcorrencias;
}

function procuraRepetidos(array) {
  let ehLimitado = false;
  for (let i = 0; i < array.length; i += 1) {
    ehLimitado = contaNumeroOcorrencias(array[i], array);
    if (!ehLimitado) {
      return ehLimitado;
    }
  }
  return ehLimitado;
}

function verificaIntervalo(array, inferior, superior) {
  for (const key in array) {
    if (array[key] <= inferior || array[key] >= superior) {
      return false;
    }
  }
  return true;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (!(procuraRepetidos(array) && verificaIntervalo(array, -1, 10))) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  /** FONTE:  http://wbruno.com.br/expressao-regular/mascara-campo-de-telefone-em-javascript-com-regex-nono-digito-telefones-sao-paulo/ */

  array = array.toString();
  array = array.replace(/\D/g, ''); // Remove tudo o que não é dígito
  array = array.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses em volta dos dois primeiros dígitos
  array = array.replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen entre o quarto e o quinto dígitos

  return array;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lados = (lineA + lineB) > lineC;
  lados = lados && (lineA + lineC) > lineB;
  lados = lados && (lineC + lineB) > lineA;

  let modulo = Math.abs(lineA - lineB) < lineC;
  modulo = modulo && Math.abs(lineA - lineC) < lineB;
  modulo = modulo && Math.abs(lineC - lineB) < lineA;

  return lados && modulo;
}

// Desafio 13
/**
 * Fonte de pesquisa: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
 * https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
 */

function hydrate(phrase) {
  let reg = /\d+/g;
  /**
   * O QUE SIGINIFICAM OS CARACTERES?
   * d : encontra correspondência com um número de 0 a 9; /\d/
   * + : permite encontrar repetidos;
   * g : significa 'global' que pesquisa varias vezes */
  let numbers = phrase.match(reg); // cria um array com os números encontrados na string phrase.
  let sum = 0;

  for (const key in numbers) {
    if (Object.prototype.hasOwnProperty.call(numbers, key)) {
      sum += parseInt(numbers[key], 10);
    }
  }

  return sum > 1 ? `${sum} copos de água` : `${sum} copo de água`;
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
