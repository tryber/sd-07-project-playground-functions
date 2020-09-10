// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado;
  if (valor1 === true && valor2 === true) {
    resultado = true;
    return resultado;
  } else {
    resultado = false;
    return resultado;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea;
  triangleArea = (base * height) / 2;
  return triangleArea;  
}

// Desafio 3
function splitSentence(frase) {
  let fraseSeparada = frase.split(" ");
  return fraseSeparada;
}

// Desafio 4
function concatName(nome) {
  let nomeInvertido = [];
  nomeInvertido = nome[nome.length - 1];
  nomeInvertido += ", " + nome[0];
  return nomeInvertido;
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = 3;
  let tie = 1;
  let result = 0;
  for (let i = 1; i <= wins; i += 1) {
    result += win;
  }
  for (let i = 1; i <= ties; i += 1) {
    result += tie;
  }
  return result;
}

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let repete = 0;
  for (let i in numbers) {
    if (numbers[i] > maior) {
      maior = numbers[i];
    }
  }
  for (let i in numbers) {
    if (numbers[i] === maior) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance == cat2Distance) {
    return "os gatos trombam e o rato foge";
  } else if (cat1Distance < cat2Distance) {
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let texts = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if ((numbers[i] % 3) === 0 && (numbers[i] % 5) !== 0) {
      texts.push("fizz");
    } else if ((numbers[i] % 3) !== 0 && (numbers[i] % 5) === 0) {
      texts.push("buzz");
    } else if ((numbers[i] % 3) === 0 && (numbers[i] % 5) === 0) {
      texts.push("fizzBuzz");
    } else {
      texts.push("bug!");
    }
  }
  return texts;
}

// Desafio 9
function encode(text) {
  let enc = '';
  enc = text.replace(/a/g, "1");
  enc = enc.replace(/e/g, "2");
  enc = enc.replace(/i/g, "3");
  enc = enc.replace(/o/g, "4");
  enc = enc.replace(/u/g, "5");
  
  return enc;
}

function decode(text) {
  let enc = '';
  enc = text.replace(/1/g, "a");
  enc = enc.replace(/2/g, "e");
  enc = enc.replace(/3/g, "i");
  enc = enc.replace(/4/g, "o");
  enc = enc.replace(/5/g, "u");
  
  return enc;
}

// Desafio 10
function techList(techs, name) {
  let finalListTechs = [];
  techs.sort();
  for (let i = 0; i < techs.length; i += 1) {
    let listTechs = {
      tech: techs[i],
      name: name
    };
    finalListTechs.push(listTechs);
  }
  if (techs.length < 1) {
    return "Vazio!";
  } else {
    return finalListTechs;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return "Array com tamanho incorreto.";
  } else {
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] < 0 || numbers[i] > 9) {
        return "não é possível gerar um número de telefone com esses valores";
      }
      let count = 0;
      for (let j = 0; j < numbers.length; j += 1) {
        if (numbers[i] === numbers[j]) {
          count += 1;
        }
      }
      if (count >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  let auxNumbers = numbers.toString().replace(/\,/g, '');
  // (12) 34567-8901
  return "(" + auxNumbers.substring(0,2) + ")" + " " + auxNumbers.substring(2, 7) + "-" + auxNumbers.substring(7, 11);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumTriangleAB = lineA + lineB;
  let sumTriangleAC = lineA + lineC;
  let sumTriangleBC = lineB + lineC;

  let diffTriangleAB = Math.abs(lineA - lineB);
  let diffTriangleAC = Math.abs(lineA - lineC);
  let diffTriangleBC = Math.abs(lineB - lineC);

  if ((lineA < sumTriangleBC && lineA > diffTriangleBC) && 
    (lineB < sumTriangleAC && lineB > diffTriangleAC) && 
    (lineC < sumTriangleAB && lineC > diffTriangleAB)) {
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
