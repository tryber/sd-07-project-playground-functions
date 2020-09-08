// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2
  return area;
}

// Desafio 3
function splitSentence(exemplo) {
  return exemplo.split(' '); // take a look inside the apostrophe, there's a space inside
}

// Desafio 4
function concatName(nombres) {
  return `${nombres[nombres.length - 1]}, ${nombres[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(vetor) {
  let repeticao = 0;
  for (let i in vetor) {
    if (vetor[i] === Math.max.apply(Math, vetor)) {
      repeticao += 1;
    }
  }
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } else if (Math.abs(mouse - cat2) > Math.abs(mouse - cat1)) {
    return 'cat1'
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayString = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      arrayString.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      arrayString.push('buzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      arrayString.push('fizzBuzz');
    } else {
      arrayString.push('bug!')
    }
  }
  return arrayString;
}


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(tecs, name) {
  if (tecs.length === 0) {
    return 'Vazio!';
  }
  let arrayOfObjects = [];
  tecs.sort();
  for (let i of tecs) {
    let objects = {
      tech: i,
      name: `${name}`,
    }
    arrayOfObjects.push(objects);
  }
  return arrayOfObjects
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condition1, condition2;
  if (lineA < lineB + lineC && lineB < lineC + lineA && lineC < lineB + lineA) {
    condition1 = true;
  }
  if (lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs (lineA - lineB)) {
    condition2 = true;
  }
  if (condition1 === true && condition2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
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
