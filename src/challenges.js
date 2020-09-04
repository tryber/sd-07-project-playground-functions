// Desafio 1
function compareTrue(param, param1) {
  // Função opedor de lógico 
  if(param === true && param1 === true) {
    return true;
  }else {
    return false; 
  }
}

// Desafio 2
function calcArea(base, height) {
// Função que calcula a área
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  // Função separa frases em palavras
  let result = text.split(' ');

  return result;
}

// Desafio 4
function concatName(strArray) {
  // Função concatena 2 stings
  let concStr = [...strArray].shift();
  let concStr2 = [...strArray].pop();
  return `${concStr2}, ${concStr}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let victory = 0;
  let scoreTies = 0
  for (let i = 0; i < wins; i+=1){
      victory += 3;
  }
  for (let i = 0; i < ties; i +=1){
      scoreTies +=1
  }
  let points = scoreTies + victory;

  return points;
}

// Desafio 6
//Função descobre qual maior numero do array e conta quantas vezes ele se repete dentro do mesmo.
function highestCount(numbers) {
  let bigNumber = Math.max.apply(null, numbers)//Maior numero 
  let numberRepeat = 0;
  for (let i in numbers) {//verifica ocorrencias
     if (bigNumber === numbers[i]) {
       numberRepeat++;
         }
     }
     return numberRepeat;
}
    
// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2 ;
  if(Math.sign(distanceCat1) == -1 ){
      distanceCat1 = distanceCat1 * -1
  }else if(Math.sign(distanceCat2) == -1) {
     distanceCat2 = distanceCat2 * -1;
  }
  if (distanceCat1 < distanceCat2) {
      return "cat1";
  }else if (distanceCat1 == distanceCat2 ) {
      return "os gatos trombam e o rato foge"
  }else {
      return "cat2";
  }
      
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let divide = [3,5];

  for (let i in array) {
      if(array[i] % divide[0] == 0 && array[i] % divide[1] == 0){
          array[i] = "fizzBuzz";
      } else if(array[i] % divide[0] == 0) {
          array[i] = "fizz";
      } else if(array[i] % divide[1] == 0) {
          array[i] = "buzz";
      } else{
          array[i] = "bug!"; 
      }
  }
  return array;
}

// Desafio 9
function encode(string) {
  // seu código aqui
if(typeof string == "string" ){ //Verifica se o parametro é string
 let str = string.split(""); // Passa todos os carateres para minusculo e transforma em array
 for(let i in str){ // Looping para percorrer todo array
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o'|| str[i] == 'u'){
      switch (str[i]){
          case 'a':
          str[i] = '1'
          break;

          case 'e':
          str[i] = '2'
          break;

          case 'i':
          str[i] = '3'
          break;

          case 'o':
          str[i] = '4'
          break;

          case 'u':
          str[i] = '5'
          break;
      }
    }
 }
return  str.join('')

}else {
 return('Não é um texto')
}
}

function decode(string) {
  if(typeof string == "string" ){ //Verifica se o parametro é string
      let str = string.split(""); // Passa todos os carateres para minusculo e transforma em array
      for(let i in str){ // Looping para percorrer todo array
          if(str[i] == '1' || str[i] == '2' || str[i] == '3' || str[i] == '4'|| str[i] == '5'){
              switch (str[i]){
                  case '1':
                  str[i] = 'a'
                  break;
       
                  case '2':
                  str[i] = 'e'
                  break;
       
                  case '3':
                  str[i] = 'i'
                  break;
       
                  case '4':
                  str[i] = 'o'
                  break;
       
                  case '5':
                  str[i] = 'u'
                  break;
       
              } 
          }
      }
      return str.join('')
  }
}

// Desafio 10
// Desafio 10
let tech = ['JavaScript','NodeJs', 'Python','Docker','AWS', 'React', 'ReactNative', 'Electron']
function techList(array, name) {
if(array.length >= 1){
  let result = [];
  let user = name;
  let techOrd = array.sort();
  for (let i = 0; i < techOrd.length; i+=1) {
    var obj = {"tech":techOrd[i],"name":user};  
    result.push(obj);  
    }
  return result;
}else{
  let out = "Vazio!";
 return out;
} 
}
    
techList(tech , 'Filipi')

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
