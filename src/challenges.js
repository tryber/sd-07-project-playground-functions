// Desafio 1
let a= false;
let b= false;
function compareTrue(a, b) {
  let resultado = a && b;
  // return console.log("resultado do desafio 1", resultado);
  return resultado;
}
// compareTrue(a,b);

// Desafio 2
let base= 1;
let height= 2;
function calcArea(base, height) {
  let area = base*height/2
  // return console.log("resultado do desafio 2", area, "m2");
  return area;
}
// calcArea(base, height);

// Desafio 3
let string = "vamo que vam"
let array = [];
// console.log(string[6])
// console.log(string.length)
// array= ["aba", "cat", "e"];
// console.log(array);
// for (i=0; i<string.length; i += 1){
//   if (string[i] == " "){//completamente diferente de string[i] = " "!!!
//     array = [string.slice(0,i),string.slice(i,string.length)];
//       }
// console.log(i);
// console.log(string[i])
// console.log(array);
// console.log("---")
//função split pode usar, você remove oq precisa e ele retorna separado e sem ele.
// for (i=0; i<string.length; i += 1) {
//   if (string[i] == " "){//completamente diferente de string[i] = " "!!!
//   array = [string.slice(j,i),string.slice(i,string.length)];
//   j=
// }
// }

function splitSentence(string) {
  let array = string.split(" ");
  // return console.log("resultado do desafio 3", array);
  return array;
} 
// splitSentence(string);


// Desafio 4
let nomeCompleto = ['Vanessa', 'Pimentel', 'Lages', 'Martins', 'Ferreira'];
let nomeEmIngles = "";
// let ultimo = nomeCompleto.length;
// console.log("resultado do desafio 3", ultimo);
// nomeEmIngles = nomeCompleto[ultimo]+", "+ nomeCompleto[0];
// nomeEmIngles = nomeCompleto[nomeCompleto.length] + nomeCompleto[0];
// Esse em cima estava dando erro porque o nomecompleto[nomecompleto.length] é realmente undefined, 
// tem que colocar o -1 pq length de string começa em 0.
// for (i=0; i<nomeCompleto.length; i +=1){
//   if (i=nomeCompleto.length){
//     nomeEmIngles = nomeCompleto[i] +", "+ nomeCompleto[0];
//   }
// }
// console.log("resultado do desafio 4", nomeEmIngles);


function concatName(nomeCompleto) {
  let nomeEmIngles = "";
  let primeiro =[];
  let último=[];
  for (i=0; i<nomeCompleto.length; i +=1){
    if (i=nomeCompleto.length){
      nomeEmIngles = nomeCompleto[i-1] +", "+ nomeCompleto[0]; 
    }
  }
  // return console.log("resultado do desafio 4 é", nomeEmIngles);
  return nomeEmIngles;
}
// concatName(nomeCompleto);

// Desafio 5
let wins = 3;
let ties = 2;
// let total = 3*wins+ties;
// console.log("resultado do desafio 5 é", total);

function footballPoints(wins, ties) {
  let total = 3*wins+ties;
  return total;
  // return console.log("resultado do desafio 5 é", total);
}
// footballPoints(wins, ties);

// Desafio 6
let numbers = [1,3,5,6,7,8,8,7,8,3,4,5,7];
function highestCount(numbers) {
  let maior =0;
  for (let i=0; i<numbers.length; i += 1){
    if (numbers [i] > maior){
        maior = numbers [i];
    }
  }
  let countBigger = 0;
  for (let j=0; j<numbers.length; j += 1){
    if (numbers [j] == maior){
      countBigger = countBigger +1
    }
  }
  return countBigger;
  // return console.log("resultado do desafio 6 é", countBigger);
}
// highestCount(numbers);

// Desafio 7
let mouse =20;
let cat1 = 10;
let cat2 = 47;
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = mouse-cat1;
  let distCat2 = mouse-cat2;
  if (distCat1<0){distCat1=distCat1*-1}
  if (distCat2<0){distCat2=distCat2*-1}
  if (distCat1<distCat2){
    return "cat1";
  } else if (distCat1==distCat2) {//else if escreve separado
    return "os gatos trombam e o rato foge"
  } else {return "cat2"}
}
// catAndMouse(mouse, cat1, cat2);

// Desafio 8
let fizzBuzzNumbers = [2, 15, 7, 9, 45];
function fizzBuzz(fizzBuzzNumbers) {
  let code = [];// o push só funciona se já for uma array e não uma string, 
  for (let i=0; i<fizzBuzzNumbers.length; i += 1){
    if (fizzBuzzNumbers[i]%3 == 0 && fizzBuzzNumbers[i]%5 == 0){
      code.push("fizzBuzz");//a sintaxe do .push é com () e não com =,
    } else if (fizzBuzzNumbers[i]%3 == 0) {
      code.push("fizz");//para strings e numeros você somaria ao invés de .push mas não é isso o exercício.
    } else if (fizzBuzzNumbers[i]%5 == 0) {
      code.push("buzz");
    } else {code.push("bug!");} 
  }
  return code;//ele anda a function até o primeiro return
  // return console.log(code);
}
// fizzBuzz(fizzBuzzNumbers);

// Desafio 9
let message = "hi there"
// console.log(message);
// console.log(message[5]);
// console.log("---");
// if (message[5] === "e"){
//   message[5] = "2";
// }
// console.log(message);
// message[5] = "2";
// console.log(message);

// console.log(" ----- como array -------");
// let messagem = ["h","i"," ","t","h","e"];
// console.log(messagem);
// console.log(messagem[5]);
// console.log("---");
// if (messagem[5] === "e"){
//   messagem[5] = "2";
// }
// console.log(messagem);
// messagem[5] = "2";
// console.log(messagem);

// let messageArray = message.split("");
// for (let i=0; i<message.length; i += 1){
//     if (messageArray[i] == "e"){
//         messageArray[i] = "2";
//     }
// }
// let messageEncode = ""
// console.log(messageArray.length);
// for (j=0; j<messageArray.length; j+=1){
//       let x = messageArray[j];
//       messageEncode = messageEncode + x;
//       // messageEncode.push(x);
//       console.log(x);
//       console.log(messageArray[j]);
//       console.log(messageEncode);    
// }
// console.log();

// let banana = "banana";
// let maça = "maça";
// let result = banana + maça;
// console.log(result);


function encode(message) {
  let messageArray = message.split("");
  for (let i=0; i<message.length; i += 1){
    if (messageArray[i] == "a"){
        messageArray[i] = "1";
    }
    if (messageArray[i] == "e"){
      messageArray[i] = "2";
    }
    if (messageArray[i] == "i"){
      messageArray[i] = "3";
    }
    if (messageArray[i] == "o"){
    messageArray[i] = "4";
    }
    if (messageArray[i] == "u"){
    messageArray[i] = "5";
    }
  }
  let messageEncode = ""
  for (j=0; j<messageArray.length; j+=1){
    messageEncode = messageEncode + messageArray[j];
  }
  return messageEncode;
  // return console.log(messageEncode);
}
// encode(message);

messageEncode = "h3 th2r2";

function decode(messageEncode) {
  messageEncode = messageEncode.split("");
  for (let i=0; i<messageEncode.length; i += 1){
    if (messageEncode[i] == "1"){
        messageEncode[i] = "a";  }
    if (messageEncode[i] == "2"){
      messageEncode[i] = "e";    }
    if (messageEncode[i] == "3"){
      messageEncode[i] = "i";    }
    if (messageEncode[i] == "4"){
    messageEncode[i] = "o";    }
    if (messageEncode[i] == "5"){
    messageEncode[i] = "u";    }
  }
  let messageDecode = ""
  for (j=0; j<messageEncode.length; j+=1){
    messageDecode = messageDecode + messageEncode[j];
  }
  return messageDecode;
  // return console.log(messageDecode);
}

// decode(messageEncode);

// Desafio 10
let techArray = ["Js", "Git", "Facebook"];
let name = "Virgílio";
function techList() {
  
}

// Desafio 11
let numberForPhone = [1,2,3,4,5,6,7,8,9,0,1];
function generatePhoneNumber(numberForPhone) {
  if (numberForPhone.lengtht !== 11){
    return "Array com tamanho incorreto."
  }
  for (i=0; i<numberForPhone.length; i +=1){
    if (numberForPhone[i]<0 || numberForPhone>9){
      return "não é possível gerar um número de telefone com esses valores"
    }
    // else if ()//qualquer numero repetir 3 vezes
  }
}

// Desafio 12
let triangle1 = 10;
let triangle2 = 14;
let triangle3 = 8;
function triangleCheck(triangle1, triangle2, triangle3) {
  if (triangle1>(triangle2+triangle3)){
    return false
  }
  if (triangle2>(triangle1+triangle3)){
    return false
  }
  if (triangle3>(triangle2+triangle1)){
    return false
  }
  let dif3 = triangle1 - triangle2;
  let dif2 = triangle1 - triangle3;
  let dif1 = triangle2 - triangle3;
  if (dif1<0){dif1=dif1*-1};
  if (dif2<0){dif2=dif2*-1};
  if (dif3<0){dif3=dif3*-1};
  if (triangle1<dif1){return false};
  if (triangle2<dif2){return false};
  if (triangle3<dif3){return false};
  return true;
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
