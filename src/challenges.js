// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let arrayPalavras = str.split(" ");
  return arrayPalavras;
}

// Desafio 4
function concatName(concatenacao) {
  // seu código aqui
  let concat = concatenacao[concatenacao.length -1] + ', ' + concatenacao[0];
  //let concat=[]; //2ª opção
  //concat.push(concatenacao[concatenacao.length -1], concatenacao[0]);
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // vitórias = 3 pts, empates = 1 pt.
  let point = (wins * 3) + ties;
  return point;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  contador = 0;
  numeroComparado = 0;
  maiorNumero = 0;

  for(index in numeros){
    if(index > maiorNumero){
      maiorNumero = numeros[index];
    }
  }
  for(comparando in numeros){
    if(maiorNumero == numeros[comparando]){
      contador++;
    }
  }
return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultCat1 = Math.abs(cat1 - mouse);
  let resultCat2 = Math.abs(cat2 - mouse);
  let resultadoFinal;
  if(resultCat1 < resultCat2){
    resultadoFinal = 'cat1';
  }
  else if(resultCat1 > resultCat2){
    resultadoFinal = 'cat2'
  }
  else{
    resultadoFinal = 'os gatos trombam e o rato foge';
  }
  return resultadoFinal;
}

// Desafio 8
function fizzBuzz(arrayNum) {
  // seu código aqui
  //'fizz' //3
  //'buzz' //5
  //'fizzBuzz' //3 e 5
  //'bug' //nenhum
  for(i = 0; i < arrayNum.length; i += 1){
    if(arrayNum[i] % 3 == 0 && arrayNum[i] % 5 == 0){
      arrayNum.splice(i, 1, 'fizzBuzz');
    }
    else if(arrayNum[i] % 3 == 0){
      arrayNum.splice(i, 1, 'fizz');
    }
    else if(arrayNum[i] % 5 == 0){
      arrayNum.splice(i, 1, 'buzz');
    }
    else{
      arrayNum.splice(i, 1, 'bug!');
    }
  }
return arrayNum;
}

// Desafio 9
function encode(arrayEncode) {
  // seu código aqui
  let cestaDeLetras = arrayEncode.split('');

  for(i = 0; i < cestaDeLetras.length; i += 1){
    if(cestaDeLetras[i] == 'a'){
      cestaDeLetras.splice(i, 1, '1');
    }
    else if(cestaDeLetras[i] == 'e'){
      cestaDeLetras.splice(i, 1, '2');
    }
    else if(cestaDeLetras[i] == 'i'){
      cestaDeLetras.splice(i, 1, '3');
    }
    else if(cestaDeLetras[i] == 'o'){
      cestaDeLetras.splice(i, 1, '4');
    }
    else if(cestaDeLetras[i] == 'u'){
      cestaDeLetras.splice(i, 1, '5');
    }
  }
  let novaCesta = cestaDeLetras.toString();
  let novaCesta2 = novaCesta.replace(/,/g,'');
  return novaCesta2;
}

function decode(strings) {
  // seu código aqui
  let cestaDoA = strings.replace(/1/g, 'a');
  let cestaDoB = cestaDoA.replace(/2/g, 'e');
  let cestaDoC = cestaDoB.replace(/3/g, 'i');
  let cestaDoD = cestaDoC.replace(/4/g, 'o');
  let cestaDoE = cestaDoD.replace(/5/g, 'u');
  return cestaDoE;
}

// Desafio 10
function techList(nameTech, name) {
  // seu código aqui
  
  if (nameTech.length == 0){
    return 'Vazio!'
  }
  else {
    // parte de cima
    let objeto = [];
    for(let indice in nameTech){
      objeto[indice] = { tech: nameTech[indice], name: name };
    }
    // parte de baixo
    //objeto.sort();
    function compare(a,b){
      if(a.tech < b.tech){
        return -1;
      }
      else if(a.tech > b.tech){
        return 1;
      }
      else{
        return 0;
      }
    }
    return objeto.sort(compare);
  }
  
}

// Desafio 11
function generatePhoneNumber(telefone) {
  // seu código aqui
  let contador = 0;
  let contadorArmazenador = 0;
  // Verificando tamanho:
  if(telefone.length != 11){
    return "Array com tamanho incorreto."
  }
  // Verificando se existem números repetidos salvando repetições no contador:
  for(let index in telefone){    
    for(let j in telefone){
      if(telefone[index] == telefone[j]){
        contador++;
      }
     }
    if(contador >= 3){
      contadorArmazenador = contador;
    }
    contador = 0;
  }
  // Verificando o contador:
  if(contadorArmazenador >= 3){
    return "não é possível gerar um número de telefone com esses valores";
  }
  // Verificando se os valores estão entre 0 e 9:
  for(let verif = 0; verif < 11; verif += 1 ){
    if(telefone[verif] < 0 || telefone[verif] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
  } 
  // Hora da formatação:
  return "(" + telefone[0] + telefone[1] + ")" + " " + telefone[2] + telefone[3] + telefone[4] + telefone[5] + telefone[6] + "-" +
  telefone[7] + telefone[8] + telefone[9] + telefone[10];
  }

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangulo;
  let verificador = 0;
  let verificadorLado = 0;
  let arrayTriang = [lineA, lineB, lineC];
  // Verificando se lado > que a diferença absoluta:
  
  if(Math.abs(lineB - lineC) < lineA < (lineB + lineC)){
   verificador ++;
   }
  
  // Verificando se lado x é maior que a soma dos demais lados:
  if(lineA < (lineB + lineC)){
    verificadorLado++;
  }
  if(lineB < (lineC + lineA)){
    verificadorLado++;
  }
  if(lineC < (lineA + lineB)){
    verificadorLado++;
  }
  // Verificando os dois verificadores:
  if(verificadorLado == 3 && verificador == 1){
    triangulo = true;
  }
  else{
    triangulo = false;
  }
  return triangulo;
}


// Desafio 13
function hydrate(array) {
  // seu código aqui
  let capturandoNum = /\d+/g;
  let arrayNum = array;
  let novoArray = arrayNum.match(capturandoNum); //virou um array com elementos numéricos
  let soma = 0;
  // fazendo a verificação e unificando os valores:
  for(index in novoArray){
    soma = soma + Math.abs(novoArray[index])
  }
  if(soma == 1){
    return `${soma} copo de água`;
  }
  else {
    return `${soma} copos de água`
  }
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
