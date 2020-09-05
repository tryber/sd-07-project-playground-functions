// Desafio 1
function compareTrue(a,b) {
  if (a === true && b === true){
    return true;
  }
  else {
    return false;
  }
}
//console.log(compareTrue(false,true));

// Desafio 2
function calcArea(base,height) {
  let areaTriangulo=0;
  areaTriangulo=(base*height)/2;
  return areaTriangulo;
}
//console.log(calcArea(15,3));

// Desafio 3
function splitSentence(string) {
  let array = [];
  let palavra = "";
    for (i=0; i<=string.length; i+=1){
      
      if (string.substr(i,1)==" " || i == string.length){
        array.push(palavra);
        palavra = "";
      }
      else {
        palavra = palavra + string.substr(i,1);
      }

    }
    return array;
}
//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  let ultimaPosicaoDaArray = array.length-1
  let string = "";

  string = array[ultimaPosicaoDaArray] + ", " + array[0];
  return string;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins,ties) {
  let pontosVitorias = wins*3;
  let pontosEmpates = ties;
  let pontosCampeonato = pontosVitorias + pontosEmpates;

  return pontosCampeonato;
}
//console.log(footballPoints(5,2));

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let contaNumero = 0;
    for (key in array){
      if (array[key]>maiorNumero){
        maiorNumero=array[key];
      }
    }
  
    for (key in array){
      if (array[key]==maiorNumero){
        contaNumero+=1;
      }
    }
  return contaNumero
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let distanciaGato1 = cat1-mouse;
  let distanciaGato2 = cat2-mouse;

  if (distanciaGato1<0){
    distanciaGato1=distanciaGato1*-1;
  }
  if (distanciaGato2<0){
    distanciaGato2=distanciaGato2*-1;
  }

    if (distanciaGato1<distanciaGato2 && distanciaGato1 > 0 && distanciaGato2 > 0){
      return `cat1`;
    }
    else if (distanciaGato1>distanciaGato2 && distanciaGato1 > 0 && distanciaGato2 > 0){
      return `cat2`;
    }
    else {
      return `os gatos trombam e o rato foge`
    }
}
//console.log(catAndMouse(10,22,4));

// Desafio 8
function fizzBuzz(array) {
  let arrayResultado=[];
  let stringResultado = "";

  for (key in array){
    if (array[key]%3==0){
      stringResultado = "fizz";
    }
    
    if (array[key]%5==0){
      stringResultado = "buzz";
    }

    if (array[key]%3==0 && array[key]%5==0){
      stringResultado = "fizzBuzz";
    }

    if (array[key]%3>0 && array[key]%5>0){
      stringResultado = stringResultado + "bug!";
    }
    
    arrayResultado.push(stringResultado);
    stringResultado="";

  }
  return arrayResultado;
}
//console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(texto) {
  let codigo = "";

  for (i=0; i<texto.length; i+=1){

    switch(texto.substr(i,1)){
      case "a":
        codigo=codigo+1;
        break;
      case "e":
        codigo=codigo+2;
        break;
      case "i":
        codigo=codigo+3;
        break;
      case "o":
        codigo=codigo+4;
        break;
      case "u":
        codigo=codigo+5;
        break;
      default:
        codigo=codigo+texto.substr(i,1);
    }
  }
  return codigo;
}
//console.log(encode("hi there!"));
//-------------------------------------------------------
function decode(codigo) {
    let texto = "";

  for (i=0; i<codigo.length; i+=1){

    switch(codigo.substr(i,1)){
      case "1":
        texto=texto+"a";
        break;
      case "2":
        texto=texto+"e";
        break;
      case "3":
        texto=texto+"i";
        break;
      case "4":
        texto=texto+"o";
        break;
      case "5":
        texto=texto+"u";
        break;
      default:
        texto=texto+codigo.substr(i,1);
    }
  }
  return texto;
}
//console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(array, name) {
  let arrayObjeto = [];

  array.sort();

  for (key in array){
      arrayObjeto.push({tech:array[key], name:name});
  }

  if (array.length===0){
    return "Vazio!";
  }

  return arrayObjeto;
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Fernando"));

// Desafio 11
function generatePhoneNumber(arrayTelefone) {
  let numeroTelefone = "";
  let contador = 0;

  if (arrayTelefone.length!=11){
    return `Array com tamanho incorreto.`
  }

  for (key in arrayTelefone){
    if(arrayTelefone[key]<0 || arrayTelefone[key]>9){
      return `não é possível gerar um número de telefone com esses valores`;
    }
  }

  for (i=0; i<arrayTelefone.length; i+=1){
    for (j=0; j<arrayTelefone.length; j+=1){
      if (arrayTelefone[i]===arrayTelefone[j]){
        contador=contador+1;
      }
    }
    if (contador>=3){
      return `não é possível gerar um número de telefone com esses valores`;
    }
    contador=0;
  }

  numeroTelefone = `(` + arrayTelefone[0] + arrayTelefone[1] + `) ` + arrayTelefone[2] + 
  arrayTelefone[3] + arrayTelefone[4] + arrayTelefone[5] + arrayTelefone[6] + `-` + 
  arrayTelefone[7] + arrayTelefone[8] + arrayTelefone[9] + arrayTelefone[10]

return numeroTelefone
}
//console.log(generatePhoneNumber([1,2,3,4,5,6,7,8,9,0,1]))

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if (lineB-lineC>lineA || lineA>lineB+lineC){
    return false;
  }
  if (lineA-lineC>lineB || lineB>lineA+lineC){
    return false;
  }
  if (lineB-lineA>lineC || lineC>lineB+lineA){
    return false;
  }

  return true;
}
//console.log(triangleCheck(10,14,8));

// Desafio 13
function hydrate(texto) {
  let string = texto;
  let numbers = string.match(/\d+/g).map(Number);
  let contador = 0;
  
  for (key in numbers){
    contador=contador+numbers[key];
  }
  
  if (contador===1){
    return `${contador} copo de água`
  }
  else {
    return `${contador} copos de água`
  }
}
//console.log(hydrate(`1 cachaça`));


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
