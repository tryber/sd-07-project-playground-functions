// Desafio 1
function compareTrue(primeiroValor, segundoValor) {
  let resultado = false;
  if (primeiroValor && segundoValor) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(arrayDeStrings) {
  arrayResultado = '';
  arrayResultado += arrayDeStrings[arrayDeStrings.length - 1];
  arrayResultado += ', ';
  arrayResultado += arrayDeStrings[0];
  return arrayResultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties * 1;
  let totalPontos = pontosEmpate + pontosVitoria;
  return totalPontos;
}

// Desafio 6
function highestCount(arrayDeInteiros) {
  //funcoes criadas nos exercícios do dia 4.
  function retornaIndiceMaiorValor(arrayEscolhido) {
    let indiceMaiorValor = 0;
    let numeroVitorias = 0;
    //verifica o maior valor do arrayEscolhido.
    for (j = 0; j < arrayEscolhido.length; j += 1) {
      numeroVitorias = 0;
      for (i = 0; i < arrayEscolhido.length; i += 1) {
        if (arrayEscolhido[j] >= arrayEscolhido[i]) {
          numeroVitorias += 1;
        }
      }

      if (numeroVitorias === arrayEscolhido.length) {
        indiceMaiorValor = j;
      }
    }
    return indiceMaiorValor;
  }
  function numeroRepeticoes(array, indice) {
    let numeroRepeticoes = 0;
    for (let i = 0; i < array.length; i += 1) {
      if (array[indice] === array[i]) {
        numeroRepeticoes += 1;
      }
    }
    return numeroRepeticoes;
  }

  let indiceDoElementoMaior = retornaIndiceMaiorValor(arrayDeInteiros);

  return numeroRepeticoes(arrayDeInteiros, indiceDoElementoMaior);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  function comparacaoDistancia(distanciaCat1, distanciaCat2) {
    let resultado = '';
    if (distanciaCat1 > distanciaCat2) {
      resultado = 'cat2';
    } else if (distanciaCat1 < distanciaCat2) {
      resultado = 'cat1';
    } else {
      resultado = 'os gatos trombam e o rato foge';
    }
    return resultado;
  }

  let dCat1 = 0;
  let dCat2 = 0;

  //cat1,cat2,mouse
  if (mouse > cat1 && mouse > cat2) {
    dCat1 = mouse - cat1;
    dCat2 = mouse - cat2;
  }

  //mouse,cat1,cat2
  if (mouse < cat1 && mouse < cat2) {
    dCat1 = cat1 - mouse;
    dCat2 = cat2 - mouse;
  }

  //cat1,mouse,cat2
  if (mouse > cat1 && mouse < cat2) {
    dCat1 = mouse - cat1;
    dCat2 = cat2 - mouse;
  }

  //cat2,mouse,cat1
  if (mouse < cat1 && mouse > cat2) {
    dCat1 = cat1 - mouse;
    dCat2 = mouse - cat2;
  }

  return comparacaoDistancia(dCat1, dCat2);
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let resultado = [];
  for (i in arrayNumeros)
    if (arrayNumeros[i] % 3 === 0 && arrayNumeros[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (arrayNumeros[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (arrayNumeros[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  return resultado;
}

// Desafio 9
function encode(frase) {
  frase = frase.replace(/a/g, '1');
  frase = frase.replace(/e/g, '2');
  frase = frase.replace(/i/g, '3');
  frase = frase.replace(/o/g, '4');
  frase = frase.replace(/u/g, '5');
  return frase;
}
function decode(codigo) {
  codigo = codigo.replace(/1/g, 'a');
  codigo = codigo.replace(/2/g, 'e');
  codigo = codigo.replace(/3/g, 'i');
  codigo = codigo.replace(/4/g, 'o');
  codigo = codigo.replace(/5/g, 'u');
  return codigo;
}

// Desafio 10
function techList(nomesTec, name) {
  nomesTec.sort();
  let arrayDeAulas = [];
  for (i in nomesTec) {
    let aulas = {
      tech: nomesTec[i],
      name: name,
    };
    arrayDeAulas.push(aulas);
  }
  if (nomesTec.length === 0) {
    let resultado = '';
    resultado = 'Vazio!';
    return resultado;
  } else {
    return arrayDeAulas;
  }
}

// Desafio 11
function generatePhoneNumber(numeros) {
  function maisDeTresRepeticoes(numeros) {
    let repeteTresVezes = false;
    let repeticao = 0;
    let maiorRepeticao = 0;
    for (let i = 0; i < numeros.length; i += 1) {
      let numeroAtual = numeros[i];
      repeticao = 0;
      for (let j = 0; j < numeros.length; j += 1) {
        let numeroPercorrido = numeros[j];
        if (numeroAtual === numeroPercorrido) {
          repeticao += 1;
        }
      }
      if (repeticao > maiorRepeticao) {
        maiorRepeticao = repeticao;
      }
    }
    if (maiorRepeticao >= 3) {
      repeteTresVezes = true;
    } else {
      repeteTresVezes = false;
    }
    return repeteTresVezes;
  }

  let impossivelGerar = false;

  for (let index = 0; index < numeros.length; index += 1) {
    if (
      numeros[index] > 9 ||
      numeros[index] < 0 ||
      maisDeTresRepeticoes(numeros)
    ) {
      impossivelGerar = true;
    }
  }

  if (numeros.length !== 11) {
    let resultado = 'Array com tamanho incorreto.';
    return resultado;
  } else if (impossivelGerar) {
    let resultado =
      'não é possível gerar um número de telefone com esses valores';
    return resultado;
  } else {
    let phoneNumber = '(';
    phoneNumber += numeros[0];
    phoneNumber += numeros[1];
    phoneNumber += ') ';
    for (let index = 2; index <= 6; index += 1) {
      phoneNumber += numeros[index];
    }
    phoneNumber += '-';
    for (let index = 7; index <= 10; index += 1) {
      phoneNumber += numeros[index];
    }
    return phoneNumber;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultadoA = false;
  let resultadoB = false;
  let resultadoC = false;
  let resultadoFinal = false;

  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    resultadoA = true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    resultadoB = true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    resultadoC = true;
  }

  if (resultadoA && resultadoB && resultadoC) {
    resultadoFinal = true;
  } else {
    resultadoFinal = false;
  }
  return resultadoFinal;
}

// Desafio 13
function hydrate(phraseDrink) {
  const numbers = /[1-9]/g;
  const arrayNumbers = phraseDrink.match(numbers);
  let soma = 0;
  let resultado = '';
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    soma += parseInt(arrayNumbers[index]);
  }
  if (soma === 1) {
    resultado = soma + ' copo de água';
  } else if (soma > 1) {
    resultado = soma + ' copos de água';
  }
  return resultado;
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
