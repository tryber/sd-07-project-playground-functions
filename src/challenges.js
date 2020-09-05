// Desafio 1
function compareTrue(ligado,quente){
  // seu código aqui
  let podeBanhar;
  if((ligado==true)&&(quente==true)){
      podeBanhar=true;
  } else{
      podeBanhar=false;
  }
  return podeBanhar;
}
// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
}
// Desafio 3
function splitSentence(frase) {
  // seu código aqui
let resultado = frase.split(" ");
return resultado;
}
// Desafio 4
function concatName(frase) {
  // seu código aqui
let resultado = [];
let retornoToString;
for(let count in frase){
  resultado[0]=frase[frase.length-1];
  resultado[1]=" " + frase[0];
  resultado=resultado.toString();
}
retornoToString = resultado.toString();
return retornoToString;
}
// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let totalPoints = (wins*3) + ties;
  return totalPoints
}
// Desafio 6
function highestCount(highestCount) {
  // seu código aqui
  let bigger = 0;
  let result = 0;
for(let count in highestCount){
  if(highestCount[count]>bigger){
      bigger=highestCount[count];
}
}
for(let count in highestCount){
  if(bigger===highestCount[count]){
      result+=1;
  }
}
return result;
}
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
let cat1Distance = Math.abs(mouse-cat1);
let cat2Distance = Math.abs(mouse-cat2);
if(cat1Distance<cat2Distance){
  return "cat1";
} else if(cat2Distance<cat1Distance) {
  return "cat2";
}
return "os gatos trombam e o rato foge";
}
// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
let fizzBuzzReturn = [];
  for (let count in numbers){
      if((numbers[count]%3==0)&&(numbers[count]%5==0)){
          fizzBuzzReturn[count] = "fizzBuzz";
      } else if (numbers[count]%5==0) {
          fizzBuzzReturn[count] = "buzz";
      } else if (numbers[count]%3==0){
          fizzBuzzReturn[count] = "fizz";
      } else {
          fizzBuzzReturn[count]="bug!";
      }
  }
  return fizzBuzzReturn;
}
// Desafio 9
function encode(senhaEncoder) {
  let encoder = senhaEncoder.replace(/a/g,1);
  encoder = encoder.replace(/e/g,2);
  encoder = encoder.replace(/i/g,3);
  encoder = encoder.replace(/o/g,4);
  encoder = encoder.replace(/u/g,5);
  return encoder;
}
function decode(senhaDecoder) {
  let decoder = senhaDecoder.replace(/1/g,"a");
  decoder = decoder.replace(/2/g,"e");
  decoder = decoder.replace(/3/g,"i");
  decoder = decoder.replace(/4/g,"o");
  decoder = decoder.replace(/5/g,"u");
  return decoder;
}

// Desafio 10
function techList(tecnologia,nome) {
  // seu código aqui
  let resultado = [];
  tecnologia.sort();
  if(tecnologia.length<=0){
    return "Vazio!";
  }
  for(let count in tecnologia){
    resultado.push({
      tech: tecnologia[count],
      name: nome
    })
  }
  return resultado;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let checkRepeat=0;
  let formatnumber=0;
  if (numbers.length!== 11) {
    return "Array com tamanho incorreto.";
  }
    for(let count in numbers){    
    if ((numbers[count]>9)||(numbers[count]<0)) {
            return "não é possível gerar um número de telefone com esses valores";
        }
    }
    for (let count=0;count<numbers.length;count++) {
      for (let count2=count+1;count2<numbers.length;count2++) {
        if (numbers[count]===numbers[count2]) {
          checkRepeat += 1;
        }
              if (checkRepeat >= 3) {
                return "não é possível gerar um número de telefone com esses valores";
              }
        }
    }
    formatnumber=`(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
    return formatnumber;
  }

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  // seu código aqui
  let verific01;
  let verific02;
  let verific03;
if((lineA<(lineB+lineC))&&(lineA>Math.abs(lineB-lineC))){
  verific01=true;
  } if((lineB<(lineA+lineC))&&(lineB>Math.abs(lineA-lineC))){
      verific02=true;
      } if((lineC<(lineA+lineB))&&(lineC>Math.abs(lineA-lineB))){
        verific01=true;
          }
if((verific01==true) || (verific02==true) || (verific03==true)){
      return true
  }
  return false;
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
