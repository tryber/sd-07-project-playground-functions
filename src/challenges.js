// Desafio 1 feito
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2 feito
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3 feito
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}

// Desafio 4 feito
function concatName(arrayString) {

  let item1, item2;

  for (let i = 0; i < arrayString.length; i += 1) {

      item1 = arrayString[0];
        if(arrayString[i + 1] === undefined){
          item2 = arrayString[i];
        }

  }
  let string = [item2, item1].join(', ');
  return string;
}

// Desafio 5 feito
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + (ties * 1);
  return resultado;
}

// Desafio 6 feito
function highestCount(numbers) {

  let maior = Math.max.apply(null, numbers );
  let cont = 0;

  for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] === maior) {
          cont = cont + 1;
      }
  }
  return cont;
}

// Desafio 7 feito
function catAndMouse(mouse, cat1, cat2,) {

  let distancia1 = cat1 - mouse;
  let distancia2 = cat2 - mouse;
  let unidades1 = Math.abs(distancia1);
  let unidades2 = Math.abs(distancia2);

if (unidades1 > unidades2) {

      return 'cat2';
  }
  else if (unidades2 > unidades1) {

      return 'cat1';
  }
  else if (unidades1 === unidades2){

      return 'os gatos trombam e o rato foge';
  }

}

// Desafio 8
function fizzBuzz(arrNumbers) {

   for (let indice in arrNumbers){

      if((arrNumbers[indice]%3==0)&&(arrNumbers[indice]%5==0)){
          arrNumbers[indice] = "fizzBuzz";

      } else if (arrNumbers[indice]%5==0) {
          arrNumbers[indice] = "buzz";

      } else if (arrNumbers[indice]%3==0){
          arrNumbers[indice] = "fizz";

      } else {
          arrNumbers[indice]="bug!";
      }
  }
  return arrNumbers;
}

// Desafio 9
function encode(arrString) {
  let encodeString = [];
  for (let i = 0; i < arrString.length; i += 1) {

        if(arrString[i] == 'a'){
            encodeString[i] = 1;
        }
        else if(arrString[i] == 'e') {
            encodeString[i] = 2;
        }
        else if(arrString[i] == 'i'){
            encodeString[i] = 3;
        }
        else if (arrString[i] == 'o') {
            encodeString[i] = 4;
        }
        else if (arrString[i] == 'u') {
            encodeString[i] = 5;
        }
        else {
            encodeString[i] = arrString[i];
        }
  }

   return encodeString.join('');
}

function decode(arrayString) {
  let decodeString = [];

  for (let i = 0; i < arrayString.length; i += 1) {

        if(arrayString[i] == 1){
            decodeString[i] = 'a';
        }
        else if(arrayString[i] == 2) {
            decodeString[i] = 'e';
        }
        else if(arrayString[i] == 3){
            decodeString[i] = 'i';
        }
        else if (arrayString[i] == 4) {
            decodeString[i] = 'o';
        }
        else if (arrayString[i] == 5) {
           decodeString[i] = 'u';
        }
        else {
          decodeString[i] = arrayString[i];
        }
  }
   return decodeString.join('');
}

// Desafio 10
function techList(arrayList, name) {

    let saida = [];
    if(arrayList.length <= 0){
      return 'Vazio!';
    }
    for (let indice in arrayList) {

        saida.push({
          tech: arrayList[indice],
          name: name,
        })
    }
    saida.sort(function (a, b) {
      if (a.tech > b.tech) {
        return 1;
      }
      if (a.tech < b.tech) {
        return -1;
      }
        return 0;
    });

    return saida;
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let num = {};
/* verifica se tem 11 números,
 * números maiores que zero e se são menores que 9
 *
 */
  if(numeros.length != 11){
      return "Array com tamanho incorreto.";
  }

  for (let key in numeros) {
    if ((numeros[key] < 0) || (numeros[key] > 9)) {

        return 'não é possível gerar um número de telefone com esses valores';
    }
  }
 /* verifica se o array contém números
  * que se repetem mais de três vezes.
  */
  for (let i = 0; i < numeros.length; i += 1) {
      let valor = numeros[i];
      if (num[valor] === undefined) {
        num[valor] = 1;
      } else {
        num[valor] = num[valor] + 1;
      }
  }

  for (let prop in num) {
    if (num[prop] >= 3) {

        return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  //fim das verificações.

  let part1 = numeros.slice(0,2);
  let part2 = numeros.slice(2,7);
  let part3 = numeros.slice(7,11);
  //adicionado parenteses
  part1.unshift('(');
  part1.push(')');
  part1.push(' ');

  //adiconando (-)
  part2.push('-');

  let string = part1.concat(part2, part3);

  return string.join(''); //(12) 34567-8901

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if(lineA < (lineB + lineC) && (lineA > (Math.abs(lineB - lineC)))){

        return true;
    } else {

        return false;
    }
}

// Desafio 13
function hydrate(texto) {
  let numBebidas = texto.match(/\d/g);
    let coposAgua = 0;
    let num = [];

    for (let i = 0; i < numBebidas.length; i++) {
            num[i] = parseInt(numBebidas[i]);
    }

    for (let j = 0; j < numBebidas.length; j++){

        coposAgua = coposAgua + num[j];
    }

    if(coposAgua > 1) {
        return coposAgua + " copos de água";
    }
    else {
        return coposAgua + " copo de água";
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
