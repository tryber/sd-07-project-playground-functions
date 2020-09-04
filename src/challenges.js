// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(a) {
  return `${a[a.length - 1]}, ${a[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  let h = 0;
  for (let i in arr) {
    if (arr[i] > h) {
      h = arr[i];
    }
  }
  let out = 0;
  for (let j in arr) {
    if (arr[j] === h) {
      out += 1;
    }
  }
  return out;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs((cat1 -= mouse));
  cat2 = Math.abs((cat2 -= mouse));
  if (cat2 < cat1) {
    return 'cat2';
  } else if (cat1 < cat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arr) {
  let out = [];
  for (let i in arr) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      out.push('fizzBuzz');
    } else if (arr[i] % 3 === 0) {
      out.push('fizz');
    } else if (arr[i] % 5 === 0) {
      out.push('buzz');
    } else {
      out.push('bug!');
    }
  }
  return out;
}

// Desafio 9
function encode(str) {
  let a = str.replace(/a/g, '1');
  a = a.replace(/e/g, '2');
  a = a.replace(/i/g, '3');
  a = a.replace(/o/g, '4');
  a = a.replace(/u/g, '5');
  return a;
}
function decode(str) {
  let a = str.replace(/1/g, 'a');
  a = a.replace(/2/g, 'e');
  a = a.replace(/3/g, 'i');
  a = a.replace(/4/g, 'o');
  a = a.replace(/5/g, 'u');
  return a;
}

// Desafio 10
function techList(arr, name) {
  let out = [];
  arr.sort();
  if (arr.length <= 0) {
    return 'Vazio!';
  }
  for (let i in arr) {
    out.push({
      tech: arr[i],
      name: name,
    });
  }
  return out;
}

// Desafio bonus 1
function generatePhoneNumber(arr) {
  let c = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i in arr) {
    if (arr[i] < 0 || arr[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    c[arr[i]] += 1;
  }
  for (let i in c) {
    if (c[i] > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
}

// Desafio bonus 2
function triangleCheck(lineA, lineB, lineC) {
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio bonus 3
function hydrate(str) {
  let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let out = 0;
  for (let i in str) {
    for (let j in num) {
      if (str[i] === num[j]) {
        out += parseInt(num[j], 10);
      }
    }
  }
  if (out === 1) {
    return '1 copo de água';
  }
  return `${out} copos de água`;
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
