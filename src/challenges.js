// Desafio 1
function compareTrue(bol1, bol2) {
  return bol1 && bol2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  return palavra.split(' ');
}

// Desafio 4
function concatName(nomes) {
  let nomeArray = nomes;
  let result = [];
  for (let i = 0; i < nomeArray.length; i += 1) {
    nomeArray.splice(i + 1, nomes.length - 2);
  }
  for (let j = nomeArray.length - 1; j >= 0; j -= 1) {
    result.push(nomeArray[j]);
  }
  return result.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins;
  let empate = ties;
  if (vitoria > 0) {
    vitoria *= 3;
  }
  let result = vitoria + empate;
  return result;
}

// Desafio 6
function highestCount(repeat) {
  let array = repeat;
  let maior = 0;
  let count = 0;
  maior = Math.max(...array);
  for (let i of array) {
    if (maior === i) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  let distancia1 = 0;
  let distancia2 = 0;
  let result = '';
  distancia1 = rato - gato1;
  distancia2 = rato - gato2;
  if (distancia1 < 0) {
    distancia1 *= (-1);
  } else if (distancia2 < 0) {
    distancia2 *= (-1);
  }
  if (distancia1 > distancia2) {
    result = 'cat2';
  } else if (distancia1 < distancia2) {
    result = 'cat1';
  } else if (distancia1 === distancia2) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzzBasic(num) {
  let palavra = '';
  if (num % 3 === 0) {
    palavra = 'fizz';
  } else if (num % 5 === 0) {
    palavra = 'buzz';
  } else {
    palavra = 'bug!';
  }
  return palavra;
}
function fizzBuzz(number) {
  let numbers = number;
  let palavra = '';
  let result = [];
  for (let i of numbers) {
    if (i % 3 === 0 && i % 5 === 0) {
      palavra = 'fizzBuzz';
      result.push(palavra);
    } else {
      result.push(fizzBuzzBasic(i));
    }
  }
  return result;
}

// Desafio 9
function encodeDecode(palavras, vogais) {
  let igual = [];
  for (let i = 0; i < palavras.length; i += 1) {
    igual.push(palavras[i]);
    for (let key in vogais) {
      if (key === igual[i]) {
        igual[i] = vogais[key];
      }
    }
  }
  return igual.join('');
}
function encode(palavras) {
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  return encodeDecode(palavras, vogais);
}
function decode(frase) {
  let numeros = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  return encodeDecode(frase, numeros);
}

// Desafio 10
function techList(tech, name) {
  let stack = tech;
  let nome = name;
  let result = [];
  let vazio = '';
  if (stack.length === 0) {
    vazio = 'Vazio!';
    return vazio;
  }
  stack.sort();
  for (let valor of stack) {
    let objeto = {
      tech: valor,
      name: nome,
    }
    result.push(objeto);
  }
  return result;
}

// Desafio 11
function geraNumber(tel) {
  let parte1 = tel.slice(0, 2);
  let parte2 = tel.slice(2, 7);
  let parte3 = tel.slice(7, 11);
  let numberPhone = `(${parte1.join('')}) ${parte2.join('')}-${parte3.join('')}`;
  return numberPhone;
}
function countNumber(tel) {
  let count = 0;
  for (let i = 0; i < tel.length; i += 1) {
    for (let j = 1; j < i; j += 1) {
      if (tel[i] === tel[j]) {
        count += 1;
      }
    }
  }
  return count;
}
function repeatNumber(tel) {
  let mensagem = '';
  if (countNumber(tel) > 2) {
    mensagem = 'não é possível gerar um número de telefone com esses valores';
    return mensagem;
  }
  return geraNumber(tel);
}
function testeNumberTwo(tel) {
  let mensagem = '';
  for (let i = 0; i < tel.length; i += 1) {
    if (tel[i] < 0 || tel[i] > 9) {
      mensagem = 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return mensagem;
}
function testeNumber(tel) {
  let mensagem = '';
  if (tel.length !== 11) {
    mensagem = 'Array com tamanho incorreto.';
  } else {
    return testeNumberTwo(tel);
  }
  return mensagem;
}
function generatePhoneNumber(phone) {
  let tel = phone;
  for (let i = 0; i < tel.length; i += 1) {
    if (tel[i] < 0 || tel[i] > 9) {
      return testeNumber(tel);
    }
  }
  if (tel.length !== 11) {
    return testeNumber(tel);
  }
  return repeatNumber(tel);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) &&
  (lineC < lineB + lineA)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function contador(count) {
  let result = '';
  if (count === 0) {
    result = 'Não bebeu nada!';
  } else if (count > 1) {
    result = `${count} copos de água`;
  } else {
    result = `${count} copo de água`;
  }
  return result;
}
function hydrate(bebidas) {
  let drink = bebidas
  let count = 0;
  let reg = /\d+/g;
  let num = drink.match(reg);
  if (num === null) {
    num = [0];
  }
  for (let i of num) {
    if (parseInt(i, 10) > 0 && parseInt(i, 10) < 9) {
      count += parseInt(i, 10);
    }
  }
  return contador(count);
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
