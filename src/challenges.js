// Desafio 1.
function compareTrue(camisaAzul, calcaAzul) {
  let avaliacao = true;

  if (camisaAzul == true && calcaAzul == true) {
    avaliacao = true;
  }

  else {
    avaliacao = false;
  }

  return avaliacao;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  let calculoArea = (base * height) / 2;
  return calculoArea;
  // seu código aqui
}

// Desafio 3
function splitSentence(stringExemplo) {
  resultado = stringExemplo.split(" ");
  return resultado;
  // seu código aqui
}

// Desafio 4
function concatName(listaDeNomes) {
  let resultado = (listaDeNomes[listaDeNomes.length -1] + ',' + ' ' + listaDeNomes[0])
      return resultado;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitoria = wins * 3;
  let pontosEmpate = ties * 1;
  let quantidadeDePontos = pontosVitoria + pontosEmpate;

  return quantidadeDePontos
     
  // seu código aqui
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let maiorNumero = 0;
  let contagem = 0;

  for( i = 0; i < arrayDeNumeros.length; i += 1){
    if( arrayDeNumeros[i] >= maiorNumero) {
        maiorNumero = arrayDeNumeros[i];
    }
  }
  for ( i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] >= maiorNumero) {
      contagem += 1;
    }
  }
  return contagem;
  // seu código aqui
  }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado1 = mouse - cat1;
  let resultado2 = mouse - cat2;
  let resultadoFinal = "";
    if(Math.abs(resultado1) < Math.abs(resultado2)) {
      resultadoFinal = "cat1";
    }
    else if ( Math.abs(resultado2) < Math.abs(resultado1)) {
      resultadoFinal = "cat2";
    }
    else {
      resultadoFinal = "os gatos trombam e o rato foge";
    }
      return resultadoFinal;
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let arrayResultado = [];

  for( i = 0; i < arrayDeNumeros.length; i += 1) {
    if (arrayDeNumeros[i] % 3 === 0 && arrayDeNumeros[i] % 5 === 0) {
      arrayResultado.push ("fizzBuzz");
    }
    else if ( arrayDeNumeros[i] % 3 === 0) {
      arrayResultado.push("fizz");
    }
    else if ( arrayDeNumeros[i] % 5 === 0) {
      arrayResultado.push("buzz");
    }
    else {
      arrayResultado.push("bug!");
    } 
  }
  return arrayResultado;
  // seu código aqui
}

// Desafio 9
function encode(vogais) {
  let vogaisa = vogais.replace(/a/g, "1");
  let vogaise = vogaisa.replace(/e/g, "2");
  let vogaisi = vogaise.replace(/i/g, "3");
  let vogaiso = vogaisi.replace(/o/g, "4");
  let vogaisu = vogaiso.replace(/u/g, "5");

  return vogaisu;
  // seu código aqui
}
function decode(numeros) {
  let numeros1 = numeros.replace(/1/g, "a");
  let numeros2 = numeros1.replace(/2/g, "e");
  let numeros3 = numeros2.replace(/3/g, "i");
  let numeros4 = numeros3.replace(/4/g, "o");
  let numeros5 = numeros4.replace(/5/g, "u");

  return numeros5;
  // seu código aqui
}

// Desafio 10
function techList(array, nome) {
  array.sort()
  let resultado;
  let nomeDasTech = [];
  let objeto = {};
  if( array.length < 1) {
    resultado = "Vazio!";
  }
  else { for(i=0; i<array.length; i+=1) {
    objeto = {
      tech : array[i],
      name : nome,
    };
    nomeDasTech.push(objeto);
    resultado = nomeDasTech;
  // seu código aqui
}
  }
return resultado;
}

// Desafio 11
function generatePhoneNumber(array) {

  // seu código aqui
}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1,]));
//console.log(techList(["React", "Jest", "CSS", "HTML", "Javascript"], "Lucas"));


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
  encode,
  decode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
