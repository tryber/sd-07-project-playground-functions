// User github - mustang-roy
// Nome: Luiz Filipe Sampaio Mariz

// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(originalString) {
  return originalString.split(' ');
}

// Desafio 4
function concatName(originalArray) {
  return `${originalArray[originalArray.length - 1]}, ${originalArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  array.sort()
  let count = 0;
  for (let index = 0; index < array.length; index+=1) {
    if (array[array.length - 1] === array[index]) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;

  dist1 = Math.abs(dist1);
  dist2 = Math.abs(dist2);

  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist2 < dist1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  for (let item in array){
    if (array[item] % 15 === 0) {
      array[item] = 'fizzBuzz'
    } else if (array[item] % 5 === 0) {
      array[item] = 'buzz'
    } else if (array[item] % 3 === 0) {
      array[item] = 'fizz'
    } else {
      array[item] = 'bug!'
    }
  }

  return array;
}

// Desafio 9
function encode(name) {
  let encrypt = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let encodeName = '';

  for (let letter in name) {
    if (encrypt[name[letter]] === undefined) {
      encodeName += name[letter]
    } else {
      encodeName += encrypt[name[letter]]
    }
  }

  return encodeName;
}

function decode(name) {
  let encrypt = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let decodeName = "";

  for (let letter in name) {
    if (encrypt[name[letter]] === undefined) {
      decodeName += name[letter]
    } else {
      decodeName += encrypt[name[letter]]
    }
  }

  return decodeName;
}

// Desafio 10
function techList(array, nome) {
  array.sort()

  let arrayObject = [];

  for (let item = 0; item < array.length; item += 1) {
    arrayObject.push(
      {
        tech: array[item],
        name: nome,
      });
  }

  return arrayObject.length === 0 ? 'Vazio!' : arrayObject;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < array.length; index += 1) {
    let count = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        count += 1;
      }
    }
    if (count >= 3 || array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  const stringNumber = (array.map(function (n) {return n.toString(); })).join('');

  const dddNum = stringNumber.slice(0, 2);
  const part1Num = stringNumber.slice(2, 7);
  const part2Num = stringNumber.slice(7, 11);

  return `(${dddNum}) ${part1Num}-${part2Num}`;// seu código aqui
}

// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
  let check = false
  let testeLadoA = (ladoA < ladoB + ladoC && ladoA > Math.abs(ladoB - ladoC));
  let testeLadoB = (ladoB < ladoA + ladoC && ladoB > Math.abs(ladoA - ladoC));
  let testeLadoC = (ladoC < ladoB + ladoA && ladoC > Math.abs(ladoB - ladoA));

  if (testeLadoA || testeLadoB || testeLadoC) {
    check = true;
  }

  return check;
}

// Desafio 13
function hydrate(order) {
  let result = (order.match(/[0-9]+/g))
  result = result.reduce((acumulador, current) => Number(acumulador) + Number(current))

  return  result > 1 ? `${result} copos de água` : `${result} copo de água`;
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
