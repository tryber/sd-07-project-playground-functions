// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
      return(true)
  } else {
      return(false)
  }

}

// Desafio 2
function calcArea(base, height) {
  let aux = base*height/ 2
    return(aux)
}

// Desafio 3
function splitSentence(trybe) {
  let resultado = trybe.split(" ");
  return(resultado)
}

// Desafio 4
function concatName(arrDeString) {
  let first = [...arrDeString].shift();
  let last = [...arrDeString].pop();
  let concatLastFirst = last + ", " + first; 
  return(concatLastFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
let vit = wins * 3;
let emp = ties * 1;
let points = vit + emp;
return(points)
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0 
  let max = Math.max(...arrayNumbers);

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] == max) {
      count = count+1
      }
}
return(count) 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let scat1 = Math.abs(cat1 - mouse);
  let scat2 = Math.abs(cat2 - mouse); 
  
  if (scat1 < scat2) {
      return("cat1")
  } else if (scat2 < scat1) {
      return("cat2")
  } else {
      return("os gatos trombam e o rato foge")
  }
}


// Desafio 8
function fizzBuzz(numeros) {
let retorno = []
 for (let i = 0; i < numeros.length; i++) {
   if (numeros[i] % 3 === 0 && numeros[i] % 5 !== 0) {  
    retorno.push("fizz")
  } else if (numeros[i] % 5 === 0 && numeros[i] % 3 !== 0) {
    retorno.push("buzz")
  } else if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
    retorno.push("fizzBuzz")
  } else {
    retorno.push("bug!")
  }
} 
return(retorno);
}

// Desafio 9
function encode(string) {
  let palavraArray = string;
  let newArray = [];
  for (i in palavraArray){
    switch (palavraArray[i]) {
      case 'a':
        newArray.push("1")
        break;
      case 'e':
        newArray.push("2")
        break;
      case 'i':
        newArray.push("3") 
        break;
      case 'o':
        newArray.push("4")
        break;
      case 'u':
        newArray.push("5") 
        break;
      default:
        newArray.push(palavraArray[i])
        break;
    }
    
  }
  let newString = newArray.join("")
  return newString;
}

function decode(string) {
  // seu código aqui
  let palavraArray = string;
  let newArray = [];
  for (i in palavraArray){
    switch (palavraArray[i]) {
      case '1':
        newArray.push("a")
        break;
      case '2':
        newArray.push("e")
        break;
      case '3':
        newArray.push("i") 
        break;
      case '4':
        newArray.push("o")
        break;
      case '5':
        newArray.push("u") 
        break;
      default:
        newArray.push(palavraArray[i])
        break;
    }
    
  }
  let newString = newArray.join("")
  return newString;
}

// Desafio 10
  function techList(tecnologias, name) {
    let objetos = [];
    let objeto = {
        tech: "NomeTech",
        name: "nome",
    }
    let tecnologiasEmOrdem = tecnologias.sort();
    for (let i in tecnologiasEmOrdem) {
        objeto = {
            tech: tecnologiasEmOrdem[i],
            name: name,
        }
        objetos.push(objeto);
        objeto = 0;
    }
    if (tecnologias.length === 0){
        return 'Vazio!';
    } else {
        return objetos;
    }
  }
  


// Desafio 11
function generatePhoneNumber() {

}


// Dwsafio 12 

function triangleCheck(lineA, lineB, lineC) {
  let retorno = false;
  if (lineA < (lineB + lineC) &&
      lineB < (lineA + lineC) &&
      lineC < (lineB + lineA) &&
      lineA > Math.abs(lineB - lineC) &&
      lineB > Math.abs(lineA - lineC) &&
      lineC > Math.abs(lineB - lineA)) {
          retorno = true
  } else {
    retorno = false
  }
  return retorno;
}
// Desafio 13

  function hydrate(drink) {
    let num = drink.match(/\d/g);
    let newNum = []
    for (i in num){
        newNum.push(parseInt(num[i]))
    }
    let total = newNum.reduce(function(acumulador, valorAtual, index, array) {
        return acumulador + valorAtual;
      });
    if (total === 1) {
        return total + " copo de água"
    } else {
        return total + " copos de água"
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
