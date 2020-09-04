// Desafio 1
function compareTrue(var1, var2) {
  if (var1 && var2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arrayn) {
  let maior = 0;
  let counter = 0;
  for (let i = 0; i < arrayn.length; i += 1) {
    if (arrayn[i] > maior) {
      maior = arrayn[i];
    }
  }
  for (let u = 0; u < arrayn.length; u += 1) {
    if (arrayn[u] === maior) {
      counter += 1;
    }
  }
  return counter;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  }
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  let fbarray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      fbarray.push("fizzBuzz");
    } else {
      if (array[i] % 3 === 0) {
        fbarray.push("fizz");
      } else {
        if (array[i] % 5 === 0) {
          fbarray.push("buzz");
        } else {
          fbarray.push("bug!");
        }
      }
    }
  }
  return fbarray;
}

// Desafio 9
function encode(frase) {
  const list = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let arrayfrase = frase.split("");
  for (const key in arrayfrase) {
    for (const keylist in list) {
      if (arrayfrase[key] == keylist) {
        arrayfrase[key] = list[keylist];
      }
    }
  }
  return arrayfrase.join("");
}

function decode(frase) {
  let arrayfrase = frase.split("");
  for (const key in arrayfrase) {
    switch (arrayfrase[key]) {
      case "1":
        arrayfrase[key] = "a";
        break;
      case "2":
        arrayfrase[key] = "e";
        break;
      case "3":
        arrayfrase[key] = "i";
        break;
      case "4":
        arrayfrase[key] = "o";
        break;
      case "5":
        arrayfrase[key] = "u";
        break;

      default:
        break;
    }
  }
  return arrayfrase.join("");
}

// Desafio 10
function techList(arrayTech, name) {
  arrayTech = arrayTech.sort();
  let resp = [];
  for (const key in arrayTech) {
    resp.push({ tech: arrayTech[key], name });
  }
  return resp.length == 0 ? "Vazio!" : resp;
}

function rep(tester) {
  const repetition = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let aux = 0; aux < tester.length; aux++) {
    switch (tester[aux]) {
      case 1:
        repetition[0] += 1;
        break;
      case 2:
        repetition[1] += 1;
        break;
      case 3:
        repetition[2] += 1;
        break;
      case 4:
        repetition[3] += 1;
        break;
      case 5:
        repetition[4] += 1;
        break;
      case 6:
        repetition[5] += 1;
        break;
      case 7:
        repetition[6] += 1;
        break;
      case 8:
        repetition[7] += 1;
        break;
      case 9:
        repetition[8] += 1;
        break;
      case 0:
        repetition[9] += 1;
        break;
      default:
        break;
    }
  }
  for (const key in repetition) {
    if (repetition[key] >= 3) {
      return false;
    }
  }
  return true;
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  if (arrayNumber.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (const key in arrayNumber) {
    if (arrayNumber[key] < 0 || arrayNumber[key] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  if (rep(arrayNumber) === false) {
    return "não é possível gerar um número de telefone com esses valores";
  }

  let formatedNumber = [];
  formatedNumber.push("(");
  formatedNumber.push(arrayNumber[0]);
  formatedNumber.push(arrayNumber[1]);
  formatedNumber.push(")");
  formatedNumber.push(" ");
  formatedNumber.push(arrayNumber[2]);
  formatedNumber.push(arrayNumber[3]);
  formatedNumber.push(arrayNumber[4]);
  formatedNumber.push(arrayNumber[5]);
  formatedNumber.push(arrayNumber[6]);
  formatedNumber.push("-");
  formatedNumber.push(arrayNumber[7]);
  formatedNumber.push(arrayNumber[8]);
  formatedNumber.push(arrayNumber[9]);
  formatedNumber.push(arrayNumber[10]);
  return formatedNumber.join("");
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let a = lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
  //let b = lineB<(lineA+lineC) && lineA>Math.abs(lineA-lineC);
  let b = true;
  let c = lineC < lineA + lineB && lineA > Math.abs(lineA - lineB);
  return a && b && c;
}

// Desafio 13
function hydrate(strbear) {
  let sun = 0;
  strbear = strbear.replace(/\D/g, "");
  strbear = strbear.split("");
  for (let aux = 0; aux < strbear.length; aux += 1) {
    sun += parseInt(strbear[aux], 10);
  }
  return sun == 1 ? `${sun} copo de água` : `${sun} copos de água`;
}

hydrate("1 cachaça, 5 cervejas e 1 copo de vinho");

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
