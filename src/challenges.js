// https://github.com/tryber/sd-07-project-playground-functions

// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo === true) {
    return true;
  }
  return false;
}

compareTrue(true, false);

// Desafio 2
function calcArea(base, height) {
  let cal = (base * height) / 2;
  return cal;
}

calcArea(2, 3);

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}
splitSentence('go Trybe');

// Desafio 4
function concatName(strings) {
  let lastString = strings[strings.length - 1];
  let strFinal = `${lastString}, ${strings[0]}`;
  return strFinal;
}
concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + (1 * ties);
  return points;
}
footballPoints(2, 1);

// Desafio 6
function highestNumber(numbers) {
  let maiorNumero = 0;
  for (let index in numbers) {
    if (numbers[index] > maiorNumero) {
      maiorNumero = numbers[index];
    }
  }
  return maiorNumero;
}

function highestCount(numbers) {
  let repeticao = 0;
  let maiorNumero = highestNumber(numbers);
  for (let indice in numbers) {
    if (numbers[indice] === maiorNumero) {
      repeticao += 1;
    }
  }
  return repeticao;
}

highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 > distCat2) {
    return 'cat2';
  } else if (distCat2 > distCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

catAndMouse(0, 3, 2);

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  numbers.forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (number % 3 === 0) {
      newArray.push('fizz');
    } else if (number % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  });
  return newArray;
}

fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(string) {
  let finalString = string
                    .replace(/a/g, 1)
                    .replace(/e/g, 2)
                    .replace(/i/g, 3)
                    .replace(/o/g, 4)
                    .replace(/u/g, 5);
  return finalString;
}

encode('hi there!');

function decode(string) {
  let finalString = string
                    .replace(/1/g, 'a')
                    .replace(/2/g, 'e')
                    .replace(/3/g, 'i')
                    .replace(/4/g, 'o')
                    .replace(/5/g, 'u');
  return finalString;
}

decode('h3 th2r2!');

// Desafio 10
function techList(arrayTechs, name) {
  this.arrayTechs = arrayTechs;
  this.name = name;
  let techs = [];
  arrayTechs.sort();
  if (arrayTechs.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < arrayTechs.length; i += 1) {
    techs[i] = {
      tech: arrayTechs[i],
      name,
    };
  }
  return techs;
}

techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas');

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  array.forEach((element) => {
    let count = 0;
    array.forEach((otherElement) => {
      if (otherElement === element) {
        count += 1;
      }
    });
    if (element < 0 || element > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    return count;
  });
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;

  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    result = true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    result = true;
  }
  return result;
}

triangleCheck(10, 14, 8);

// Desafio 13
function hydrate(string) {
  let numbers = string.match(/\d+/g);
  let totalNumbers = 0;
  let integer = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    integer = parseInt(numbers[index], 10);
    totalNumbers += integer;
  }
  if (totalNumbers === 1) {
    return `${totalNumbers} copo de água`;
  }
  return `${totalNumbers} copos de água`;
}

hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');

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
