// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(recebeString) {
  // seu código aqui...
  let posicaoDoEspaco = 0;
  let palavraCortada;
  let arrayParaImprimir = [];

  for (let i = 0; i < recebeString.length; i += 1) {
    if (recebeString[0] === " ") {
      i += 1;
    } else if (recebeString[recebeString.length - 1] === " ") {
      recebeString = recebeString.slice(0, recebeString.length - 1);
    }
    if (recebeString[i] === " ") {
      palavraCortada = recebeString.slice(posicaoDoEspaco, i);
      arrayParaImprimir.push(palavraCortada);
      posicaoDoEspaco = i;
    }
  }
  palavraCortada = recebeString.slice(posicaoDoEspaco, recebeString.length);
  arrayParaImprimir.push(palavraCortada);

  return arrayParaImprimir;
}

// Desafio 4
function concatName(arrayDeString) {
  // seu código aqui
  return arrayDeString[arrayDeString.length - 1] + ", " + arrayDeString[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + 1 * ties;
  // seu código aqui
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  // seu código aqui
  let maiorNumero = arrayDeNumeros[0];
  let contadorDeMaiorNumero = 0;
  //econtrando o maior valor
  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] > maiorNumero) {
      maiorNumero = arrayDeNumeros[i];
    }
  }

  for (let i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] === maiorNumero) {
      contadorDeMaiorNumero += 1;
    }
  }
  return contadorDeMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (
    Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) &&
    Math.abs(cat1 - mouse) !== Math.abs(cat2 - mouse)
  ) {
    return "cat2";
  } else if (
    Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse) &&
    Math.abs(cat1 - mouse) !== Math.abs(cat2 - mouse)
  ) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayFizzBuzz) {
  // seu código aqui
  let mensagemDeRetorno = [];
  for (let i = 0; i < arrayFizzBuzz.length; i += 1) {
    let mensagem = "";
    if (arrayFizzBuzz[i] % 3 === 0 && arrayFizzBuzz[i] % 5 === 0) {
      mensagem = "fizzBuzz";
    } else if (arrayFizzBuzz[i] % 3 === 0) {
      mensagem = "fizz";
    } else if (arrayFizzBuzz[i] % 5 === 0) {
      mensagem = "buzz";
    } else if (arrayFizzBuzz[i] % 3 !== 0 && arrayFizzBuzz[i] % 5 !== 0) {
      mensagem = "bug!";
    }
    mensagemDeRetorno.push(mensagem);
  }
  return mensagemDeRetorno;
}

// Desafio 9
function encode(stringDecodifique) {
  // seu código aqui
  let novaString = stringDecodifique;
  //let arrayDeLetras = stringDecodifique.split("");
  for (i = 0; i < stringDecodifique.length; i += 1) {
    if (stringDecodifique[i] === "a") {
      novaString = novaString.replace("a", "1");
    } else if (stringDecodifique[i] === "e") {
      novaString = novaString.replace("e", "2");
    } else if (stringDecodifique[i] === "i") {
      novaString = novaString.replace("i", "3");
    } else if (stringDecodifique[i] === "o") {
      novaString = novaString.replace("o", "4");
    } else if (stringDecodifique[i] === "u") {
      novaString = novaString.replace("u", "5");
    }
  }
  console.log(novaString);
  return novaString;
}

function decode(stringEncodifique) {
  // seu código aqui
  let novaString = stringEncodifique;
  //let arrayDeLetras = stringDecodifique.split("");
  for (i = 0; i < stringEncodifique.length; i += 1) {
    if (stringEncodifique[i] === "1") {
      novaString = novaString.replace("1", "a");
    } else if (stringEncodifique[i] === "2") {
      novaString = novaString.replace("2", "e");
    } else if (stringEncodifique[i] === "3") {
      novaString = novaString.replace("3", "i");
    } else if (stringEncodifique[i] === "4") {
      novaString = novaString.replace("4", "o");
    } else if (stringEncodifique[i] === "5") {
      novaString = novaString.replace("5", "u");
    }
  }
  console.log(novaString);
  return novaString;
}

// Desafio 10
function techList(nomesDeTecnologia, name) {
  // seu código aqui
  nomesDeTecnologia = nomesDeTecnologia.sort();
  let verificaVazio = "";


    if (nomesDeTecnologia.length === 0) {
       return "Vazio!";
    } else {

    listaDeNomes = {
    tech: [],
    name: "",
  };

  listaDeNomes["tech"] = nomesDeTecnologia;
  listaDeNomes["name"] = name;

  console.log(listaDeNomes);
}
}

// Desafio 11
function generatePhoneNumber(conjuntoDeNumeros) {
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
