// Desafio 1
function compareTrue(valor1, valor2) {
  let retorno = false;
  if (valor1 === true && valor2 === true) {
    retorno = true;
  } else {
    retorno = false;
  }
  return retorno;
}


// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}


// Desafio 3
function splitSentence(umaString) {
  let umArray = umaString.split(' ')
  return umArray;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let stringFinal = (arrayDeStrings[(arrayDeStrings.length - 1)] + ', ' + arrayDeStrings[0])
  return stringFinal;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((3 * wins) + ties);
  return points;
}

// Desafio 6
function highestCount(numeros) {
  let numerosEmOrdem = numeros.sort();
  let maiorNumero = numerosEmOrdem[numerosEmOrdem.length - 1];
  let rep = 0;
  for (let i in numerosEmOrdem) {
    if (numerosEmOrdem[i] === maiorNumero) {
      rep += 1;
    }
  }
  return rep;
}

// Desafio 7
function catAndMouse(posicao1, posicao2, posicao3) {
  let cat1 = Math.abs(posicao2 - posicao1);
  let cat2 = Math.abs(posicao3 - posicao1);
  let retorno = '';
  if (cat1 < cat2) {
    retorno = 'cat1'
  } else if (cat2 < cat1) {
    retorno = 'cat2'
  } else {
    retorno = 'os gatos trombam e o rato foge'
  }
  return retorno;
}

// Desafio 8
function fizzBuzz(numeros) {
  let retorno = [];
  for (let i in numeros) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 !== 0) {
      retorno.push('fizz')
    } else if (numeros[i] % 5 === 0 && numeros[i] % 3 !== 0) {
      retorno.push('buzz')
    } else if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      retorno.push('fizzBuzz')
    } else {
      retorno.push('bug!')
    }
  }
  return retorno;
}

// Desafio 9
function encode(palavra) {
  let palavraArray = palavra.split('');
  let newArray = [];
  for (let i in palavraArray) {
    switch (palavraArray[i]) {
      case 'a':
        newArray.push('1')
        break;
      case 'e':
        newArray.push('2')
        break;
      case 'i':
        newArray.push('3')
        break;
      case 'o':
        newArray.push('4')
        break;
      case 'u':
        newArray.push('5')
        break;
      default:
      newArray.push(palavraArray[i])
    }
  }
  let newString = newArray.join('')
  return newString;
}

function decode(palavra) {
  let palavraArray = palavra.split('');
  let newArray = [];
  for (let i in palavraArray) {
    switch (palavraArray[i]) {
      case '1':
        newArray.push('a')
        break;
      case '2':
        newArray.push('e')
        break;
      case '3':
        newArray.push('i')
        break;
      case '4':
        newArray.push('o')
        break;
      case '5':
        newArray.push('u')
        break;
      default:
      newArray.push(palavraArray[i])
    }
  }
  let newString = newArray.join('')
  return newString;
}

// Desafio 10
function techList(tecnologias, name) {
  let objetos = [];
  let objeto = {
    tech: 'NomeTech',
    name: 'nome',
  }
  let tecnologiasEmOrdem = tecnologias.sort();
  for (let i in tecnologiasEmOrdem) {
    objeto = {
      tech: tecnologiasEmOrdem[i],
      name: name,
    }
    objetos.push(objeto);
    objeto = 0;
  }
  if (tecnologias.length === 0) {
    return 'Vazio!';
  } else {
    return objetos;
  }
}

// Desafio 11
function generatePhoneNumber(numero) {
  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let i in numero) {
    if (numero[i] < 0 || numero[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (let i = 0; i < numero.length; i += 1) {
    let rep = 0;
    for (let j = i; j < numero.length; j += 1) {
      if (numero[i] === numero[j]) {
        rep += 1
      }
    }
    if (rep >= 3) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  let numeroString = '';
  numero.unshift('(');
  numero.splice(3, 0, ')');
  numero.splice(4, 0, ' ');
  numero.splice(10, 0, '-');
  numeroString = numero.join('')
  return numeroString;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let retorno = false;
  if (lineA < (lineB + lineC) &&
    lineB < (lineA + lineC) &&
    lineC < (lineB + lineA) &&
    lineA > Math.abs(lineB - lineC) &&
    lineB > Math.abs(lineA - lineC) &&
    lineC > Math.abs(lineB - lineA)) {
      retorno = true
  } else {
    retorno = false
  }
  return retorno;
}

// Desafio 13
function hydrate(drink) {
  let num = drink.match(/\d/g);
  let newNum = [];
  for (let i in num) {
    newNum.push(parseInt(num[i]))
  }
  let total = newNum.reduce (function(acumulador, valorAtual, index) {
    return acumulador + valorAtual;
  });
  if (total === 1) {
    return total + ' copo de água'
  } else {
    return total + ' copos de água'
  }
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
