// Desafio 1
function compareTrue(x,y) {
  // seu código aqui
  if(x&&y==true){
    return true;
  }else{
    return false;
  }
  
}
//let result = compareTrue(true,true);
//console.log("Resultado desafio 1: "+result);

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
}
//let result = calcArea(10,20);
//console.log("Resultado desafio 2: "+result);

// Desafio 3
let frase ='go Trybe'
function splitSentence(frase) {
  // seu código aqui
  let array = frase.split(" ");
  return array;
}
//let result = splitSentence(frase);
//console.log("Resultado desafio 3: "+result);

// Desafio 4
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(array) {
  // seu código aqui
let tamanhoArray = array.length;
let ultimo = (tamanhoArray)-1;
let str = array[ultimo];
str+=", ";
str+=array[0];
return str;
}
//let result = concatName(array);
//console.log("Resultado desafio 4: "+result);

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = (wins*3)+(ties*1);
  return points;
}

//let result = footballPoints(2,1);
//console.log("Resultado desafio 5: "+result);

// Desafio 6
let numeros = [9, 1, 2, 3, 9, 5, 7];
function highestCount(numeros) {
  // seu código aqui
  let indiceMaior = 0;
  let quantVezes = 0;
  let maiorNumero;
  for (let indice in numeros) {
    if (numeros[indiceMaior] <= numeros[indice]) {// compara do primeiro ao ultimo
     indiceMaior = indice; // quando encontra armazena o indice
     maiorNumero = numeros[indiceMaior];     
    }   
    
  }
  for(let indice2 in numeros){
    if (maiorNumero <= numeros[indice2]) {// compara do primeiro ao ultimo            
        quantVezes= quantVezes+1;// conta quantas vezes aparece o maior numero            
       }
  }
  //console.log("O Maior numero é: "+maiorNumero);
  //console.log("Tem: "+quantVezes);
  return quantVezes;
 
}
//let result = highestCount(numeros);
//console.log(result);

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  if(cat1==cat2){
      return "os gatos trombam e o rato foge";    
  }else if(mouse>cat2 && cat2>cat1){// rato esta acima do gato 2 e gato 2 esta acima do gato1
    return "cat2";
  }else if(mouse>cat1 && cat1>cat2){ // rato está acima do gato 1 e gato 1 esta acima do gato2
    return "cat1";    
  }else if(cat1>mouse && mouse>cat2){ // rato esta no meio. Entre gato 1 e o gato 2.
    if((cat1-mouse)>(mouse-cat2)){ // se a distancia entre o gato 1 e o rato for maior que a distancia entre o rato e gato2
        return "cat2"; // retorna gato 2
    } else{
      return "os gatos trombam e o rato foge"; 
    }     
  }else if(cat2>mouse && mouse>cat1){ // rato esta no meio. Entre gato 2 e o gato 1.
      if((cat2-mouse)>(mouse-cat1)){ // se a distancia entre o gato 2 e o rato for maior que a distancia entre o rato e gato1
          return "cat1"; // retorna gato 1
      }else{
          return"os gatos trombam e o rato foge";
      }       
  
  }else if(cat1>cat2 && cat2>mouse){ // gato 1 está acima do gato 2. Gato 2 acima do rato
      return "cat2";
  
  }else if(cat2>cat1 && cat1>mouse){ // gato 2 está acima do gato 1. Gato 1 acima do rato
      return "cat1";
  }
 else{
      return "Nada acontece";
    }

}
//let result = catAndMouse(1,0,2);
//console.log(result);

// Desafio 8
let dados = [2, 15, 7, 9, 45];
function fizzBuzz(d) {
  // seu código aqui
  let resultado =[];
  for (let i = 0; i <d.length; i +=1){
    if(d[i] % 3 === 0 && d[i] % 5 === 0){
      resultado.push("fizzBuzz");     
    }else if(d[i] % 3 === 0){
      resultado.push("fizz");     
    }else if(d[i] % 5 === 0){
      resultado.push("buzz");      
    }else{
     resultado.push("bug!");     
    }    
  }
  return resultado;
}
let result = fizzBuzz(dados);
console.log(result);

// Desafio 9
let texto = "hi there";
function encode(texto) {  
   // seu código aqui
  let codificado ="";
  let crypto="";
   for (let i in texto){
     let letra = texto[i];
    switch(letra){
      case "a":
        crypto = "1";
        codificado+=crypto;       
      break;
      case "e":
        crypto = "2";
        codificado+=crypto;        
      break;
      case "i":
        crypto = "3";
        codificado+=crypto;       
      break;
      case "o":
        crypto = "4";
        codificado+=crypto;        
      break;
      case "u":
        crypto = "5";
        codificado+=crypto;       
        break
      default:
        codificado+=texto[i];       
      }     
    
  }   
  return codificado;
}
let result1 = encode(texto);
console.log("Mensagem criptografada: "+result1);

let txtCodificado = "h3 th2r2";

function decode(txtCodificado) {
  // seu código aqui
  let mensagem ="";
  let letraCrypto="";
   for (let i in txtCodificado){
     letraCrypto = txtCodificado[i];
   switch(letraCrypto){
     case "1":
      letraCrypto = "a";
      mensagem+=letraCrypto;  
     break;
     case "2":
      letraCrypto = "e";
       mensagem+=letraCrypto;
     break;
     case "3":
      letraCrypto = "i";
       mensagem+=letraCrypto;     
     break;
     case "4":
      letraCrypto = "o";
       mensagem+=letraCrypto;  
     break;
     case "5":
      letraCrypto = "u";
       mensagem+=letraCrypto; 
       break
     default:
      mensagem+=txtCodificado[i];
     }    
   
 }   
 return mensagem;
}
let result2 = decode(txtCodificado);
console.log("Mensagem decodificada: "+result2);

// Desafio 10
let t = ['React', 'Jest', 'HTML','CSS'];
let name ='Lucas';
function techList(t,name) {
  // seu código aqui
  if(t.length === 0){
    return 'Vazio!';
  }
let aprendizado = [] // cria o array para armazenar os objetos
let tecnologiasAZ = t.sort();// organiza em ordem alfabética as tecnologias
 
  for (let x in tecnologiasAZ){
    let vouAprender = { // cria objeto com o que vou aprender
        tech:tecnologiasAZ[x], // adiciona a tecnologia
        name,// adiciona o nome do aluno
    }
   aprendizado.push(vouAprender); // adiciona no array aprendizado o objeto vouAprender
   
  }
  return aprendizado;
}
//let result = techList(t,name);
//console.log(result);

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
