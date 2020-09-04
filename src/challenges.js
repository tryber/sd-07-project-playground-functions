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
function splitSentence(gru) {
  return gru.split(" ");
}
// Desafio 4
function concatName(nome) {
  return `${nome[nome.length - 1]}, ${nome[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins *= 3) + (ties *= 1);
}
// Desafio 6

function highestCount(numeros) {
  let maiornumerorep = 0;
  let maiornumb = 0;
  for (u = 0; u < numeros.length; u += 1) {
    if (numeros[u] > maiornumb) {
      maiornumb = numeros[u];
    }
  }
  for (i = 0; i < numeros.length; i += 1) {
    if (maiornumb == numeros[i]) {
      maiornumerorep += 1;
    }
  }
  return maiornumerorep;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciacat1 = Math.abs(mouse - cat1);
  let distanciacat2 = Math.abs(mouse - cat2);
  if (distanciacat1 > distanciacat2) {
    return "cat2";
  } else if (distanciacat1 == distanciacat2) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let arrayresultado = [];
  for (i = 0; i < numeros.length; i += 1)
    if (numeros[i] % 5 == 0 && numeros[i] % 3 == 0) {
      arrayresultado.push("fizzBuzz");
    } else if (numeros[i] % 3 == 0) {
      arrayresultado.push("fizz");
    } else if (numeros[i] % 5 == 0) {
      arrayresultado.push("buzz");
    } else {
      arrayresultado.push("bug!");
    }
  return arrayresultado;
}

// Desafio 9
function encode(frase) {
  frase = frase.split("");
  let codificador = ["a", "e", "i", "o", "u"];
  let codificador1 = [1, 2, 3, 4, 5];

  for (i = 0; i < frase.length; i += 1) {
    for (j = 0; j < codificador.length; j += 1) {
      if (frase[i] == codificador[j]) {
        frase[i] = codificador1[j];
      }
    }
  }
  return frase.join("");
}
function decode(frase) {
  frase = frase.split("");
  let codificador = ["a", "e", "i", "o", "u"];
  let codificador1 = [1, 2, 3, 4, 5];

  for (i = 0; i < frase.length; i += 1) {
    for (j = 0; j < codificador.length; j += 1) {
      if (frase[i] == codificador1[j]) {
        frase[i] = codificador[j];
      }
    }
  }
  return frase.join("");
}

// Desafio 10
function techList(tech, name) {
  let arraysort = tech.sort();
  arrayresultado = [];
  if (tech.length <= 0) {
    return "Vazio!";
  } else {
    for (let key in arraysort) {
      let novoObjeto = {
        tech: tech[key],
        name: name,
      };
      arrayresultado.push(novoObjeto);
    }
    return arrayresultado;
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  function numerorepetidoemaior() {
    let repeticao = 0;
    for (j = 0; j < array.length; j += 1) {
      for (let key in array) {
        if (array[j] == array[key]) {
          repeticao += 1;
        }
      }
      if (repeticao >= 3) {
        return true;
      } else {
        repeticao = 0;
      }
    }
    for (i = 0; i < array.length; i += 1) {
      if (array[i] > 9 || array[i] < 0) {
        return true;
      }
    }
  }
  let DDD = `${array[0]}${array[1]}`;
  let numbs1 = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  let numbs2 = `${array[7]}${array[8]}${array[9]}${array[10]}`;
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  } else if (numerorepetidoemaior() == true) {
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    return `(${DDD}) ${numbs1}-${numbs2}`;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  //lineA < lineB + lineC && > Math.abs(lineB - lineC)
  //lineB < lineC + lineA && > Math.abs(lineA - lineB)
  //line C < lineA + lineB && > Math.abs(lineA - lineB)
  let condicao = 0;
  let linhas = [lineA, lineB, lineC];
  let valor1 = 0;
  let valor2 = 1;
  let valor3 = 2;
  let absolute = Math.abs(linhas[valor2] - linhas[valor3])
  for (i = 0; i < 3; i += 1) {
    if (
      linhas[valor1] < (linhas[valor2] + linhas[valor3]) && absolute
    ) {
      condicao += 1;
      if (valor2 == 0) {
        valor1 += 1 //C
        valor3 -= 1 //B
      } 
      else {
        valor1 += 1; // B
        valor2 -= 1; // A
      }
    }
  }
  if (condicao == 3) {
    return true;
  } else {
    return false;
  }
}
//

// Desafio 13
function hydrate(array) {
  let quantidade = 0;
  let numerais = /\d+/g;
  let numero = array.match(numerais);

  for(i = 0; i < numero.length; i += 1){
    let inteiro = parseInt(numero[i])
    quantidade += inteiro
  }
  if(quantidade == 1){
    return `${quantidade} copo de água`
  }
  else{
    return `${quantidade} copos de água`
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
};
