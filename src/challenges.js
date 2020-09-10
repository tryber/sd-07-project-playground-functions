// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, heigth) {
  let formula = (base * heigth) / 2;
  return formula;
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
}

// Desafio 4
function concatName(array) {
  let lastItem;
  let firstItem;
  firstItem = array[0];
  lastItem = array[array.length - 1];
  array = lastItem + ", " + firstItem;
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontV = wins * 3;
  let pontE = ties;
  let vitorias = pontV + pontE;
  return vitorias;
}

// Desafio 6
function highestCount(arry) {
  let maiorN = 0;
  let contador = 0;
  for (let key in arry) {
    if (arry[key] > maiorN) {
      maiorN = arry[key];
    }
  }
  for (key in arry) {
    if (arry[key] == maiorN) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let contadorCat1 = cat1 - mouse;
  let contadorCat2 = cat2 - mouse;
  if (contadorCat1 < 0) {
    contadorCat1 = contadorCat1 * -1;
  }
  if (contadorCat2 < 0) {
    contadorCat2 = contadorCat2 * -1;
  }
  if (contadorCat1 < contadorCat2 && contadorCat1 > 0 && contadorCat2 > 0) {
    return "cat1";
  } else if (
    contadorCat1 > contadorCat2 &&
    contadorCat1 > 0 &&
    contadorCat2 > 0
  ) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arry) {
  let arryDeString = [];
  let element = "";
  for (let index = 0; index < arry.length; index++) {
    if (arry[index] % 3 == 0) {
      element = "fizz";
    }
    if (arry[index] % 5 == 0) {
      element = "buzz";
    }
    if (arry[index] % 5 == 0 && arry[index] % 3 == 0) {
      element = "fizzBuzz";
    }
    if (arry[index] % 5 !== 0 && arry[index] % 3 !== 0) {
      element = "bug!";
    }

    arryDeString.push(element);
    element = " ";
  }
  return arryDeString;
}

// Desafio 9
function encode(params) {
  let element = "";
  for (let key in params) {
    switch (params[key]) {
      case "a":
        element = element + 1;
        break;
      case "e":
        element = element + 2;
        break;
      case "i":
        element = element + 3;
        break;
      case "o":
        element = element + 4;
        break;
      case "u":
        element = element + 5;
        break;
      default:
        element = element + params[key];
        break;
    }
  }

  return element;
}

function decode(params) {
  let element2 = "";
  for (let key in params) {
    switch (params[key]) {
      case "1":
        element2 = element2 + "a";
        break;
      case "2":
        element2 = element2 + "e";
        break;
      case "3":
        element2 = element2 + "i";
        break;
      case "4":
        element2 = element2 + "o";
        break;
      case "5":
        element2 = element2 + "u";
        break;
      default:
        element2 = element2 + params[key];
        break;
    }
  }
  return element2;
}
// Desafio 10
function techList(tech, name) {
  let arrayObjeto = [];
  tech.sort();
  for (key in tech) {
    arrayObjeto.push({ tech: tech[key], name: name });
  }
  if (tech.length == 0) {
    return "Vazio!";
  }
  return arrayObjeto;
}

// Desafio 11
function generatePhoneNumber(numero) {
  let arrayDeNumero = [];
  let cont;
  if (numero.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < numero.length; i += 1) {
    if (numero[i] < 0 || numero[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let j = 0; j < numero.length; j += 1) {
      if (numero[i] === numero[j]) {
        cont += 1;
      }
    }
    if (cont > 2) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    cont = 0;
  }
  numero.splice(0, 0, "(");
  numero.splice(3, 0, ") ");
  numero.splice(9, 0, "-");
  for (let index = 0; index < numero.length; index += 1) {
    arrayDeNumero += numero[index];
  }
  return arrayDeNumero;
}
// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
  // seu código aqui
  if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
    return true;
  }

  return false;
}
// Desafio 13
function hydrate(bebida) {
  let num = bebida.match(/\d+/g).map(Number);
  let trybeConversor = 0;
  let bebidas;
  for (let index in num) {
    if (
      parseInt(num[index], bebidas) < 1 ||
      parseInt(num[index], bebidas) > 9
    ) {
      return "número inválido!";
    }
    trybeConversor += parseInt(num[index], bebidas);
  }
  if (trybeConversor === 1) {
    trybeConversor += " copo de água";
    return trybeConversor;
  }
  trybeConversor += " copos de água";
  return trybeConversor;
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
