// Desafio 1 Usando o operador && Inicio né ....
function compareTrue(a, b) {
 let comparar = a && b;
 return comparar;
}

// Desafio 2 Área do triângulo Só tive que lembrar da formula
function calcArea(base, height) {
  let calculo = 0;
  calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3 Dividindo a frase Sem dificuldades
function splitSentence(frase) {
  let sentenca = "";
  sentenca = frase.split(" ");
  return sentenca;
}

// Desafio 4 Concatenação de strings Tive complicações e peguei nos sites e revi o código de colegas
function concatName(nomes) {
  let list = '';
  for (let i = 0; i < nomes.length; i += 1) {
    if (i === 0) {
      list += `${nomes[nomes.length - 1]}, `;
    } else if (i === nomes.length - 1) {
      list += nomes[0];
    }
  }
  return list;
}

// Desafio 5 Pontos no futebol Simples até

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6 Sem dificuldade
/*function highestCount(array) {
  let count = 0;
  let numMaior = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > numMaior) {
      numMaior = array[i];
    }
    if (array[i] === numMaior) {
        count += 1;
      }
  }
  return count;
}

Esta funcionando mais não está sendo aceito
*/
function highestCount(numbers) {
  let highestNumber = 0;
  let countNumber = 0;
  for (let i in numbers) {
    if (highestNumber < numbers[i]) {
      highestNumber = numbers[i];
      countNumber = 1;
    } else if (highestNumber === numbers[i]) {
      countNumber += 1;
    }
  }
  return countNumber;
}
// Desafio 7 Refiz 2x por não tratar o números negativos
function catAndMouse(mouse, cat1, cat2) {
  let catD1 = cat1 - mouse;
  let catD2 = cat2 - mouse;
  if (catD1 < 0) {
    catD1 *= -1;
  } else if (catD2 < 0) {
    catD2 *= -1;
  }
  if (catD1 < catD2) {
    return 'cat1'
  } else if (catD1 > catD2) {
    return "cat2";
  }
    return "os gatos trombam e o rato foge";
  }


// Desafio 8 Tive que refazer por causa da irdem de determinação, ajuda no platão vendo os dos colegas
function fizzBuzz(array) {
  let lista = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      lista.push('fizzBuzz');
    } else if (array[i] % 5 === 0) {
      lista.push('buzz');
    } else if (array[i] % 3 === 0) {
      lista.push('fizz');
    } else {
      lista.push('bug!');
    }
  }
  return lista;
}

// Desafio 9 Essa eu tive que rever dos colegas e sites
/* Função retornando, mas não está passando no teste ........
function encode(string) {
  let charge = string.split('');
  for (let i = 0; i < array.length; i++) {
    switch (charge[i]) {
      case 'a':
        charge[i] = 1;
        break;
      case 'e':
        charge[i] = 2;
        break;
      case 'i':
        charge[i] = 3;
        break;
      case 'o':
        charge[i] = 4;
        break;
      case 'u':
        charge[i] = 5;
        break;
      default:
        charge[i] = charge[i];
        break;
    }
  }
  return charge.join('')
}

function decode(string2) {
  let str = string2.split('');
  for (let i = 0; i < string2.length; i++) {
    switch (str[i]) {
      case '1':
        str[i] = 'a';
        break;
      case '2':
        str[i] = 'e';
        break;
      case '3':
        str[i] = 'i';
        break;
      case '4':
        str[i] = 'o';
        break;
      case '5':
        str[i] = 'u';
        break;
      default:
        str[i] = str[i];
        break;
    }
  }
  return str.join('');
}
*/
function encode(cod) {
  let newCod = '';
  for (let i = 0; i < cod.length; i += 1) {
    if (cod[i] === 'a') {
      newCod += '1';
    } else if (cod[i] === 'e') {
      newCod += '2';
    } else if (cod[i] === 'i') {
      newCod += '3';
    } else if (cod[i] === 'o') {
      newCod += '4';
    } else if (cod[i] === 'u') {
      newCod += '5';
    } else {
      newCod += cod[i];
    }
  }
  return newCod;
}

function decode(dec) {
  let newDec = '';
  for (let i = 0; i < dec.length; i += 1) {
    if (dec[i] === '1') {
      newDec += 'a';
    } else if (dec[i] === '2') {
      newDec += 'e';
    } else if (dec[i] === '3') {
      newDec += 'i';
    } else if (dec[i] === '4') {
      newDec += 'o';
    } else if (dec[i] === '5') {
      newDec += 'u';
    } else {
      newDec += dec[i];
    }
  }
  return newDec;
}
// Desafio 10
function techList(array, name) {
  if (array.length !== 0) {
    let createObject = [];
    array.sort();
    for (let item = 0; item < array.length; item += 1) {
      createObject.push({
        tech: array[item],
        name: `${name}`,
      });
    } return createObject;
  } return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(numb) {
  if (numb.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < numb.length; i += 1) {
    if (numb[i] < 0 || numb[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let count = 0;
  for (let x = 0; x < numb.length; x += 1) {
    if (numb[i] === numb[x]) {
      count += 1;
    }
  }
  if (count > 2) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  phone.splice(0, 0, '(');
  phone.splice(3, 0, ')');
  phone.splice(4, 0, ' ');
  phone.splice(10, 0, '-');
  return phone.join('');
}


// Desafio 12
function triangleCheck() {

}

// Desafio 13
function hydrate() {

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
