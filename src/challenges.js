function compareTrue(boleano1, boleano2) {
  let boleano = true;
  if (boleano1 === true && boleano2 === true) {
    boleano = true;
  } else if (boleano1 !== boleano2) {
    boleano = false;
  } else if (boleano1 === false && boleano2 === false) {
    boleano = false;
  }
  return boleano;
}

function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

function splitSentence(palavra) {
  let dividindoPalavras = palavra.split(' ');
  return dividindoPalavras;
}

function concatName(nomes) {
  let n = nomes.length;
  return `${nomes[n - 1]}, ${nomes[0]}`;
}

function footballPoints(wins, ties) {
  let pontos = 0;
  wins *= 3;
  pontos = ties + wins;
  return pontos;
}

function highestCount(lista) {
  let repeticao = [];
  let maiorNumero = lista[0];

  for (let i in lista) {
    if (lista[i] > maiorNumero) {
      maiorNumero = lista[i];
    }
  }
  for (let j in lista) {
    if (lista[j] === maiorNumero) {
      repeticao += 1;
    }
  }
  return repeticao.length;
}

function catAndMouse(mouse, cat1, cat2) {
  let cat1Pos = cat1 - mouse;
  let cat2Pos = cat2 - mouse;
  let resultado = '';
  if (cat1Pos < 1) {
    cat1Pos = 1;
  }
  if (cat2Pos < 1) {
    cat2Pos = 1;
  }
  if (cat1Pos === cat2Pos) {
    resultado = 'os gatos trombam e o rato foge';
  } else if (cat1Pos > cat2Pos) {
    resultado = 'cat2';
  } else if (cat1Pos < cat2Pos) {
    resultado = 'cat1';
  }
  return resultado;
}

function fizzBuzz(numeros) {
  let retorno = [];
  for (let i in numeros) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      retorno.push('fizzBuzz');
    } else if (numeros[i] % 5 === 0) {
      retorno.push('buzz');
    } else if (numeros[i] % 3 === 0) {
      retorno.push('fizz');
    } else {
      retorno.push('bug!');
    }
  }
  return retorno;
}
console.log(encode('hello'));
function encode(frase) {
  let resultado = frase;
  resultado = resultado.replace(/a/gi, '1');
  resultado = resultado.replace(/e/gi, '2');
  resultado = resultado.replace(/i/gi, '3');
  resultado = resultado.replace(/o/gi, '4');
  resultado = resultado.replace(/u/gi, '5');
  return resultado;
}

function decode(frase) {
  let resultado = frase;
  resultado = resultado.replace(/1/gi, 'a');
  resultado = resultado.replace(/2/gi, 'e');
  resultado = resultado.replace(/3/gi, 'i');
  resultado = resultado.replace(/4/gi, 'o');
  resultado = resultado.replace(/5/gi, 'u');
  return resultado;
}

function techList(tech, name) {
  let techArray = [];
  let techObj = {};
  if (tech.length < 1) {
    return 'Vazio!';
  }
  tech.sort();
  for (let i = 0; i < tech.length; i += 1) {
    techObj.tech = tech[i];
    techObj.name = name;
    techArray.push(Object.assign({}, techObj));
  }
  return techArray;
}

function validaTamanho(tamanho) {
  if (tamanho.length !== 11) {
    return true;
  }
  return false;
}
function validaNumeros(valNum) {
  for (let i = 0; i < valNum.length; i += 1) {
    if (valNum[i] < 0 || valNum[i] > 9) {
      return true;
    }
  }
  return false;
}
function validarepetidos(valRep) {
  // Valida numeros repetidos
  // fonte: https://medium.com/@amirdanish126/how-to-count-duplicate-value-in-an-array-in-javascript-e942b59af8f2
  let resultado = {};
  valRep.forEach(function (x) {
    resultado[x] = (resultado[x] || 0) + 1;
  });
  for (let i in resultado) {
    if (resultado[i] > 2) {
      return true;
    }
  }
  return false;
}
function generatePhoneNumber(n) {
  let teste1 = validaTamanho(n);
  let teste2 = validaNumeros(n);
  let teste3 = validarepetidos(n);
  if (teste1 === true) {
    return 'Array com tamanho incorreto.';
  } else if (teste2 === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else if (teste3 === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}

// Desafio 12
function triangleCheck() {}

// Desafio 13
function hydrate() {}

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
