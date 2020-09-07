// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
} else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let calculoArea = (base * height) / 2;
  return calculoArea;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ')
}

// Desafio 4
function concatName(word) {
  lastAndFirst = word[word.length - 1] + ', ' + word[0];
    return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vencidos = wins * 3;
    let empatados = ties * 1;
return vencidos + empatados;
}

// Desafio 6
// Referência Freecode Camp material sobre Math.max.apply() 
function highestCount(numbers) {
  let greaterNumber = Math.max.apply(null, numbers);
  let counter = 0;
  for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] === greaterNumber) {
          counter += 1;
    }
  }
  return counter
}

// Desafio 7
// Math.abs()
function catAndMouse(mouse, cat1, cat2) {
  let catUmPega = Math.abs(cat1 - mouse);
  let catDoisPega = Math.abs(cat2 - mouse)
  let response = ""; 

  if (catUmPega < catDoisPega) {
    response = 'cat1'
  } else if (catDoisPega < catUmPega) {
    response = 'cat2'
  } else if (catUmPega === catDoisPega) {
    response = 'os gatos trombam e o rato foge'
  }
  return response
}
console.log(catAndMouse(8,3,4))

// Desafio 8
function fizzBuzz(arr) {
  let numbersArr = [];
for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
        numbersArr[i] = 'fizzBuzz'
} else if (arr[i] % 3 == 0) {
  numbersArr[i] = 'fizz'
} else if(arr[i] % 5 == 0) {
  numbersArr[i] = 'buzz'
} else {
  numbersArr[i] = 'bug!'
}
}
return numbersArr
}

// Desafio 9
//referencia de conteúdo no dev media sobre o .replace()
function encode(str) {
    str = str.replace(/a/g, 1);
    str = str.replace(/e/g, 2);
    str = str.replace(/i/g, 3);
    str = str.replace(/o/g, 4);
    str = str.replace(/u/g, 5);

return str
}

function decode(str) {
    str = str.replace(/1/g, 'a');
    str = str.replace(/2/g, 'e');
    str = str.replace(/3/g, 'i');
    str = str.replace(/4/g, 'o');
    str = str.replace(/5/g, 'u');

return str
}

// Desafio 10
/* metodos sort() e .push() para ordenar e adicionar um novo elemento no array (aqui nos ajudaria a criar 
  o objeto das techs)*/
function techList(techs, name) {
  let response = [];
  let techsOrdened = techs.sort();
  if (techs.length <= 0) {
    response = 'Vazio!'
  } else {
    for (let i in techs) {
    response.push({
          tech: techs[i],
          name: name,
        })
  }
    }
  return response
    }
// console.log(techList(["SQL", "HTML"], "Bruna"))

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
