// Desafio 1
function compareTrue(valorA, valorB) {
  if(valorA == true && valorB == true){
    return true;
  }
  if(valorA == false && valorB == false || valorA == true && valorB == false || valorA == false && valorB == true){
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  return ((base*height)/2);
}


// Desafio 3
function splitSentence(palavra) {
  let palavraSeparada = palavra.split(' ');
  return palavraSeparada;
}


// Desafio 4
function concatName(concatena) {
  return concatena[concatena.length-1] + ", "+  concatena[0];  
}

// Desafio 5
function footballPoints(wins,ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  return vitoria + empate;
}

// Desafio 6
function highestCount(maiorNumber) {
  let conta=1;
  let itemaux;
  let ordenado = maiorNumber.sort((a, b) => a - b);
  for(let item in ordenado){
      if(ordenado[item] === itemaux && itemaux >= ordenado[ordenado.length-1]  && itemaux != undefined ){
        conta += 1;
      }
      else{
        itemaux = ordenado[item];
      }
    }
    return conta;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1= Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if(distanciaCat1 == distanciaCat2){
    return "os gatos trombam e o rato foge";
  }
  if(distanciaCat1 > distanciaCat2){
    return "cat1";
  }
  else if(distanciaCat1 < distanciaCat2){
    return "cat2";
  }
}

//console.log(catAndMouse(8, 10, 3));

// Desafio 8

function fizzBuzz(ArrayBuzz) {
  let formulacao = [] ;
  for(let item in ArrayBuzz){

    if((ArrayBuzz[item] % 3) == 0 && (ArrayBuzz[item] % 5) == 0){
      formulacao.push("fizzBuzz");
    }else if((ArrayBuzz[item] % 3) == 0){
          formulacao.push("fizz");
        }
        else if((ArrayBuzz[item] % 5) == 0){
          formulacao.push("buzz");
        }
    
    if((ArrayBuzz[item] % 3) != 0 && (ArrayBuzz[item] % 5) != 0){
      formulacao.push("bug!");
    }
  }
  return formulacao;
}

// Desafio 9
function encode(encodando) {
  let formPalavra ='';
  for(let item in encodando){
   if(encodando[item] == 'a'){
    formPalavra += '1';
    }else if(encodando[item] == 'e'){
      formPalavra += '2';
    }else if(encodando[item] == 'i'){
      formPalavra += '3';
    }else if(encodando[item] == 'o'){
      formPalavra += '4';
    }else if(encodando[item] == 'u'){
      formPalavra += '5';
    }
    else{
      formPalavra +=encodando[item];
    }

  }
  return formPalavra;

}

function decode(desencodado) {
  let formPalavra ='';
  for(let item in desencodado){
   if(desencodado[item] == '1'){
    formPalavra += 'a';
    }else if(desencodado[item] == '2'){
      formPalavra += 'e';
    }else if(desencodado[item] == '3'){
      formPalavra += 'i';
    }else if(desencodado[item] == '4'){
      formPalavra += 'o';
    }else if(desencodado[item] == '5'){
      formPalavra += 'u';
    }
    else{
      formPalavra +=desencodado[item];
    }

  }
  return formPalavra;

}


// Desafio 10
function techList(nometech,name) {
  let novaNomeTechAux = {};
  let novaNomeTech = [];
  let ordenado = nometech.sort();
  if(ordenado == []){
    let vazio = "Vazio!"
    return vazio ;
  }
  for(let item in ordenado){
      novaNomeTechAux.tech = ordenado[item];
      novaNomeTechAux.name = name;
      novaNomeTech.push(Object.assign({}, novaNomeTechAux));
  }
  return novaNomeTech;
}

novaNomeTech = ["React", "Jest", "HTML", "CSS", "JavaScript"]

console.log(techList(novaNomeTech,"lucas"));

// Desafio 11
function generatePhoneNumber() {
  // 
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
