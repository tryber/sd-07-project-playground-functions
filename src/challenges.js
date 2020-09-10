// Desafio 1
function compareTrue(bool1, bool2) {

  if(bool1 === true && bool2===true){
    
    return true;
      
  }else{

    return false;
  }

}

// Desafio 2
function calcArea(base, height) {
  
  return (base * height)/2
}

// Desafio 3
function splitSentence(str) {
  let resp;
  
  resp= str.split(" "); // retira o espaço e retorna o resto em um array
  return resp;
}

// Desafio 4
function concatName(array) {
  
  let Resultado= " ";
  
    //return (array[0] + ', ' + array[array.length-1]);
    Resultado = (array[array.length-1] + ', ' + array[0]);
  
  return Resultado;
  
  
}

//let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
//concatName(array);

// Desafio 5
function footballPoints(wins, ties) {

let resp = wins *3 + ties;

    return resp;
  
}



// Desafio 6
function highestCount(array) { 
  let resp =0;
  let maior= array[0];

  for(let i=0; i < array.length; i+= 1){
      
      if(maior < array[i+1]){

         maior = array[i+1];
      }
      
  }
  
  for(let i=0; i < array.length; i+= 1){
      
    if(maior === array[i]){

       resp = resp += 1;
    }
    
  }
  return resp;
  
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let dCat1 =0;
  let dCat2 =0;
  let Resp =0;
  

dCat1 = cat1 - mouse;
dCat2 = cat2 - mouse;

if(dCat1 < 0){

  dCat1 *= -1;
}

if (dCat2 < 0){
   dCat2 *= -1;
}


    if(dCat1 < dCat2){
      Resp = "cat1";
      
         
    }
    else if (dCat2 < dCat1){
        
        Resp = "cat2";
               
    }
    else {     
      Resp = "os gatos trombam e o rato foge";
    
      
    }
    
  return Resp;
  
    
  }
 //catAndMouse(1,0,2);


  
// Desafio 8
function fizzBuzz(vet) {
  // seu código aqui
  let vet1=[];
  for(let i=0; i< vet.length; i +=1){
   
    if (vet[i]% 3 === 0 && vet[i]% 5 === 0){

      vet1[i]= "fizzBuzz";
    }
    else if(vet[i]% 3 === 0){

      vet1[i]= "fizz";

    }
    else if (vet[i]% 5 === 0){

      vet1[i]= "buzz";
    }
        
    else {

      vet1[i]= "bug!";
    }
    
  }
   return vet1;

}



// Desafio 9
function encode(str) {
  // seu código aqui

let array

array= str.split("");//transferi cada letra da string pra uma posição do array.

let result = "";


  for(let i=0; i< array.length; i +=1){
   
    if (array[i] === "a"){

      array[i]=1;
      result = result + array[i];
    }

    else if(array[i] === "e"){
      
     
      array[i]=2;
      result = result + array[i];
    }
    else if (array[i]=== "i"){
    
      
      array[i]=3;
      result = result + array[i];
    }
        
    else if (array[i]=== "o"){
      
      
      array[i]=4;
      result = result + array[i];
       
    }
    else if (array[i] === "u") {
    
    array[i]=5;
    result = result + array[i];
  }
    else{

      result = result + array[i];

    }

        
  }

return result;
}


function decode(str) {
  // seu código aqui
  let array

  array= str.split("");//transferi cada letra da string pra uma posição do array.
  
  let result = "";
  
  
    for(let i=0; i< array.length; i +=1){
     
      if (array[i] === "1"){
  
        array[i]="a";
        result = result + array[i];
      }
  
      else if(array[i] === "2"){
        
       
        array[i]="e";
        result = result + array[i];
      }
      else if (array[i]=== "3"){
      
        
        array[i]="i";
        result = result + array[i];
      }
          
      else if (array[i]=== "4"){
        
        
        array[i]="o";
        result = result + array[i];
         
      }
      else if (array[i] === "5") {
      
      array[i]="u";
      result = result + array[i];
    }
      else{
  
        result = result + array[i];
  
      }
  
          
    }
  
  return result;
  }
 

// Desafio 10
function techList() {
  // seu código aqui
  idfgpdifpgodi
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
 
