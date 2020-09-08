// Desafio 1
function compareTrue(bool_1,bool_2) {
  // seu código aqui
  if(bool_1 && bool_2){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let vetAux = []
  let stringAux = ""
  for (let i = 0; i < string.length; i+=1) {
    if(string[i] != " "){
      stringAux += string[i];
    }
    if(string[i] == " " || i == (string.length-1)){
      vetAux.push(stringAux)
      stringAux = ""
    }
  }
  return vetAux;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let arrayAux = array;
  let string = "";
  string = arrayAux[arrayAux.length-1]+", "+arrayAux[0];
  return string;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let pontos = (wins*3)+ties;
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maxNumber = numbers[0];
  let cont = 0;
  for (let key in numbers){
    if(numbers[key]>maxNumber){
      maxNumber = numbers[key]
    }
  }
  for (let number of numbers) {
    if(maxNumber == number){
      cont += 1;
    }
  }

  return cont;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let posCat1 = Math.abs((mouse-cat1))
  let posCat2 = Math.abs((mouse-cat2))
  if(posCat1 == posCat2){
    return "os gatos trombam e o rato foge";
  }else if(posCat1 < posCat2){
    return "cat1";
  }else{
    return "cat2";
  }
  
}

// Desafio 8
function fizzBuzz(vetor) {
  // seu código aqui
  let array = []
for (const index of vetor) {
  if(index%3!=0 && index%5!=0){
    array.push("bug!")
  }

  if(index%3==0 && index%5==0){
    array.push("fizzBuzz")
  }

  if(index%3==0 && index%5!=0){
    array.push("fizz")
  }
  if(index%5==0 && index%3!=0){
    array.push("buzz")
  }
}

return array;

}

// Desafio 9
function encode(string) {
  //seu código aqui
  string = string.replace(/a/g,"1");
  string = string.replace(/e/g,"2");
  string = string.replace(/i/g,"3");
  string = string.replace(/o/g,"4");
  string = string.replace(/u/g,"5");
  return string;
}
function decode(string) {
  // seu código aqui
  string = string.replace(/1/g,"a");
  string = string.replace(/2/g,"e");
  string = string.replace(/3/g,"i");
  string = string.replace(/4/g,"o");
  string = string.replace(/5/g,"u");
  return string;
}

// Desafio 10
function techList() {
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
