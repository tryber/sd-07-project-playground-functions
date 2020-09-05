// Desafio 1
function compareTrue(a,b) {
  if(a == true && b == true){
    return true
  }else
  return false
}

// Desafio 2
function calcArea(base , height) {
  let area = (base * height) / 2
  return area
}

// Desafio 3
function splitSentence(string) {
  string = string.split(" ")//separa por espaços vazios
  return string
}

// Desafio 4
function concatName(ArrayStrings) {
  //let fimComeco = ArrayStrings[ArrayStrings.length - 1] + ' , ' + ArrayStrings[0]
  //return fimComeco
  let fim = ""
  let comeco = ""
  let junto = ""
  for(i = 0; i <= ArrayStrings.length - 1 ; i+= 1){
      if(ArrayStrings[0] ){
          comeco = ArrayStrings[0] 
      }if(ArrayStrings[ArrayStrings.length - 1]){
        fim = ArrayStrings[ArrayStrings.length - 1]
      }
          
  }
  junto = fim + ", " + comeco
  
  return junto
  
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontos = 0
  let vitorias = wins*3
  let empates = ties*1
  if(vitorias > 0 ){
    pontos += vitorias
  if(empates > 0){
    pontos += empates
  }
  
  }
  return pontos
}

// Desafio 6
function highestCount(numeros) {
  let maior = 0
  let maiorNumero = 0
  let contador = 0
  for(let i = 0 ; i <= numeros.length ; i += 1){
    if(numeros[i] > numeros[maior]){
      maior = i  
    } 
  }
  maiorNumero = numeros[maior]
  for(valor in numeros){
      if(numeros[valor] == maiorNumero){
          contador += 1
      }
  }

  return contador
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if((cat1 - mouse)**2 === (cat2 - mouse)**2){
    return "os gatos trombam e o rato foge"
}
if((cat1 - mouse)**2 > (cat2 - mouse)**2){
    return "cat2"
}
if((cat1 - mouse)**2 < (cat2 - mouse)**2){
    return "cat1"
}


}
// Desafio 8
function fizzBuzz(lista) {
  let novaLista = []
  for(let i = 0; i < lista.length; i += 1) {
    if (lista[i] % 3 == 0 && lista[i] % 5 != 0) {
        novaLista.push("fizz");
    }
    else if (lista[i] % 5 == 0 && lista[i] % 3 != 0) {
        novaLista.push("buzz");
    }
    else if (lista[i] % 3 == 0 && lista[i] % 5 == 0){
        novaLista.push("fizzBuzz");
    }
    else {
        novaLista.push("bug!");
    }
  }
  return novaLista;
}

// Desafio 9
function encode(palavraTroca) {
  palavraTroca = palavraTroca
    for(i=0 ; i <= palavraTroca.length ; i+= 1){
       palavraTroca = palavraTroca.replace('a','1').replace('e','2').replace('i','3').replace('o','4').replace('u','5')
    }

    return palavraTroca
}


function decode(string) {
  string = string
  for(i=0 ; i <= string.length ; i+= 1){
      string = string.toString().replace('1','a').replace('2','e').replace('3','i').replace('4','o').replace('5','u')
  }

  return string
}

// Desafio 10
function techList(listaAprender,name) {
  if (listaAprender == ""){
    return "Vazio!"
}
listaAprender = listaAprender.sort()
let listaNova = []
//let object1={"tech":listaAprender[0],"name":name};
//let object2={"tech":listaAprender[1],"name":name};
//let object3={"tech":listaAprender[2],"name":name};
//let object4={"tech":listaAprender[3],"name":name};
//let object5={"tech":listaAprender[4],"name":name};
//listaNova.push(object1,object2,object3,object4,object5); 
for(objetos in listaAprender){
    listaNova[objetos] = { "tech" : listaAprender[objetos] , "name" : name
    }
}
return listaNova;
}


// Desafio 11
function generatePhoneNumber(tel) {
  if(tel.length != 11){
    return ("Array com tamanho incorreto.")
}

let cont = {}
for (let valores of tel) {
    // se o número já tinha uma contagem, atualiza somando 1
    if (cont.hasOwnProperty(valores)) {
        cont[valores] += 1;
    } else cont[valores] = 1; // senão, inicia a contagem do número com 1
}

// encontrar a maior ocorrência
let max = Math.max.apply(null, Object.values(cont));//conta os valores e não os indices
console.log(max)
if(max >= 3 ){
  
    return "não é possível gerar um número de telefone com esses valores" 
}

for(i = 0 ; i <= 11 -1; i += 1){
    if( tel[i] < 0 || tel[i] > 9){
        return "não é possível gerar um número de telefone com esses valores" 
    }
}
let numeroTel = []

for(i = 0 ; i <= 11 -1; i += 1){
    if( i == 0){
        numeroTel += "(" + tel[i] 
    }
    else if( i == 1 ){
        numeroTel +=  tel[i] + ")" + " "
    }
    else if(i < 7 && i > 1){
        numeroTel += (tel[i])
    }
    if(i == 6){
        numeroTel += "-"
    }
    if(i > 6 ){
        numeroTel += tel[i]
    } 
}
return numeroTel

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
