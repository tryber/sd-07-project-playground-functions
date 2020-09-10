// Desafio 1
function compareTrue(valor1,valor2) {
  if (valor1 && valor2){
    return true;
  } 
    return false;
  }

// Desafio 2
function calcArea(base,height) {
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(names) {
  return `${ names [ names.length - 1]}, ${ names[0] }`;
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maiornumero = 0;
  let contador = 0;
  for (let n in numeros){
    if (maiornumero < numeros[n]) {
      maiornumero = numeros[n];
    }
  }
  for (let n in numeros){
    if (maiornumero === numeros[n]) {
      contador++;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs((cat1 -= mouse));
  cat2 = Math.abs((cat2 -= mouse));
  if (cat1 < cat2){
  return 'cat1';
  } else if (cat1 > cat2) {
    return 'cat2';
  }
   else return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(a) {
  let resultado = [];
  for (let pos in a){
    if (((a[pos] % 3) == 0) && ((a[pos] % 5) == 0)){
    resultado.push("fizzBuzz");
    } else if (((a[pos] % 3) == 0) && ((a[pos] % 5) != 0)){
      resultado.push("fizz");
    } else if (((a[pos] % 3) != 0) && ((a[pos] % 5) == 0)){
      resultado.push("buzz");
    } else resultado.push("bug!");
  }
  return resultado;
}

// Desafio 9
function encode(str) {
  let word = str.replace(/a/g, '1');
  word = word.replace(/e/g, '2');
  word = word.replace(/i/g, '3');
  word = word.replace(/o/g, '4');
  word = word.replace(/u/g, '5');
  return word;
}
function decode(str) {
  let word = str.replace(/1/g, 'a');
  word = word.replace(/2/g, 'e');
  word = word.replace(/3/g, 'i');
  word = word.replace(/4/g, 'o');
  word = word.replace(/5/g, 'u');
  return word;
}

// Desafio 10
function techList(arr, name) {
  let result = [];
  arr.sort();
  if (arr.length <= 0) {
    return 'Vazio!';
  }
  for (let cont in arr) {
    result.push({
      tech: arr[cont],
      name: name,
    });
  }
  return result;
}


// Desafio 11
function generatePhoneNumber(arr) {
  let fone = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i in arr) {
    if (arr[i] < 0 || arr[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    fone[arr[i]] += 1;
  }
  for (let i in fone) {
    if (fone[i] > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = 0;
  for (let count1 in str) {
    for (let jcount2 in num) {
      if (str[count1] === num[count2]) {
        result += parseInt(num[count2], 10);
      }
    }
  }
  if (result === 1) {
    return '1 copo de água';
  }
  return `${result} copos de água`;
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
