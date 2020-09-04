// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
      return true;
  } else {
      return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  // Define maior número:
  let maiorNumero = 0;
  let numeroDeVezes = 0;
  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] >= maiorNumero) {
      maiorNumero = array[contador];
    };
  // Conta quantas vezes ele aparece:
  for (let contador = 0; contador < array.length; contador += 1) {
    if (array[contador] == maiorNumero) {
      numeroDeVezes += 1;
    }
  }
  return numeroDeVezes;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1ToMouseDistance;
  let cat2ToMouseDistance;
  // Calcula distância do cat1
  if (cat1 >= mouse) {
    cat1ToMouseDistance = cat1 - mouse;
  } else {
    cat1ToMouseDistance = mouse - cat1;
  }
  // Calcula distância do cat2
  if (cat2 >= mouse) {
    cat2ToMouseDistance = cat2 - mouse;
  } else {
    cat2ToMouseDistance = mouse - cat2;
  }
  // Calcula menor distância
  if (cat1ToMouseDistance < cat2ToMouseDistance) {
    return "cat1";
  } else if (cat2ToMouseDistance < cat1ToMouseDistance) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let arrayFizzBuzz = [];
  for (let contador = 0; contador < arrayDeNumeros.length; contador += 1) {
    if ((arrayDeNumeros[contador] % 3 == 0) && (arrayDeNumeros[contador] % 5 != 0)) {
      arrayFizzBuzz.push("fizz");
    } else if ((arrayDeNumeros[contador] % 3 != 0) && (arrayDeNumeros[contador] % 5 == 0)) { 
      arrayFizzBuzz.push("buzz");
    } else if ((arrayDeNumeros[contador] % 3 == 0) && (arrayDeNumeros[contador] % 5 == 0)) {
      arrayFizzBuzz.push("fizzBuzz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  string = string.replace(/a/g, "1");
  string = string.replace(/e/g, "2");
  string = string.replace(/i/g, "3");
  string = string.replace(/o/g, "4");
  string = string.replace(/u/g, "5");
  return string;
}
function decode(string) {
  string = string.replace(/1/g, "a");
  string = string.replace(/2/g, "e");
  string = string.replace(/3/g, "i");
  string = string.replace(/4/g, "o");
  string = string.replace(/5/g, "u");
  return string;
}

// Desafio 10
function techList(arrayTech, name) {
  let arrayTechSorted = arrayTech.sort();
  let novoArray = [];
  if (arrayTech.length == 0) {
    return "Vazio!"
  } else {
    for (let i in arrayTechSorted) {
      novoArray.push({
        tech: arrayTechSorted[i],
        name: name
      })
    }
    return novoArray;
  }
}

// Desafio 11
function generatePhoneNumber(arrayDeNumeros) {
  if (validaNumero(arrayDeNumeros) != "Número válido") {
    console.log(validaNumero(arrayDeNumeros));
    return validaNumero(arrayDeNumeros);
  } else {
    let numeroConvertido = "(" + arrayDeNumeros[0] + arrayDeNumeros[1] + ")" + " " + arrayDeNumeros[2] + arrayDeNumeros[3] + arrayDeNumeros[4] + arrayDeNumeros[5] + arrayDeNumeros[6] + "-" + arrayDeNumeros[7] + arrayDeNumeros[8] + arrayDeNumeros[9] + arrayDeNumeros[10];
    return numeroConvertido;
  }
}

// Função auxiliar para o Desafio 11
function validaNumero(arrayDeNumeros) {
  // Valida tamanho do array
  if (arrayDeNumeros.length != 11) {
    //console.log("Array com tamanho incorreto.");
    return "Array com tamanho incorreto.";
  }
  // Valida se os números são de 0 a 9
  for (let i in arrayDeNumeros) {
    if (arrayDeNumeros[i] < 0 || arrayDeNumeros[i] > 9) {
      //console.log("Não é possivel gerar um número de telefone com esses valores");
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  // Valida se os números não se repetem mais de 3 vezes
  for (let i in arrayDeNumeros) {
    let repeticoes = 0;
    for (let j in arrayDeNumeros) {
      if (arrayDeNumeros[i] == arrayDeNumeros[j]) {
        repeticoes += 1;
      }
    }
    if (repeticoes >= 3) {
      //console.log("Número repetido 3 ou mais vezes");
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
//console.log("Número válido");
return "Número válido"
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lados = [lineA, lineB, lineC];
  lados.sort((a, b) => b - a); // encontrei esta forma de sort no StackOverflow: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
  if (lados[0] <= (lados[1] + lados[2])) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(listaDeBebidas) {
  let numeros = listaDeBebidas.match(/\d+/g).map(Number); //Fontes: https://stackoverflow.com/questions/34609571/extract-numbers-from-string-and-store-them-in-array-javascript e https://stackoverflow.com/questions/35766769/convert-string-array-to-integer-array
  let soma = 0;
  for (let i in numeros) {
    soma = soma + numeros[i];
  }
    if (soma == 1) {
      return "1 copo de água";
    } else {
    return soma + " copos de água";
  }
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
