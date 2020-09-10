// Desafio 1
function compareTrue(bool1 , bool2) {
  // seu código aqui
  if (bool1 === true && bool2===true) {
    return true
  }
  else {
    return false
  }

}

// Desafio 2
function calcArea(base , height) {
  // seu código aqui
 
  let area = (base * height)/2;
  return area;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = string.split(" ");
  return array;


}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = array[array.length -1] + ", " + array[0] ;
  return string;
}

// Desafio 5
function footballPoints(wins , ties ) {
  // seu código aqui
  let points = (wins*3 + ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let max = array[0]

  for (let i in array){
    if (array[i] > max){
    max = array[i]
  }
}
  let counter = 0

  for(let i in array) {
    if(max === array[i]){
    counter += 1
  }
}
  return counter
}

// Desafio 7
function catAndMouse(mouse , cat1 , cat2) {
  // seu código aqui
  let absoluteDistance1 = cat1 - mouse;
  if(absoluteDistance1 < 0 ) {
    absoluteDistance1 = -1*absoluteDistance1
  }
  let absoluteDistance2 = cat2 - mouse;
  if(absoluteDistance2 < 0 ) {
    absoluteDistance2 = -1*absoluteDistance2
  }

  if(absoluteDistance1 > absoluteDistance2) {
    return "cat2";
  }
  else if(absoluteDistance2 > absoluteDistance1) {
    return "cat1";
  }
  else if (absoluteDistance1 === absoluteDistance2) {
    return "os gatos trombam e o rato foge";
  }

}
// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
let newArray = [];
  for(let index = 0; index < array.length ; index++){
    if (array[index] % 3 === 0 && array[index] % 5 === 0 ) {
      newArray.push("fizzBuzz");
    }
    else if(array[index] % 3 === 0) {
      newArray.push("fizz");
    }
    else if(array[index] % 5 === 0) {
      newArray.push("buzz");
    }
    else {
      newArray.push("bug!");
    }
  }
return newArray;


  }


// Desafio 9
function encode(string) {
  // seu código 
  let newString = ""
    for(let index = 0 ; index < string.length ; index++) {
      if (string[index] === "a"){
        newString += "1";
      }
      else if (string[index] === "e"){
        newString += "2";
      }
      else if (string[index] === "i"){
        newString += "3";
      }
      else if (string[index] === "o"){
        newString += "4";
      }
      else if (string[index] === "u"){
        newString += "5";
      }
      else {
        newString += string[index];
      }
    }
      return newString;

}
function decode(string) {
  // seu código aqui
  let newString = ""
    for(let index = 0 ; index < string.length ; index++) {
      if (string[index] === "1"){
        newString += "a";
      }
      else if (string[index] === "2"){
        newString += "e";
      }
      else if (string[index] === "3"){
        newString += "i";
      }
      else if (string[index] === "4"){
        newString += "o";
      }
      else if (string[index] === "5"){
        newString += "u";
      }
      else {
        newString += string[index];
      }
    }
      return newString;
}

// Desafio 10
function techList(array , name) {
  // seu código aqui
 let orderArray = array.sort();
 let receiverArray = [];
  for(let skill in orderArray) {
    let object = {
      tech: orderArray[skill],
      name: name
    }
  receiverArray.push(object)
  }
  if  (array.length ===0 ){ 
    return "Vazio!"
  }
  return receiverArray;
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
