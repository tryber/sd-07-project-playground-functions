// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 === true && bol2 === true) {
    return true;
  } return false;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
// Desafio 4
function concatName(strings) {
  let array = [];
  array.push(strings[strings.length - 1]);
  array.push(strings[0]);
  let result = array.join(', ');
  return result;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let totalPoints = pointsWins + pointsTies;
  return totalPoints;
}
// Desafio 6
function highestCount(array) {
  let arrayResult = [];
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      arrayResult.push(array[0])
    } else if (i != 0 && array[i] === arrayResult[0]) {
      arrayResult.push(array[i]);
    } else if (i !== 0 && array[i] > arrayResult[0]) {
      arrayResult = [];
      arrayResult.push(array[i]);
    }
  }
  return arrayResult.length;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disCat1 = mouse - cat1;
  let disCat2 = mouse - cat2;
  let finalCat1 = Math.abs(disCat1);
  let finalCat2 = Math.abs(disCat2);
  if (finalCat1 > finalCat2) {
    return 'cat2'
  } else if (finalCat1 < finalCat2) {
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayResult = [];
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
      arrayResult.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      arrayResult.push('fizz');
    } else if (array[i] % 5 === 0) {
      arrayResult.push('buzz');
    } else {
      arrayResult.push('bug!');
    }
  }
  return arrayResult;
}
// Desafio 9
function encode(string) {
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 'a') {
      array[i] = 1;
    } else if (array[i] === 'e') {
      array[i] = 2;
    } else if (array[i] === 'i') {
      array[i] = 3;
    } else if (array[i] === 'o') {
      array[i] = 4;
    } else if (array[i] === 'u') {
      array[i] = 5;
    }
  }
  return array.join('');
}
function decode(string) {
  let array = string.split('');
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == 1) {
      array[i] = 'a';
    } else if (array[i] == 2) {
      array[i] = 'e';
    } else if (array[i] == 3) {
      array[i] = 'i';
    } else if (array[i] == 4) {
      array[i] = 'o';
    } else if (array[i] == 5) {
      array[i] = 'u';
    }
  }
  return array.join('');
}
// Desafio 10
function techList(array, name) {
  let result
  if (array[0] === undefined) {
    result = 'Vazio!';
  } else if (array !== []) {
    let result = [];
    for (let i = 0; i < array.length; i += 1) {
      let object = { tech: array[i], name: name };
      result.push(object);
      object = {};
    }
    result.sort((a, b) => (a.tech > b.tech) ? 1 : -1); // To sort the object by a property I searched in the following link: https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
    return result;
  }
  return result;
}
// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    let arrayResult = [];
    for (let i = 0; i < array.length; i += 1) {
      let value = array[i]
      let cont0 = 0;
      let cont1 = 0;
      let cont2 = 0;
      let cont3 = 0;
      let cont4 = 0;
      let cont5 = 0;
      let cont6 = 0;
      let cont7 = 0;
      let cont8 = 0;
      let cont9 = 0;

      for (let j = 0; j <= array.length; j += 1) {
        if (cont0 >= 3 || cont1 >= 3 || cont2 >= 3 || cont3 >= 3 || cont4 >= 3 || cont5 >= 3 || cont6 >= 3 || cont7 >= 3 || cont8 >= 3 || cont9 >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
        } else if (array[j] === 0) {
        cont0 = cont0 += 1;
        } else if (array[j] === 1) {
        cont1 = cont1 += 1;
        } else if (array[j] === 2) {
        cont2 = cont2 += 1;
        } else if (array[j] === 3) {
        cont3 = cont3 += 1;
        } else if (array[j] === 4) {
        cont4 = cont4 += 1;
        } else if (array[j] === 5) {
        cont5 = cont5 += 1;
        } else if (array[j] === 6) {
        cont6 = cont6 += 1;
        } else if (array[j] === 7) {
        cont7 = cont7 += 1;
        } else if (array[j] === 8) {
        cont8 = cont8 += 1;
        } else if (array[j] === 9) {
        cont9 = cont9 += 1;
        }
      }
        if (value < 0 || value > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
        } else if (i === 0) {
          arrayResult.push('(');
          arrayResult.push(array[i]);
        } else if (i === 1) {
          arrayResult.push(array[i]);
          arrayResult.push(')');
          arrayResult.push(' ');
        } else if (i === 6) {
          arrayResult.push(array[i]);
          arrayResult.push('-')
        } else if (i !== 0 && i !== 1 && i !== 6) {
          arrayResult.push(array[i]);
        }
    }
    let result = arrayResult.join('');
    return result;
  }
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineA) && (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB))) {
    return true;
  } else {
    return false;
  }
}
// Desafio 13
function hydrate(string) {
  let array = Array.from(string);
  let result = [];
  let number = 0;
  let final = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '1') {
      number = Number(array[i]);
      result.push(number);
      number = 0;
      } else if (array[i] === '2') {
        number = Number(array[i]);
        result.push(number);
        number = 0;
      } else if (array[i] === '3') {
        number = Number(array[i]);
        result.push(number);
        number = 0;
      } else if (array[i] === '4') {
        number = Number(array[i]);
        result.push(number);
        number = 0;
      } else if (array[i] === '5') {
        number = Number(array[i]);
        result.push(number);
        number = 0;
      } else if (array[i] === '6') {
        number = Number(array[i]);
        result.push(number);
        number = 0;
      } else if (array[i] === '7') {
        number = Number(array[i]);
        result.push(number);
        number = 0;
      } else if (array[i] === '8') {
        number = Number(array[i]);
        result.push(number);
        number = 0;
      } else if (array[i] === '9') {
        number = Number(array[i]);
        result.push(number);
        number = 0;
      }
  }
  for (let j = 0; j < result.length; j += 1) {
    final += result[j];
  }
  if (final === 1) {
    return `${final} copo de água`;
  } else {
    return `${final} copos de água`;
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
