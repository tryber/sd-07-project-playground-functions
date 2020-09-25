// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if(a === true && b === true) {
     return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  // seu código aqui
return (base * altura / 2)
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
return frase.split(" ");
}

// Desafio 4
function concatName(lista) {
  // seu código aqui

  return lista[lista.length - 1] + ", " + lista[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maiorNumero = 0;
  let cont = 0;
  
  for (i in numeros) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }
  for (i in numeros) {
    if (maiorNumero === numeros[i]) {
      cont += 1;
    }
  }
  console.log (maiorNumero);
  return cont;   
}
  

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  returnarray = []
  for (let i in array) {
      if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
      info = "bug!";
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      info = "fizzBuzz";
    } else if (array[i] % 5 === 0) {
      info =  "buzz";
    } else {
      info = "fizz"
    }
    returnarray.push(info)
  }
  return returnarray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let text = "";
  for (r in string) {
    switch (string[r]) {
      case "a":
      text += "1";
      break;
      case "e":
      text += "2";
      break;
      case "i":
      text += "3";
      break;
      case "o":
      text += "4";
      break;
      case "u":
      text += "5";
      break;
      default
      text += string[r];
    }
  }
}

console.log (encode ("hi there!"))

function decode() {
  // seu código aqui
 
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
