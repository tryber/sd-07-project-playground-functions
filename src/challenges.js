// Desafio 1
function compareTrue(bolean1, bolean2) {
  // testando se o resultado é verdadeiro ou falso
  return bolean1 && bolean2;
}

// Desafio 2
function calcArea(base, height) {
  // calculando a área de um triângulo
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(textString) {
  // retorna array de string separada pelos espaços
  let palavra = textString.split(' ');

  return palavra;
}

// Desafio 4
function concatName(text) {
  // retornando posição final + inicial do array
  return `${text[text.length - 1]}, ${text[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const points = ((wins * 3) + ties)
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // retorna repetição do maior número de array
  const nums = numbers;

  // pega o maior valor do array
  const greaterValue = Math.max.apply(null, nums);

  // fitra o array apenas com o maior valor
  const greaterValueCounts = nums.filter(a => a === greaterValue);

  // retorna quantos valores eeiste dentro do array que contém apenas o maior valor
  return greaterValueCounts.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aquiC
  const distanceMouseCat1 = Math.abs(cat1 - mouse);
  const distanceMouseCat2 = Math.abs(cat2 - mouse);

  let sms = ';'

  if (distanceMouseCat1 === distanceMouseCat2) {
    sms = 'os gatos trombam e o rato foge';
  } else if (distanceMouseCat1 > distanceMouseCat2) {
    sms = 'cat2';
  } else if (distanceMouseCat1 < distanceMouseCat2) {
    sms = 'cat1';
  }

  return sms;
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBussReturned = [];

  for (let num = 0; num < numbers.length; num += 1) {
    let isDiv3 = numbers[num] % 3 === 0;
    let isDiv5 = numbers[num] % 5 === 0;

    if (isDiv3 && !isDiv5) fizzBussReturned[num] = 'fizz';
    else if (!isDiv3 && isDiv5) fizzBussReturned[num] = 'buzz';
    else if (isDiv3 && isDiv5) fizzBussReturned[num] = 'fizzBuzz';
    else fizzBussReturned[num] = 'bug!';
  }

  return fizzBussReturned;
}

console.log(fizzBuzz([1, 2, 3, 4, 5, 6, 10, 15]))

// Desafio 9
function encode(textEncode) {
  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5

  let encoding = '';
  for (let i = 0; i < textEncode.length; i += 1) {
    switch (textEncode[i]) {
      case 'a':
        encoding += 1;
        break;
      case 'e':
        encoding += 2;
        break;
      case 'i':
        encoding += 3;
        break;
      case 'o':
        encoding += 4;
        break;
      case 'u':
        encoding += 5;
        break;
      default:
        encoding += textEncode[i];
        break;
    }
  }

  return encoding;
}

function decode(textDecode) {
  // 1 -> a
  // 2 -> e
  // 3 -> i
  // 4 -> o
  // 5 -> u

  let decoding = '';
  for (let i = 0; i < textDecode.length; i += 1) {
    switch (textDecode[i]) {
      case '1':
        decoding += 'a';
        break;
      case '2':
        decoding += 'e';
        break;
      case '3':
        decoding += 'i';
        break;
      case '4':
        decoding += 'o';
        break;
      case '5':
        decoding += 'u';
        break;
      default:
        decoding += textDecode[i];
        break;
    }
  }

  return decoding;
}

// Desafio 10
function techList(techNames, name) {
  const lists = techNames.sort();

  const listReturned = [];

  if (lists.length === 0) return 'Vazio!';

  for (let tech of lists) {
    listReturned.push({
      tech,
      name,
    });
  }
  return listReturned;
}

// Desafio 11
function isPossible(phoneNumber) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i of phoneNumber) {
    if (!(i in numbers)) return false;
  }

  return true;
}

function isRepeatNumbersMoreThree(phoneNumber) {
  let countRepeatValue = 0;

  for (let i of phoneNumber) {
    for (let j of phoneNumber) {
      if (i === j) countRepeatValue += 1;
      if (countRepeatValue >= 3) return true;
    }
    countRepeatValue = 0;
  }

  return false;
}

function verifyErros(phoneNumber) {
  let smsError = null;

  // verifica se existe mais ou menos de 11 número e retorna erro
  if (phoneNumber.length !== 11) smsError = 'Array com tamanho incorreto.';

  // verifica se números são diferentes do numbers
  if (!isPossible(phoneNumber)) smsError = 'não é possível gerar um número de telefone com esses valores';

  // verifica se existe mais de dois número repetidos
  if (isRepeatNumbersMoreThree(phoneNumber)) smsError = 'não é possível gerar um número de telefone com esses valores';

  return smsError;
}

function generatePhoneNumber(phoneNumber) {
  if (verifyErros(phoneNumber) !== null) return verifyErros(phoneNumber);

  let phoneFormated = '(';

  function updatePhone(pos) {
    phoneFormated += phoneNumber[pos];
  }

  for (let pos in phoneNumber) {
    if (Number(pos) >= 0 && Number(pos) <= 1) {
      updatePhone(Number(pos))
      if (Number(pos) === 1) phoneFormated += ') ';
    } else if (Number(pos) >= 2 && Number(pos) <= 6) {
      updatePhone(Number(pos))
      if (Number(pos) === 6) phoneFormated += '-';
    } else if (Number(pos) >= 7 && Number(pos) <= 10) {
      updatePhone(Number(pos))
    }
  }


  return phoneFormated;
}
console.log(generatePhoneNumber([1, 2, 2, 3, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = true;

  if (!(lineA <= lineB + lineC && lineA > Math.abs(lineB - lineC))) isTriangle = false;
  if (!(lineB <= lineA + lineC && lineB > Math.abs(lineA - lineC))) isTriangle = false;
  if (!(lineC <= lineA + lineB && lineC > Math.abs(lineA - lineB))) isTriangle = false;

  return isTriangle;
}

// Desafio 13
function hydrate(textString) {
  let glassWater = 0;

  for (let num in textString) {
    if (Number(textString[num]) === Number(textString[num])) glassWater += Number(textString[num])
  }

  return `${glassWater} copo${glassWater === 1 ? '' : 's'} de água`;
}
console.log(hydrate('bebi 3 copos de 5  i 1copos '))

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
