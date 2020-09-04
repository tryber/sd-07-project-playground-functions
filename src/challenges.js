// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(palavra) {


  let resultado = palavra.split(" ")

  return resultado
}

// Desafio 4
function concatName(array) {
  let names = "";
  for (let i = 0; i < array.length; i += 1) {
    names = `${array[array.length - 1]}, ${array[0]}`
  }
  return names
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3
  return wins + ties

}


// Desafio 6
function highestCount(numeros) {
  let maiorNumero = 0;
  for (let i = 0; i < numeros.length; i += 1) {

    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];

    }
  }
  let repeti = 0;
  for (let j = 0; j < numeros.length; j += 1) {
    if (numeros[j] === maiorNumero) {
      repeti += 1;
    }


  }
  return repeti
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciacat1 = 0;
  let distanciacat2 = 0;
  if (cat1 > mouse) {
    distanciacat1 = cat1 - mouse;
  }
  if (cat2 > mouse) {
    distanciacat2 = cat2 - mouse;
  }
  if (mouse > cat1) {
    distanciacat1 = mouse - cat1;
  }
  if (mouse > cat2) {
    distanciacat2 = mouse - cat2;
  }

  if (distanciacat1 < distanciacat2) {
    return "cat1";
  } else if (distanciacat2 < distanciacat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }

}


// Desafio 8
function fizzBuzz(numeros) {
  let relatorio = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      relatorio.push("fizzBuzz");
    } else if (numeros[i] % 3 === 0) {
      relatorio.push("fizz");
    } else if (numeros[i] % 5 === 0) {
      relatorio.push("buzz");
    } else {
      relatorio.push("bug!");
    }
  }
  return relatorio
}


// Desafio 9
function encode(palavra) {
  let palavra1 = "";
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i] === "a") {
      palavra1 += "1"
    }
    else if (palavra[i] === "e") {
      palavra1 += "2"
    }
    else if (palavra[i] === "i") {
      palavra1 += "3"
    }
    else if (palavra[i] === "o") {
      palavra1 += "4"
    }
    else if (palavra[i] === "u") {
      palavra1 += "5"
    } else {
      palavra1 += palavra[i]
    }
  }
  return palavra1
}

function decode(palavra2) {
  let palavra1 = "";
  for (let j = 0; j < palavra2.length; j += 1) {
    if (palavra2[j] === "1") {
      palavra1 += "a"
    }
    else if (palavra2[j] === "2") {
      palavra1 += "e"
    }
    else if (palavra2[j] === "3") {
      palavra1 += "i"
    }
    else if (palavra2[j] === "4") {
      palavra1 += "o"
    }
    else if (palavra2[j] === "5") {
      palavra1 += "u"
    } else {
      palavra1 += palavra2[j]
    }
  }
  return palavra1

}

// Desafio 10
function techList(lista, name) {
  let tecnologias = {}

  let lista2 = []
  if (lista.length === 0) {
    return "Vazio!"
  }

  for (let i = 0; i < lista.length; i += 1) {

    tecnologias.tech = lista[i]
    tecnologias.name = name
    lista2.push(Object.assign({}, tecnologias))

  }
  function compare(a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    if (a.tech > b.tech) {
      return 1;
    }
  }
  lista2.sort(compare)
  return lista2
}


// Desafio 11
function generatePhoneNumber(numeros) {
  let telefone = "(";

  if (numeros.length !== 11) {
    return "Array com tamanho incorreto."
  }
  for (let i = 0; i < numeros.length; i += 1) {
    let repeticoes = 0;
    for (let j = 0; j < numeros.length; j += 1) {
      if (numeros[j] < 0 || numeros[j] > 9) {
        return "não é possível gerar um número de telefone com esses valores"
      }
      if (numeros[j] === numeros[i]) {
        repeticoes += 1
      }
      if (repeticoes >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  for (let k = 0; k < numeros.length; k += 1) {
    if (k !== 1 && k !== 6) {
      telefone += numeros[k]
    }
    else if (k === 1) {
      telefone += numeros[k] + ")" + " "
    } else {
      telefone += numeros[k] + "-"
    }
  }
  return telefone
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let total = 0

  if (lineA < lineB + lineC && lineA > lineB - lineC) {
    total += 1;
  }

  if (lineB < lineA + lineC && lineB > lineA - lineC) {
    total += 1
  }
  if (lineC < lineB + lineA && lineC > lineB - lineA) {
    total += 1
  }
  if (total === 3) {
    return true
  } else {
    return false
  }

}

// Desafioo 13
function hydrate(bebida) {
  let copo = "copos"
  let soma = 0;
  for (let i = 0; i < bebida.length; i += 1) {
    if (!isNaN(bebida[i]) === true) {
      soma += Number(bebida[i])
    }
  }
  if (soma === 1) {
    copo = "copo"
  }

  return `${soma} ${copo} de água`
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
