// Desafio 1 
function compareTrue(valor1,valor2) {
    // seu código aqui
    if(valor1 && valor2) {
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
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui  
  let first = array[0];
  let last = array[array.length - 1];
  let resposta = [ ];

  resposta =(last + "," + " " + first);
  return resposta;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  return (3 * wins)  + ties;
}

// Desafio 6
function highestCount(nums) {
  // seu código aqui
  count =0;
  maior =0;
  //Qual é o maior
  for(let i = 0; i < nums.length; i += 1){
      if (nums[i] > maior){
          maior = nums[i];
      }
  }
  //Qtas vezes aparece
  for(let i = 0; i < nums.length; i += 1){
      if (nums[i] === maior){
           count = count + 1;
      }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  
  //verificando a distancia
  let x1 = cat1 - mouse;
  let x2 = cat2 - mouse;

  x1 = Math.abs(x1);
  x2 = Math.abs(x2); 

  //retornando a resposta
  if (x1<x2) {
      return "cat1";
  } else if (x2<x1) {
      return "cat2";
  } else {
      return "os gatos trombam e o rato foge"
  }   
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
      let newArray = [];
  
      for(let i = 0; i < array.length; i += 1) {
          if (array[i] % 3 == 0 && array[i] % 5 !== 0) {
            newArray.push("fizz");
          }
          else if (array[i] % 3 !== 0 && array[i] % 5 == 0) {
            newArray.push("buzz");
          }
          else if (array[i] % 3 == 0 && array[i] % 5 == 0) {
            newArray.push("fizzBuzz");
          }
          else {
            newArray.push("bug!");
          }
        }
      return newArray;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  let newStr = [];

  for(let i = 0; i < str.length; i +=1){
      switch (str[i]) {
          case 'a': 1;
              newStr.push("1");
              break;
          case 'e': 2;
              newStr.push("2");
              break;
          case 'i': 3;
              newStr.push("3");
              break;
          case 'o': 4;
              newStr.push("4");
              break;
          case 'u': 5;
              newStr.push("5");
              break;
          default:
              newStr.push(str[i]);
      }
  }
  return newStr.join("");
}

function decode(str) {
  // seu código aqui
  let newStr = [];

  for(let i = 0; i < str.length; i +=1){
      switch (str[i]) {
          case '1': 'a';
              newStr.push("a");
              break;
          case '2': 'e';
              newStr.push("e");
              break;
          case '3': 'i';
              newStr.push("i");
              break;
          case '4': 'o';
              newStr.push("o");
              break;
          case '5': 'u';
              newStr.push("u");
              break;
          default:
              newStr.push(str[i]);
      }
  }
  return newStr.join("");
}

 // Desafio 10
 function techList(array, name) {
  // seu código aqui
  // Criando o objeto
  let techObj = {
    tech: [],
    name: name
  }
  //Criando uma variável do tipo do objeto
  let newArray = [];
  // Ordenando o array recebido ou retornando o valor vazio
  if (array.length != 0) {
    array = array.sort();
    // Carregando o array com os parametros recebidos
    for(let i = 0; i < array.length; i += 1){
     newArray.push({tech: array[i], name: name});
    }
    //Retornando o array de
    return newArray;
  }
  return "Vazio!";
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let resposta;
  let repete = array[0];
  let maior = null;
  let ocorrenciasMaior = -1;
  //Verifica se o tamanho do array é 10
  if (array.length < 11) {
      resposta = "Array com tamanho incorreto.";
      return resposta;
  }   else if (array.length > 11) {
          resposta = "Array com tamanho incorreto.";
          return resposta;
      }
  //Verifica se item do array é < 0 ou > 9
  for (let i = 0; i < array.length; i += 1) {
      resposta = "não é possível gerar um número de telefone com esses valores";
      if (array[i] >= 10) {
          return resposta;  
      } else if (array[i] < 0) {
          return resposta;        
      }
  }
  //Verifica a repetição do numero
  for ( let i = 0 ; i < array.length ; i++ ) {
      let ocorrencias = 1;
      for (let j = i+1 ; j < array.length ; j++ ) {
        if ( array[i] == array[j] ){
          ocorrencias++;
        }
        if ( ocorrencias > ocorrenciasMaior ) {
            maior = array[i];
            ocorrenciasMaior = ocorrencias;
        }
     }
  }
  if (ocorrenciasMaior >= 3) {
      resposta = "não é possível gerar um número de telefone com esses valores";
      return resposta;
  }
  //Formata a saída
  resposta = "(" + array[0] + array[1] + ")" + " " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10];
  return resposta;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
      return true;
  }
  else {
      return false;
  }
}

// Desafio 13
function hydrate(str) {
  // seu código aqui
  let resposta = "";
  let int = ""; 
  sum = 0;
  let num;
  str = str.split(" ");
  // Retirar os numeros da string
  for (let i = 0; i < str.length ; i+=1){
      if(isNaN(str[i])==false){
      int+=str[i];    
      }
  }
  num = parseInt(int);
  num = num.toString();
  // Somar os números
  for (let i = 0; i < num.length; i += 1){
        sum = sum + parseInt(num[i]);
  }
  // Formatar resposta
  if (sum == 1) {
    resposta = sum + " " + "copo de água";  
  } else {
     resposta = sum + " " + "copos de água";
  }
  return resposta;
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
