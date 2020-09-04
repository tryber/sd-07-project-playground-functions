function compareTrue(vl1, vl2) {
  return (vl1 && vl2);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(arr) {
  let str = [];
  str.push(arr.pop());
  str.push(arr.shift());
  return (str.join(', '));
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arr) {
  arr.sort();
  let count = 0;
  let maior = arr[arr.length - 1];
  for (let pos of arr) {
    if (pos === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) && (cat1 !== cat2)) {
    return 'cat2';
  } else if ((Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) && (cat1 !== cat2)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let rtn = [];
  for (let pos of arr) {
    if (pos % 15 === 0) rtn.push('fizzBuzz');
    else if (pos % 3 === 0) rtn.push('fizz');
    else if (pos % 5 === 0) rtn.push('buzz');
    else rtn.push('bug!');
  }
  return rtn;
}

// Desafio 9
function encode(str) {
  let trn = str.split('');
  for (let pos = 0; pos < trn.length; pos += 1) {
    let op = trn[pos];
    switch (op) {
      case 'a' :
        trn[pos] = '1';
        break;
      case 'e' :
        trn[pos] = '2';
        break;
      case 'i' :
        trn[pos] = '3';
        break;
      case 'o' :
        trn[pos] = '4';
        break;
      case 'u' :
        trn[pos] = '5';
        break;
    }
  }
  return (trn.join(''));
}

function decode(str) {
  let trn = str.split('');
  let i = 0;

  do {
    switch (trn[i]) {
      case '1' :
        trn[i] = 'a';
        break;
      case '2' :
        trn[i] = 'e';
        break;
      case '3' :
        trn[i] = 'i';
        break;
      case '4' :
        trn[i] = 'o';
        break;
      case '5' :
        trn[i] = 'u';
        break;
    }
    i += 1;
  } while (i < trn.length);
  return (trn.join(''));
}


// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
