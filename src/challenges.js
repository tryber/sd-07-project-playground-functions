// Desafio 1
function compareTrue(valor, valor2) {
  if(valor == true && valor2 == true){
    return true;
} else {
    return false;
}
}

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base*height)/2
return area;
}

// Desafio 3
function splitSentence(string) {
  let guarda = [];
  guarda = string.split(" ")
return guarda;
}

// Desafio 4
function concatName(array) {
  let ultimo = [];
   let primeiro = [];
   let respostaFinal= [];
             ultimo=(array[array.length -1]);
             primeiro=(array[0])
            respostaFinal=(ultimo + ", " + primeiro)
            return respostaFinal;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosDeVitoria= "";
  let pontosDeEmpate= "";
let totalDePontosDoTime= "";
pontosDeVitoria= wins*3;
    pontosDeEmpate= ties*1;
    totalDePontosDoTime= pontosDeVitoria + pontosDeEmpate;
    return totalDePontosDoTime
}

// Desafio 6
function highestCount(array){
    let maiorValor= 0;
    let repeticao = 0;
    for (let i = 0; i < array.length; i++) {
  if (array[i] > maiorValor) {
    maiorValor = array[i];
  }
}
for(let j = 0; j < array.length; j++){
  if(maiorValor == array[j]){
        repeticao= repeticao += 1;
    }
}
  return repeticao;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    if(mouse-cat1 == mouse-cat2){
        console.log("os gatos trombam e o rato foge");
    } else if (mouse-cat1 < mouse-cat2){
        console.log("cat1");
    } else{
        console.log("cat2");
    }
}

// Desafio 8
function fizzBuzz (array){
    let percorrido= 0;
    let resp ="";
    let adicionar = [];
    for(let i = 0; i < array.length; i +=1){
    percorrido= array[i];
    if((percorrido % 3)==0 && (percorrido % 5)==0){
        resp="fizzBuzz";
    } else if((percorrido % 3)==0){
        resp="fizz";
    } else if ((percorrido % 5)==0){
        resp="buzz";
    } else {
        resp="bug!"
    }
   adicionar.push(resp);
  }
  return(adicionar)
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array, name) {
  let lista = [];
  let obj = [];
  lista = array.sort()
  if(array.length == 0){
      return"Vazio!"
  }
    for(let i= 0; i < lista.length; i+= 1){
        obj[i] ={
            tech: lista[i],
            name: name
        }
    }
    return(obj);
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
