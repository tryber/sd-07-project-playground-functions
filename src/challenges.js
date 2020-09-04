// here go!
// Desafio 1
function compareTrue(a,b) {
  if (a === true && b === true) {
    return true;    
  } 
  else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
return (base * height)/2;
}

// Desafio 3
function splitSentence(aFrase) {
let aFraseArray = aFrase.split(' ');
return aFraseArray
}

// Desafio 4
function concatName(arraystrings) {
  let arrayFinal = [];
  let countlen = arraystrings.length-1;
  arrayFinal[0] = arraystrings[countlen];
  arrayFinal[1] = arraystrings[0];
  return arrayFinal[0]+', '+arrayFinal[1]
}

// Desafio 5
function footballPoints(wins,ties) {
  return wins*3+ties
  }

// Desafio 6
function highestCount(arraynum) {
  let repmax = null
  let maiornum = -Infinity
  for (key in arraynum) {
    if (arraynum[key] > maiornum){
      maiornum = arraynum[key];
      repmax = 1;
    } else{
    if (maiornum == arraynum[key]){
      repmax += 1;
    }
    }
    }
  return repmax  
  }

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  ptscat1 = Math.abs(mouse - cat1);
  ptscat2 = Math.abs(mouse - cat2);
  if(ptscat1<ptscat2){
    return "cat1"
  } else {
    if (ptscat1 == ptscat2) {
    return  "os gatos trombam e o rato foge"
    } else {
      return "cat2"
    }
  }
}

// Desafio 8
function fizzBuzz(arrayfizzbuzz) {
  let arrayfizzbuzzfinal = [];
  for ( key in arrayfizzbuzz) {
  if (arrayfizzbuzz[key] % 3 == 0 && arrayfizzbuzz[key] % 5 == 0) {
    arrayfizzbuzzfinal.push("fizzBuzz");
  } else{
    if (arrayfizzbuzz[key] % 3 == 0) {
      arrayfizzbuzzfinal.push("fizz");
    } else {
      if (arrayfizzbuzz[key] % 5 == 0) {
        arrayfizzbuzzfinal.push("buzz");
      } else {
        arrayfizzbuzzfinal.push("bug!");
      }
    }
  }
}
return arrayfizzbuzzfinal
}

// Desafio 9
function encode(arrayenconde) {
  let arrayencondecodado = [];
  arrayencondecodado = arrayenconde.split("")  
  for (key in arrayencondecodado){
    if (arrayencondecodado[key] == "a"){
      arrayencondecodado[key] = 1; 
    }
    if (arrayencondecodado[key] == "e"){
      arrayencondecodado[key] = 2;
    }
    if (arrayencondecodado[key] == "i"){
      arrayencondecodado[key] = 3;
    }
    if (arrayencondecodado[key] == "o"){
      arrayencondecodado[key] = 4;
    }
    if (arrayencondecodado[key] == "u"){
      arrayencondecodado[key] = 5;
    }
  }
  return arrayencondecodado.join("")
}

function decode(arraydeconde) {
  let arraydecondecodado = [];
  arraydecondecodado = arraydeconde.split("")  
  for (key in arraydecondecodado){
    if (arraydecondecodado[key] == 1){
      arraydecondecodado[key] = "a"; 
    }
    if (arraydecondecodado[key] == 2){
      arraydecondecodado[key] = "e";
    }
    if (arraydecondecodado[key] == 3){
      arraydecondecodado[key] = "i";
    }
    if (arraydecondecodado[key] == 4){
      arraydecondecodado[key] = "o";
    }
    if (arraydecondecodado[key] == 5){
      arraydecondecodado[key] = "u";
    }
  }
  return arraydecondecodado.join("")
}

// Desafio 10
function techList(tech) {
  let arrayreturn = [];
  let name = "Lucas"
  for ( key in tech)
  arrayreturn.push({
    tech: tech[key],
    name: name}
  )
  // nessa parte do código que faço ele ordenar a os objetos no array
  // essa parte do código ficou confuso, achei a solução no link em :
  // "https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/" mas não ficou claro
  arrayreturn.sort((a,b) => (a.tech > b.tech) ? 1 : -1);
  if (tech[0] == null && tech.length == 0) {
    return "Vazio!"
  }
  return arrayreturn
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
