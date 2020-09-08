// Desafio 1
function compareTrue(n1, n2) {
  // seu código aqui
  if (n1 && n2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let firstItem = array[0];
  let lastItem = array[array.length - 1];

  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  let points = winPoints + tiePoints;

  return points;
}

// Desafio 6
function highestNumber(numbers) {
  let highNumber = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (highNumber < numbers[i]) {
      highNumber = numbers[i];
    }
  }
  return highNumber;
}

function highestCount(numbers) {
  // seu código aqui
  let number = highestNumber(numbers);
  let counting = 0;
  for (let index in numbers) {
    if (number === numbers[index]) {
      counting += 1;
    }
  }
  return counting;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let catOne = Math.abs(cat1 - mouse);
  let catTwo = Math.abs(cat2 - mouse);
  if (catOne < catTwo) {
    return 'cat1';
  } else if (catOne > catTwo) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function changeNumberForFizzBuzz(number) {
  let change = '';
  if (number % 3 === 0 && number % 5 === 0) {
    change = 'fizzBuzz';
  } else if (number % 3 === 0) {
    change = 'fizz';
  } else if (number % 5 === 0) {
    change = 'buzz';
  } else {
    change = 'bug!';
  }
  return change;
}

function fizzBuzz(numbers) {
  // seu código aqui
  let arrayStrings = [];
  for (let i = 0; i < numbers.length; i += 1) {
    arrayStrings.push(changeNumberForFizzBuzz(numbers[i]));
  }
  return arrayStrings;
}

// Desafio 9
function encode(number) {
  // seu código aqui
  let letter = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  // let naturalNumbers = [];
  let stringWithNumbers = '';

  for (let indice in number) {
    if (
      number[indice] === 'a' ||
      number[indice] === 'e' ||
      number[indice] === 'i' ||
      number[indice] === 'o' ||
      number[indice] === 'u'
    ) {
      stringWithNumbers += letter[number[indice]];
    } else {
      stringWithNumbers += number[indice];
    }
  }
  return stringWithNumbers;
}

function decode(letter) {
  // seu código aqui
  letter = letter.replace(/1/gi, 'a');
  letter = letter.replace(/2/gi, 'e');
  letter = letter.replace(/3/gi, 'i');
  letter = letter.replace(/4/gi, 'o');
  letter = letter.replace(/5/gi, 'u');
  return letter;
}

// Desafio 10
function techList(tec, names) {
  // seu código aqui
  let tecnos = tec.sort();
  let tecnologies = [];
  if (tec.length > 0) {
    for (let i = 0; i < tecnos.length; i += 1) {
      tecnologies.push({ tech: tec[i], name: names });
    }
  } else {
    return 'Vazio!';
  }
  return tecnologies;
}

// Desafio 11
function checkNumber(number) {
  let numeros = {};
  let repetidos = [];

  number.forEach(function (item) {
    if (!numeros[item]) {
      numeros[item] = 0;
    }
    numeros[item] += 1;
  })

  for (let prop in numeros) {
    if (numeros[prop] >= 3) {
      repetidos.push(prop);
    }
  }
  if (repetidos.length > 0) {
    return 3;
  }
  return number;
}


function generatePhoneNumber(number) {
  // seu código aqui
  let phone = checkNumber(number);
  if (phone === 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  } else if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index in phone) {
    if (phone[index] < 0 || phone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
}

// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
  // seu código aqui
  let valorAB = Math.abs(ladoA - ladoB);
  let valorAC = Math.abs(ladoA - ladoC);
  let valorBC = Math.abs(ladoB - ladoC);

  if (ladoA < ladoB + ladoC && valorBC < ladoA) {
    return true;
  } else if (ladoB < ladoA + ladoC && valorAC < ladoB) {
    return true;
  } else if (ladoC < ladoA + ladoB && valorAB < ladoC) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(comanda) {
  // seu código aqui
  let numerosString = comanda.match(/\d+/g).map(Number);
  let quant = 0;

  for (let i = 0; i < numerosString.length; i += 1) {
    quant += numerosString[i];
  }
  if (quant === 1) {
    return `${quant} copo de água`;
  }
  return `${quant} copos de água`;
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
