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
  let calculate = 0;
  calculate = (base * height) / 2;
  return calculate;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let output = '';
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      output += `${array[array.length - 1]}, `;
    } else if (i === array.length - 1) {
      output += array[0];
    }
  }
  return output;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorValor = 0;
  let cont = 0;
  for (let i = 0; i < array.length; i++) {
    if (maiorValor < array[i]) {
      maiorValor = array[i];
    }
  }
  for (let i = 0; i < array.length; i++) {
    if (maiorValor === array[i]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCatUm = Math.abs(mouse - cat1);
  let distanciaCatDois = Math.abs(mouse - cat2);

  if (distanciaCatUm < distanciaCatDois) {
    return "cat1";
  } else if (distanciaCatUm > distanciaCatDois) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultado.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
      resultado.push("fizz");
    } else if (array[i] % 5 === 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
}

// Desafio 9
function encode(frase) {
  const list = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let arrayFrase = frase.split("");
  for (let key in arrayFrase) {
    for (let keylist in list) {
      if (arrayFrase[key] == keylist) {
        arrayFrase[key] = list[keylist];
      }
    }
  }
  return arrayFrase.join("");
}
function decode(frase) {
  let arrayFrase = frase.split("");
  for (let key in arrayFrase) {
    switch (arrayFrase[key]) {
      case "1":
        arrayFrase[key] = "a";
        break;
      case "2":
        arrayFrase[key] = "e";
        break;
      case "3":
        arrayFrase[key] = "i";
        break;
      case "4":
        arrayFrase[key] = "o";
        break;
      case "5":
        arrayFrase[key] = "u";
        break;

      default:
        break;
    }
  }
  return arrayFrase.join("");
}

// Desafio 10

function techList(tecnology, name) {
  let objeto = [];
  if (tecnology.length == 0) {
    return "Vazio!";
  }
  tecnology.sort();
  for (let i = 0; i < tecnology.length; i += 1) {
    objeto[i] = {
      tech: tecnology[i],
      name: name,
    };
  }
  objeto.sort();
  return objeto;
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
};
