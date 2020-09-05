// Desafio 1
function compareTrue(v1, v2) {
  let result;
  if (v1 == true && v2 == true) {
    result = true;
  } else {
    result = false
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(texto) {
  let result = texto.split(" ");
  return result;
}

// Desafio 4
function concatName(names) {
  let ultimo = names[names.length-1];
  let primeiro = names[0];
  let result = `${ultimo}, ${primeiro}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victoryPoints = wins * 3;
  let tiesPoints = ties;
  let total = victoryPoints + tiesPoints;

  return total;
}

// Desafio 6
function highestCount(numeros) {
  let contador = 0;
  function ordemCrescente(a, b) {
    return a - b;
  }
  arrayTeste = numeros.sort(ordemCrescente)
  let maiorNumero = arrayTeste[arrayTeste.length-1]
  arrayTeste.forEach(element => {
    if (maiorNumero == element) {
      contador += 1
    }
  });

  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  let frase;
  if (cat1 <= 0 || cat2 <= 0) {
    frase = "os gatos trombam e o rato foge";
  } else if (distanceCat1 < distanceCat2) {
    frase = "cat1";
  } else if (distanceCat1 > distanceCat2) {
    frase = "cat2";
  } else {
    frase = "os gatos trombam e o rato foge";
  }
  return frase;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayTeste = array;
  let result = [];

  for (i=0; i < arrayTeste.length; i += 1) {
    if (arrayTeste[i]%5 == 0 && arrayTeste[i]%3 == 0) {
      result[i] = "fizzBuzz"
    } else if (arrayTeste[i]%3 == 0 && !(arrayTeste[i]%5 == 0)) {
      result[i]= "fizz"
    } else if (arrayTeste[i]%5 == 0 && !(arrayTeste[i]%3 == 0)) {
      result[i]= "buzz"
    } else if (!(arrayTeste[i]%5 == 0) && !(arrayTeste[i]%3 == 0)) {
      result[i]= "bug!"
    }
  }
  return result;
}

// Desafio 9
function encode(frase) {
  let novaFrase = "";
  for (i=0; i < frase.length; i += 1) {
    switch (frase[i]) {
      case "a":
        novaFrase += 1
        break;
        case "e":
          novaFrase += 2
          break;
          case "i":
            novaFrase += 3
            break;
            case "o":
              novaFrase += 4
              break;
              case "u":
                novaFrase += 5
                break;
      default:
        novaFrase += frase[i]
        break;
    }
  }
  return novaFrase;
}

function decode(frase) {
  let novaFrase = "";
  for (i=0; i < frase.length; i += 1) {
    switch (frase[i]) {
      case "1":
        novaFrase += "a"
        break;
        case "2":
          novaFrase += "e"
          break;
          case "3":
            novaFrase += "i"
            break;
            case "4":
              novaFrase += "o"
              break;
              case "5":
                novaFrase += "u"
                break;
      default:
        novaFrase += frase[i]
        break;
    }
  }
  return novaFrase;
}

// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length == 0) {
    return "Vazio!"
  } else {
    let nome = name;
    let objectResult = [];
    for (i = 0; i < arrayTech.length; i += 1) {
      let parameter = {
        tech: arrayTech[i],
        name: nome
      };
      objectResult = objectResult.concat(parameter)
    }
    let result = objectResult.sort(function(a, b) {
      return (a.tech > b.tech)
    })
    return result
  }
}

console.log(techList([], "Lucas"))

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
