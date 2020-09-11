// Desafio 1
function compareTrue(a,b) {
  if( a === true && b === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height){
  return calcArea = (base*height)/2; 
}

// Desafio 3
function splitSentence(a) {
  let splitSentence = a.split(" ");
   return splitSentence
}

// Desafio 4
function concatName(array) {
  let n = array.length -1;
    let a = array[n]; 
    let b = array[0]
    return concatName = (`${a}, ${b}`)
}

// Desafio 5
function footballPoints(wins,ties) {
  return footballPoints = (wins*3+ties)
}

// Desafio 6
function highestCount(arr) {
     
  let newarr = arr.sort();
  let maior = arr[arr.length -1];
  let cont = 0;
  for (var i = 0, j = arr.length; i < j; i++){
      if(arr[i] == maior){
          cont += 1;
      }    
 }
 return cont;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let tes1 = Math.abs(mouse-cat1)
  let tes2 =  Math.abs(mouse-cat2)
   if( tes1== tes2 ){
        return "os gatos trombam e o rato foge"
   } else if (tes1 > tes2){
       return "cat2"
   } else if (tes1 < tes2) {
       return "cat1"
   }
}

// Desafio 8
function fizzBuzz(array) {
   
  let n=[];

  for(let i =0 , j = array.length; i<j; i +=1){
      if (array[i] % 3 == 0 && array[i] % 5 ==0){
          n[i] = "fizzBuzz";
      } else if(array[i] % 3 == 0){ 
          n[i] = "fizz";
      } else if (array[i] % 5 == 0){
          n[i] = "buzz";
      } else {
          n[i] = "bug!";
      }

  }
  return n
}

// Desafio 9
function encode(str1) {
  let array = [];
  let str2 = "";
  array = splitSentence = str1.split("")
  
  for(let i = 0, j = array.length; i<j; i +=1 ){
       switch (array[i]) {
          case "a":
              array[i] = "1"
              break;
          case "e":
              array[i] ="2"
              break;
          case "i":
              array[i] ="3"
              break;
          case "o":
              array[i] ="4"
              break;
          case "u":
              array[i] ="5"
              break;
           default:
               break;
       }
   }

   for(let i = 0, j = array.length; i<j; i +=1 ){
   str2 += array[i]}
   return str2
}

function decode(str1) {
  let array = [];
  let str2 = "";
  array = splitSentence = str1.split("")
  
  for(let i = 0, j = array.length; i<j; i +=1 ){
       switch (array[i]) {
          case "1":
              array[i] = "a"
              break;
          case "2":
              array[i] ="e"
              break;
          case "3":
              array[i] ="i"
              break;
          case "4":
              array[i] ="o"
              break;
          case "5":
              array[i] ="u"
              break;
           default:
               break;
       }
   }

   for(let i = 0, j = array.length; i<j; i +=1 ){
   str2 += array[i]}
   return str2
}

// Desafio 10
function techList(array,name) {
  if(array == 0){
      return "Vazio!"
  }
  array = array.sort()
  let ob = [];
  

  for(let i = 0, j = array.length; i<j; i +=1 ){
      ob[i] = {tech: array[i],
              name: name,
      }
  }
  return ob;
}

// Desafio 11
function generatePhoneNumber(array) {
  if(array.length != 11){
      return "Array com tamanho incorreto."
  }
  let array2 = [];

  for(let i = 0; i < array.length; i++){
    let cont = 0;  
      let rep = false;

      for(let z = 0; z < array2.length; z++){ // parte de código copiado de https://pt.stackoverflow.com/questions/230209/como-verificar-e-imprimir-valores-que-se-repetem-em-um-vetor
          if(array2[z] == array[i]){
          rep = true
          }
      }  
      if(rep == false){
          array2.push(array[i])
          for(let j = 0; j < array.length; j++){
              if(array[i] == array[j]){ 
                  cont++
                  if(cont>=3 || array[i]<0 || array[i]>9) {
                      return "não é possível gerar um número de telefone com esses valores"
              }
              }
    
          }
          
    }

  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  let a = lineA;
  let b = lineB;
  let c = lineC;
  let ab = Math.abs(lineA-lineB);
  let bc = Math.abs(lineB-lineC);
  let ac = Math.abs(lineA-lineC);
  let res = ((bc<a) && (a<b+c) || (ac<b) && (b<a+c) ||(ab<c) && (c<a+b))
  
  
  return res   
}

// Desafio 13
function hydrate(string) {
  let x = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let z = 0
  
  for(let i in string) {
      for( let j in x ){
          if(string[i] === x[j]){
              z += parseInt(x[j], 10);
          }
      }
  }
  if (z === 1){
      return "1 copo de água"
  } else {
      return `${z} copos de água`
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
