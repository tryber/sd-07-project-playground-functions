// Desafio 1
function compareTrue(a,b) {
  if( a == true && b == true){
    return  true;
  }
  else if (a == false && b == false){
    return false;
  }
  else if( a == true && b == false){
    return false;
  }
    else if( a == false && b == true){
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(nomes) {
  nomes.splice(1, nomes.length-2 );
  nomes = nomes.reverse();
  ret =  nomes.join(", ");
  return ret;
}


// Desafio 5
function footballPoints(wins, ties) {
  wins = (wins * 3 );
  ties = (ties * 1 );
  return (wins + ties);
}

// Desafio 6
function highestCount(maior) {
  let top   = maior[0];
  let count = 0;
    for(let i in maior){
      if (top < maior[i]){
          top = maior[i];
      }
    }
    for(let cnt in maior){
      if(top == maior[cnt]){
        count += 1;
      }
    }
  return count;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = 0;
  let distCat2 = 0;
  if(cat1&&cat2<mouse||cat1<mouse&&cat2>mouse||cat1>mouse&& cat2<mouse||cat1&&cat2>mouse&&cat1!=cat2)
  {
      if(mouse - cat1 < 0)
          {distCat1 = ((mouse - cat1) * -1 )}
      else
          {distCat1 = (mouse - cat1)}
      if(mouse - cat2 < 0)
          {distCat2 = ((mouse - cat2) * -1 )}
      else
          {distCat2 = (mouse - cat2)}
      if(distCat1 > distCat2)
          {return "cat2"}
      else if(distCat2 > distCat1)
          {return "cat1"}
      else if (distCat1 == distCat2)
          {return"os gatos trombam e o rato foge"}
  }else if(cat1 == cat2);;
      {{return"os gatos trombam e o rato foge"}
    }
}  

// Desafio 8
function fizzBuzz(numeros) {
  let multiplos = [];
  for(let n in numeros){
    if (numeros[n] % 3 ==0 && numeros[n] % 5 == 0){
      multiplos.push("fizzBuzz");
    }
    else if(numeros[n] % 5 == 0){
      multiplos.push("buzz");
    }
    else if(numeros[n] % 3 == 0 ){
      multiplos.push("fizz");
    }
    else{
      multiplos.push("bug!");
    }
  }
  return multiplos;
}

// Desafio 9
function encode(texto) {
  let vogais = {"a":1,"e":2,"i":3,"o":4,"u":5};
  let encod = texto;
  for(let letra in encod){
    for(let vog in vogais){
      if(encod[letra] != " "){
        if (encod[letra] == vog){
          encod = encod.replace(texto[letra],vogais[vog]);
        }
      }
    }
  }
  return encod;
}

function decode(texto) {
  // seu código aqui
  let vogais = {1:"a",2:"e",3:"i",4:"o",5:"u"};
  let encod = texto;
  for(let letra in encod){
    for(let vog in vogais){
      if(encod[letra] != " "){
        if (encod[letra] == vog){
          encod = encod.replace(texto[letra],vogais[vog]);
        }
      }
    }
  }
  return encod;
}

// Desafio 10
function techList(tecnologias, name) {
  if(tecnologias.length != 0 )
  {
    tecnologias.sort()
    let capsula = [];
    for(i in tecnologias)
    {
      capsula[i] = dicionario =
      {
      tech: tecnologias[i],
      name: name,
      }
    }
  return capsula
  }
  else
  {
    return "Vazio!"
  }
}

// Desafio 11
function generatePhoneNumber(numeros) {
  if(numeros.length == 11){
    let listSaida = [];
    let NumeroRepetido = numeros.slice();
    for(let conf in NumeroRepetido.sort()){
        let count = 0;
        for(let i in numeros){
            if(NumeroRepetido[conf] == numeros[i]){
                count += 1
                if(count == 3){
                    return "não é possível gerar um número de telefone com esses valores"
                }
            }
            if(numeros[i] < 0 || numeros[i] > 9){
                    return "não é possível gerar um número de telefone com esses valores"
            }                
        }
    }
    for(let i in numeros){
        if(i == 0 ){
            listSaida.push(`(${numeros[i]}`)
        }
        if(i == 1 ){
            listSaida.push(`${numeros[i]})`)
        }
        if(i == 2 ){
            listSaida.push(` ${numeros[i]}`)
        }
        if(i == 3 ){
            listSaida.push(`${numeros[i]}`)
        }
        if(i == 4 ){
            listSaida.push(`${numeros[i]}`)
        }
        if(i == 5 ){
            listSaida.push(`${numeros[i]}`)
        }
        if(i == 6 ){
            listSaida.push(`${numeros[i]}`)
        }
        if(i == 7 ){
            listSaida.push(`-${numeros[i]}`)
        }
        if(i == 8 ){
            listSaida.push(`${numeros[i]}`)
        }
        if(i == 9 ){
            listSaida.push(`${numeros[i]}`)
        }
        if(i == 10 ){
            listSaida.push(`${numeros[i]}`)
        }
    }
  ret = listSaida.join("")    
  }else{
    return "Array com tamanho incorreto."
  }
return ret        
}


// Desafio 12
function triangleCheck(number1,number2,number3) {
    number1 = Math.abs(number1)
    number2 = Math.abs(number2)
    number3 = Math.abs(number3)
    let rediferença = Math.abs(number1 - number2)
    let resoma = Math.abs(number1 + number2)
    if(rediferença < number3 && number3 < resoma){
        let rediferença = Math.abs(number2 - number3)
        let resoma = Math.abs(number2 + number3)
            if(rediferença < number1 && number1 < resoma){
                let rediferença = Math.abs(number3 - number1)
                let resoma = Math.abs(number3 + number1)
            }
            if(rediferença < number2 && number2 < resoma){
                return true
            }
    }else{
        return false
    }    
}


// Desafio 13
function hydrate(string) {
  const busca = /\d+/g;
  const saida = string.match(busca)
  let listint = []
  for(let i in saida){
    listint.push(Number(saida[i]))
  }
let soma = listint.reduce((prevnumber, refer) => { return prevnumber + refer},0)
if( soma > 1){
return `${soma} copos de água`
  }
  else{
      return `${soma} copo de água`
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
