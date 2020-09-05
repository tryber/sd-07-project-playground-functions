// Desafio 1
function compareTrue(a, b) {
  let comparacao;
  if(a === true && b === true){
    comparacao = true;
  }else {
    comparacao = false
  }
  return comparacao
}

// Desafio 2

function calcArea(base, heigth) {
  let area = (base * heigth) / 2;   
  
  return area;
}

// Desafio 3
function splitSentence(string) {
  let separador = " ";
  let arrayDeStrings = string.split(separador)

  return arrayDeStrings;
}

// Desafio 4
function concatName(arrayDeStrings){
  let concat = arrayDeStrings[arrayDeStrings.length - 1] + ", " + arrayDeStrings[0];

  return concat
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotais = (wins * 3) + (ties * 1);  

  return pontosTotais;
}

// Desafio 6
function highestCount(param) {
  let maiorValor = 0;
  let numRepeticoes = 0;
  for(let i = 0; i < param.length; i += 1){
     if(maiorValor < param[i]){
      maiorValor = param[i];
     }
  } 
  for(let j = 0; j < param.length; j += 1){
      if(maiorValor === param[j]){
      numRepeticoes += 1;
      }
  }
  
  return numRepeticoes
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;  
  if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
        resultado = "cat1"
    } else if(Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)){
        resultado = "cat2"
    }else {
      resultado = "os gatos trombam e o rato foge"
  }
  return resultado
}

// Desafio 8
function fizzBuzz(param) {
  let resultados = [];
  for(let i = 0; i < param.length; i += 1){
      if(param[i] % 3 === 0 && param[i] % 5 !== 0){
          resultados.push("fizz");
      }
      else if(param[i] % 5 === 0 && param[i] % 3 !== 0){
          resultados.push("buzz");
      }
      else if(param[i] % 3 === 0 && param[i] % 5 === 0){
          resultados.push("fizzBuzz");
      }
      else {
          resultados.push("bug!")
      }
  }
  
  return resultados

}

// Desafio 9
function encode(param) {
  let retorno = []
  for(let i = 0; i < param.length; i += 1){
      if(param[i] === "a" || param[i] === "e" || param[i] === "i" || param[i] === "o" || param[i] === "u"){
          if(param[i] === "a"){
              retorno += "1";
          } else if(param[i] === "e"){
              retorno += "2";
          } else if(param[i] === "i"){
              retorno += "3";
          } else if(param[i] === "o"){
              retorno += "4";
          } else{
              retorno += "5";
          }
      } else{
          retorno += param[i]
      }

  }
  return retorno
}

function decode(param) {
  let retorno = []
  for(let i = 0; i < param.length; i += 1){
      if(param[i] === "1" || param[i] === "2" || param[i] === "3" || param[i] === "4" || param[i] === "5"){
          if(param[i] === "1"){
              retorno += "a";
          } else if(param[i] === "2"){
              retorno += "e";
          } else if(param[i] === "3"){
              retorno += "i";
          } else if(param[i] === "4"){
              retorno += "o";
          } else{
              retorno += "u";
          }
      } else{
          retorno += param[i]
      }

  }
  return retorno
}

// Desafio 10

function techList(tech, name) {
  let lista = [];
  tech.sort();
  if(tech.length === 0 || tech === 0){
      return "Vazio!";    
  }
  for(let i = 0; i < tech.length; i += 1){
    let objeto = {}
    objeto = {
        tech: tech[i],
        name: name
    }
    lista.push(objeto);
      
  }
  return lista
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
