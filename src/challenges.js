// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == 1 && valor2 == 1) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth)/2
}


// Desafio 3
function splitSentence(str) {
  let separacao = str.split(" ");
  return separacao



}


// Desafio 4
function concatName(array) {
  let concatenando = `${array[array.length -1]}, ${array[0]}`;
  return concatenando;
}

// Desafio 5
function footballPoints(wins, ties) {
let pontos = (wins * 3) + (ties * 1)
return pontos
}


function maiorValor(array) {
  let maiorNumero = array[0];

  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];

    }
  }
  return maiorNumero;
}

// Desafio 6
function highestCount(array){
  let maior = maiorValor(array);
  let contador= 0;
  for (let j = 0; j < array.length; j += 1) {
    if (maior === array[j]){
      contador += 1;
    }
  }
  return contador;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distanciaGato1 = Math.abs(mouse - cat1);
  let distanciaGato2 = Math.abs(mouse -cat2);

  if (distanciaGato1 > distanciaGato2) {
         return "cat2";

  } else if (distanciaGato1 < distanciaGato2) {
         return "cat1";

  } else  return "os gatos trombam e o rato foge";

}

console.log(catAndMouse(10,4,22))



// Desafio 8
function fizzBuzz(array) {
  let valores = [];
     for (let i = 0; i < array.length ; i++) {
       if (array[i] % 3 === 0 && array[i] % 5 === 0) {
        valores.push("fizzBuzz");

       } else if(array[i] % 3 === 0 ) {
          valores.push("fizz");

       } else if (array[i] % 5 === 0) {
        valores.push("buzz");

       } else valores.push("bug!");

    }
      return valores;
}




// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(arrayn, name) {


  // seu código aqui
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
}
