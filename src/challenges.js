// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;

}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');

}

// Desafio 4
function concatName(stringArray) {
  // seu código aqui
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;

}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + (ties * 1));

}

// Desafio 6
function highestCount(Array) {
  // seu código aqui
  let cont =[]
  for (let i = 0; i <= 9; i += 1) {
  let maior = Array.filter(x => x==(9-i))
  if (maior.length != 0) {
      cont = maior.length
      break
  }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(cat1 - mouse)
  let distCat2 = Math.abs(cat2 - mouse)
  if (distCat1 > distCat2) {
    return 'cat2';

  }
  else if (distCat2 > distCat1) {
    return 'cat1';

  }
  else if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';

  }

}

// Desafio 8
function fizzBuzz(numbersArray) {
  // seu código aqui
  let returnArray = []

  numbersArray.forEach(i => {
    if (i % 3 === 0 && i % 5 === 0) {
      returnArray.push('fizzBuzz')
    }
    else if (i % 3 === 0) {
      returnArray.push('fizz')
    }
    else if (i % 5 === 0) {
      returnArray.push('buzz')
    }
    else {
      returnArray.push('bug!')
    }
  })
  return returnArray;

}

// Desafio 9
function encode(code) {
  return code.split('').map(x => { return codeDecode(x, 1) }).join('');
}
function decode(decode) {
  return decode.split('').map(x => { return codeDecode(x, 2) }).join('');
}

function codeDecode(x,identify){
  let decode = ['a', 'e', 'i', 'o', 'u']
  let code = ['1', '2', '3', '4', '5']
  let result = []
  let compare = []
  if(identify === 1){
    result = code
    compare = decode
  }
  else if (identify === 2) {
    result = decode
    compare = code
  }
  compare.map((currentValue, index) => {
    if (currentValue === x) { return result[index] }})
  return x 
}


// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  let techs = [];

  for( let value of technologies.sort()) {
    techs.push({
      tech: value,
      name: name
    })

  }
  return techs;
}

function generatePhoneNumber(phone) {
  //checking repeated numbers
  if (phone.length != 11) { return 'Array com tamanho incorreto.' }
  else if (phone.find(function(telChar) { return telChar < 0 || telChar > 9 }) || belowZeroAboveNine(phone) >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  
  phone.splice(0,0,'(')
  phone.splice(3,0,') ')
  phone.splice(-4,0,'-')
  
  return phone.join('');

}

function belowZeroAboveNine(numbers) {
  let cont = 0
  for (let i = 0; i <= 9; i += 1) {
  let maior = numbers.filter(x => x==(i))
  if (maior.length > cont) { cont = maior.length }
  }
  return cont
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let acosA = Math.acos(((lineA**2)-(lineB**2)-(lineC**2))/(-2*lineB*lineC))
  let acosB = Math.acos(((lineB**2)-(lineA**2)-(lineC**2))/(-2*lineA*lineC))
  let acosC = Math.acos(((lineC**2)-(lineB**2)-(lineA**2))/(-2*lineB*lineA))

  let pi = Math.PI
  let angulos = acosA + acosB + acosC

  if (angulos == pi) {
      return true
  }

  return false

}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let auxString = 0;
  for (let char of string) {
    let charToNumTest = Number.isInteger(Number(char));
    if (charToNumTest) {
      auxString += Number(char);
    }
  }
  if (auxString === 1) {
    return `${auxString} copo de água`;
  }

  return `${auxString} copos de água`;

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
