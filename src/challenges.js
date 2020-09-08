// Desafio 1
function compareTrue(condicao1, condicao2) {
  // seu código aqui.
  if ((condicao1 == true)&&(condicao2 == true)){
    return(true)
  }
  else{
      return(false)
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let btriangulo = base
  let atriangulo = height
  let areadotriangulo = parseFloat((btriangulo * atriangulo) / 2)
  return (areadotriangulo)
}

// Desafio 3
function splitSentence(stringentrada) {
// seu código aqui
let arraydestring = stringentrada.split(" ")
return(arraydestring)
}

// Desafio 4
function concatName(arraydeentrada) {
  // seu código aqui
  let stringsaida = ""
  stringsaida = stringsaida + arraydeentrada[arraydeentrada.length - 1]
  stringsaida = stringsaida + ", "
  stringsaida = stringsaida + arraydeentrada[0]
    return(stringsaida)
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let pontos = (wins*3)+(ties)
  return(pontos)
}

// Desafio 6
function highestCount(arraydeentrada) {
  // seu código aqui
  let maior = 0
  let repeticoes = 0
  for(let i=0;i < arraydeentrada.length; i+=1){
    if (arraydeentrada[i] > maior)
      maior = arraydeentrada[i]
  }
  for(let i=0;i<arraydeentrada.length;i+=1){
    if (arraydeentrada[i] === maior)
    repeticoes = repeticoes + 1
  }
  return(repeticoes)
}



// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciacat1 = mouse - cat1
  let distanciacat2 = mouse - cat2
    if (distanciacat1 === distanciacat2)
      return("os gatos trombam e o rato foge")
    else if (distanciacat1 > distanciacat2)
          return("cat2")
        else
          return("cat1")       
}

// Desafio 8
function fizzBuzz(arraydeentrada) {
  // seu código aqui
  let arraydesaida = []
  for(let i = 0; i < arraydeentrada.length; i+=1){
    if ((arraydeentrada[i]%3 === 0 ) && !(arraydeentrada[i] % 5 === 0))
      arraydesaida.push("fizz")
    else if (!(arraydeentrada[i]%3 === 0 ) && (arraydeentrada[i] % 5 === 0))
          arraydesaida.push("buzz")
         else if((arraydeentrada[i]%3 === 0 ) && (arraydeentrada[i] % 5 === 0))
                arraydesaida.push("fizzBuzz")
              else
                arraydesaida.push("bug!")
  }
  return(arraydesaida)
}

// Desafio 9
stringdeentrada = "quero"
function encode(stringdeentrada) {
  // seu código aqui
  stringdeentrada = stringdeentrada.replace(/a/g,"1")
  stringdeentrada = stringdeentrada.replace(/e/g,"2")
  stringdeentrada = stringdeentrada.replace(/i/g,"3")
  stringdeentrada = stringdeentrada.replace(/o/g,"4")
  stringdeentrada = stringdeentrada.replace(/u/g,"5")
  return(stringdeentrada)
}
function decode(stringdeentrada) {
  // seu código aqui
  stringdeentrada = stringdeentrada.replace(/1/g,"a")
  stringdeentrada = stringdeentrada.replace(/2/g,"e")
  stringdeentrada = stringdeentrada.replace(/3/g,"i")
  stringdeentrada = stringdeentrada.replace(/4/g,"o")
  stringdeentrada = stringdeentrada.replace(/5/g,"u")
  return(stringdeentrada)
}

// Desafio 10
function techList() {
  // seu código aqui
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
function hydrate(stringdeentrada) {
  // seu código aqui
  let qtd = parseInt(stringdeentrada.match(/\d/g).join(''))
  let soma = 0
  for (let i = 0; i < qtd.length; i+=1){
    soma = soma + qtd[i]
  }
  let stringsaida = soma.toString() + "copos de água"
  return(stringsaida)
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