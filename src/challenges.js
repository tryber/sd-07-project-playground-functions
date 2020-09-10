// Desafio 1
function compareTrue(valueA, valueB) {
  return valueA && valueB
}

// Desafio 2
function calcArea(base, heigh) {
  let area = (base * heigh) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let split = [];
  let text = [];
  for (let i = 0; i <= sentence.length; i += 1) {
    if (sentence[i] === ' ' || i === sentence.length) {
      split.push(text);
      text = [];
    } else {
      text += sentence[i];
    }
  }
  return split;
}

// Desafio 4
function concatName(name) {
  let invert = [name[name.length - 1], name[0]];
  let concatenate = `${invert[0]}, ${invert[1]}`;
  return concatenate;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  let points = (wins * winPoints) + (ties * tiePoints);
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let bigger = numbers[0];
  let repeat = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > bigger) {
      bigger = numbers[i];
    }
  }

  for (let j = 0; j < numbers.length; j += 1) {
    if (bigger === numbers[j]) {
      repeat += 1;
    }
  }

  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  let text = [];
  if (dist1 < dist2) {
    text = 'cat1';
  } else if (dist1 > dist2) {
    text = 'cat2';
  } else {
    text = 'os gatos trombam e o rato foge';
  }
  return text;
}

// Desafio 8
function fizzBuzz(numeros) {
  let answer = [];
  for (let i in numeros) {
    if ((numeros[i] % 3) === 0 && (numeros[i] % 5) === 0) {
      answer[i] = 'fizzBuzz';
    } else if ((numeros[i] % 3) === 0) {
      answer[i] = 'fizz';
    } else if ((numeros[i] % 5) === 0) {
      answer[i] = 'buzz';
    } else {
      answer[i] = 'bug!';
    }
  }
  return answer;
}

// Desafio 9
function encode(text) {
  let encoded = [];
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === 'a') {
      encoded += '1';
    } else if (text[i] === 'e') {
      encoded += '2';
    } else if (text[i] === 'i') {
      encoded += '3';
    } else if (text[i] === 'o') {
      encoded += '4';
    } else if (text[i] === 'u') {
      encoded += '5';
    } else {
      encoded += text[i];
    }
  }
  return encoded;
}

function decode(text) {
  let decoded = [];
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '1') {
      decoded += 'a';
    } else if (text[i] === '2') {
      decoded += 'e';
    } else if (text[i] === '3') {
      decoded += 'i';
    } else if (text[i] === '4') {
      decoded += 'o';
    } else if (text[i] === '5') {
      decoded += 'u';
    } else {
      decoded += text[i];
    }
  }
  return decoded;
}


// Desafio 10
function techList(namesTech, who) {
  namesTech = namesTech.sort();
  let whoWillLearn = [];
  if (namesTech.length !== 0) {
    for (let i in namesTech) {
      whoWillLearn[i] = {
        tech: namesTech[i], name: who
      }
    }
  } else {
    whoWillLearn = 'Vazio!';
  }
  return whoWillLearn;
}


// Desafio 11
function generatePhoneNumber(telNumber) {
  let tamanho = telNumber.length;
  let repeat = 0;
  let telefone = [];

  if (tamanho !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < telNumber.length; i += 1) {
    if (telNumber[i] > 9 || telNumber[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let j = 0; j < telNumber.length; j += 1) {
    repeat = 0;
    for (let k = 0; k < telNumber.length; k += 1) {
      if (telNumber[j] === telNumber[k]) {
        repeat += 1;
      }
    }
    if (repeat > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let n = 0; n <telNumber.length; n += 1) {
    telefone += telNumber[n];
  }
  let tel = `(${telefone.slice(0, 2)}) ${telefone.slice(2, 7)}-${telefone.slice(7)}`;
  return tel;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  function compare(A, B, C) {
    let check = false;
    if (A + B > C && C > Math.abs(A - B)) {
      check = true;
    }
    return check;
  }

  let compa = compare(lineA, lineB, lineC);
  let compb = compare(lineB, lineC, lineA);
  let compc = compare(lineC, lineA, lineB);
  let finalCheck = false;
  if (compa === true && compb === true && compc) {
    finalCheck = true;
  }
  return finalCheck;
}

// Desafio 13
function hydrate(order) {
  let matches = [];
  let glassOfWater = 0;
  matches = order.match(/\d+/g);
  for (let i in matches) {
    glassOfWater += parseInt(matches[i], 8);
  }
  if (glassOfWater > 1) {
    return `${glassOfWater} copos de água`;
  } else if (glassOfWater === 1) {
    return `${glassOfWater} copo de água`;
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
