// Desafio 1
function compareTrue(firstValue, secondValue) {
  return firstValue && secondValue;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(setence) {
  return setence.split(' ');
}

// Desafio 4
function concatName(namesArray) {
  return `${namesArray[namesArray.length - 1]}, ${namesArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  for (let i = 0; i < wins; i += 1) {
    points += 3;
  }
  for (let i = 0; i < ties; i += 1) {
    points += 1;
  }
  return points;
}

// Desafio 6
function highestCount(arr) {
  let counts = {};
  let mostDuplicated = {
    value: arr[0],
    times: 1,
  }
  for (let key in arr) {
    if (counts[arr[key]]) {
      counts[arr[key]] += 1;
    } else {
      counts[arr[key]] = 1;
    }
  }
  for (let key in counts) {
    if (key > mostDuplicated.value) {
      mostDuplicated.value = key;
      mostDuplicated.times = counts[key];
    }
    if (Number(key) === mostDuplicated.value) {
      mostDuplicated.times = counts[key];
    }
  }
  return mostDuplicated.times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let firstCatDistance = Math.abs(mouse - cat1);
  let secondCatDistance = Math.abs(mouse - cat2);
  if (firstCatDistance < secondCatDistance) {
    return 'cat1';
  } else if (secondCatDistance < firstCatDistance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let newArray = [];
  for (let key in arr) {
    if (arr[key] % 3 === 0 && arr[key] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (arr[key] % 3 === 0) {
      newArray.push('fizz');
    } else if (arr[key] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(str) {
  let newStr = '';
  for (let key in str) {
    switch(str[key]) {
      case 'a':
        newStr += '1'
        break;
      case 'e':
        newStr += '2'
        break;
      case 'i':
        newStr += '3'
        break;
      case 'o':
        newStr += '4'
        break;
      case 'u':
        newStr += '5'
        break;
      default:
        newStr += str[key];
        break;
    }
  }
  return newStr;
}
function decode(str) {
  let newStr = '';
  for (let key in str) {
    switch(str[key]) {
      case '1':
        newStr += 'a'
        break;
      case '2':
        newStr += 'e'
        break;
      case '3':
        newStr += 'i'
        break;
      case '4':
        newStr += 'o'
        break;
      case '5':
        newStr += 'u'
        break;
      default:
        newStr += str[key];
        break;
    }
  }
  return newStr;
}

// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  const sortByName = (a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  }
  let sortedArray = arr.sort(sortByName);
  let newArray = [];
  for (let key in sortedArray) {
    let obj = {
      tech: sortedArray[key],
      name,
    }
    newArray.push(obj);
  }
  return newArray;
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
