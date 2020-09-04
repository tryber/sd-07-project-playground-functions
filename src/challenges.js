// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ")
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}

// Desafio 6
function highestCount(array) {
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    if (Math.abs(cat1-mouse) === Math.abs(cat2-mouse)){
      return "os gatos trombam e o rato foge"
    }
    else if (Math.abs(cat1-mouse) < Math.abs(cat2-mouse)){
      return "cat1"
    }
    else{
      return "cat2"
    }
}

// Desafio 8
function fizzBuzz(array) {
  for (let i = 0; i < array.length; i++){
    if (array[i] % 3 == 0 && array[i] % 5 == 0){
      array[i] = "fizzBuzz"
    }
    else if (array[i] % 3 == 0){
      array[i] = "fizz"
    }
    else if (array[i] % 5 == 0){
      array[i] = "buzz"
    }
    else{
      array[i] = "bug!"
    }
  }
  return array
}


// Desafio 9
function encode(string) {
  new_string = string.split('')
  for (let i = 0; i < new_string.length; i++){
    if (new_string[i] === "a"){
      new_string[i] = 1
    }
    else if (new_string[i] === "e"){
      new_string[i] = 2
    }
    else if (new_string[i] === "i"){
      new_string[i] = 3
    }
    else if (new_string[i] === "o"){
      new_string[i] = 4
    }
    else if (new_string[i] === "u"){
      new_string[i] = 5
    }
  }
  return new_string.join('')
}


function decode(string) {
  new_string = string.split('')
  for (let i = 0; i < new_string.length; i++){
    if (new_string[i] == 1){
      new_string[i] = "a"
    }
    else if (new_string[i] == 2){
      new_string[i] = "e"
    }
    else if (new_string[i] == 3){
      new_string[i] = "i"
    }
    else if (new_string[i] == 4){
      new_string[i] = "o"
    }
    else if (new_string[i] == 5){
      new_string[i] = "u"
    }
  }
  return new_string.join('')
}

// Desafio 10
function techList(array, name) {
  new_array = []
  if (array.length == 0){
    return "Vazio!"
  }
  else{
        for (i of array.sort()){
      new_array.push({
        tech: i,
        name: name
      })
    }
    return new_array
  }

}


// Desafio 11
function generatePhoneNumber() {
  // 
}

// Desafio 12
function triangleCheck() {
  // 
}

// Desafio 13
function hydrate() {
  // 
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
