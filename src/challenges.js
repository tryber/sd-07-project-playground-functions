// Desafio 1 -
function compareTrue(value1, value2) {
  let estate = false;
  if (value1 && value2) { // valida se os dois itens são verdadeiros e troca o estado da variável
    estate = true;
  } 
    return estate;
}
// console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2; // cálculo básico da área do triângulo.
  return area;
}
// console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(word) {
  let arrayWord = word.split(' '); // esta função já divide uma string de acordo com o separador que vc define. Neste caso está configurado para dividir a string sempre que encontrar um espaço. Ele também cria um array e coloca cada nova string como novos elementos.
  return arrayWord;
}
// console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) { // recebe um array como parâmetro
  let primeiroNome = array[0]; // coloca o primeiro elemento do array na variável
  let ultimoNome = array[array.length - 1]; // coloca o último elemento (tamanho do array - 1) na variável
  return `${ultimoNome}, ${primeiroNome}`; // concatena o primeiro e o último nome com uma vírgula
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) { // recebe o número de vitórias e empates como parâmetro
  let points = (wins * 3) + ties; // cálculo do número de pontos conquistados
  return points;
}
// console.log(footballPoints(10, 3));

// Desafio 6
function highestCount(num) {
  let maiorValor = 0; // guarda o maior valor do array
  let contador = 0; // guarda o número de vezes que o valor apareceu

  for (let i in num) {
    if (num[i] >= maiorValor) {
      maiorValor = num[i]; // percorre o array e armazena na variável o maior valor que encontra
    }
  }
  for (let j in num) {
    if (num[j] === maiorValor) {
      contador += 1; // percorre novamente e sempre que encontrar o maior valor, incremente 1 na variável contador.
    }
  }
  return contador;
}
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let situation = "";
  let distCat1 = Math.abs(mouse - cat1); // distância do rato para o gato 1 (valor absoluto)
  let distCat2 = Math.abs(mouse - cat2); // distância do rato para o gato 2 (valor absoluto)

  if (distCat1 < distCat2) {
    situation = 'cat1';
  } else if (distCat2 < distCat1) {
    situation = 'cat2';
  } else {
    situation = 'os gatos trombam e o rato foge';
  }
  return situation;
}
// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(num) {
  let arrayNovo = [];
  for (let i = 0; i < num.length; i += 1) { // percorre o array todo
    if (num[i] % 3 === 0 && num[i] % 5 === 0) { // se for divisível por 3 e por 5
      arrayNovo.push('fizzBuzz'); // insere esta string
    } else if (num[i] % 3 === 0) { // se for divisível só por 3
      arrayNovo.push('fizz');
    } else if (num[i] % 5 === 0) { // se for divisível só por 5
      arrayNovo.push('buzz');
    } else { // se não for divisível nem por 3 nem por 5
      arrayNovo.push('bug!');
    }
  }
  return arrayNovo;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(word) {
  let armazena = []; // cria um array para receber as letras da palavra
  let wordEncode = '';
  for (let i = 0; i < word.length; i += 1) {
    armazena.push(word[i]); // adiciona uma letra em cada posição do array
  }

  for (let i = 0; i < armazena.length; i += 1) { // testa qual é cada letra e insere numa variável como palavra.
    if (armazena[i] === 'a'){
      wordEncode = `${wordEncode}1`;
    } else if (armazena[i] === 'e') {
      wordEncode = `${wordEncode}2`;
  } else if (armazena[i] === 'i') {
    wordEncode = `${wordEncode}3`;
  } else if (armazena[i] === 'o') {
    wordEncode = `${wordEncode}4`;
  } else if (armazena[i] === 'u') {
    wordEncode = `${wordEncode}5`;
  } else {
    wordEncode = `${wordEncode}${armazena[i]}`; // se não for vogal ele insere a própria letra
  }
  }
  return wordEncode;
}

function decode(word) {
  let armazenaLetras = [];
  let wordDecode = '';
  for (let i = 0; i < word.length; i += 1) {
    armazenaLetras.push(word[i]);
  }

  for (let i = 0; i < armazenaLetras.length; i += 1) {
    if (armazenaLetras[i] === '1'){
      wordDecode = `${wordDecode}a`;
    } else if (armazenaLetras[i] === '2') {
      wordDecode = `${wordDecode}e`;
  } else if (armazenaLetras[i] === '3') {
    wordDecode = `${wordDecode}i`;
  } else if (armazenaLetras[i] === '4') {
    wordDecode = `${wordDecode}o`;
  } else if (armazenaLetras[i] === '5') {
    wordDecode = `${wordDecode}u`;
  } else {
    wordDecode = `${wordDecode}${armazenaLetras[i]}`;
  }
  }
  return wordDecode;
}
// console.log(encode("hi there!"));
// console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(nomeTech, name) {
  let novaLista = [];
  nomeTech.sort(); // Ordenando o Array primeiro
  if (nomeTech.length === 0) { // Verificando se o array está vazio
    return 'Vazio!';
  } else {
    for (let i in nomeTech) { // A cada iteração adiciona o objeto na lista
    novaLista.push(techNome = {
      tech: nomeTech[i],
      name: name,
    })
  }
    return novaLista;
  }
}
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Lucas"));


// Desafio 11
function generatePhoneNumber(numbers) {
  let numTel = '(';
  let numInvalido = false;
  let repetido = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
      numInvalido = true;
    }
  }

  for (let i = 0; i < numbers.length; i += 1) { // Verifica o número que se repete mais vezes
    let cont = 1;
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] === numbers[j]) {
        cont += 1;
      }
      if (cont > repetido) { // armazena o número que mais se repete
        repetido = cont;
      }
    }
  }

  if (numbers.length !== 11) { // se o tamanho do array for diferente de 11
    return 'Array com tamanho incorreto.';
  } else if (numInvalido === true || repetido >= 3) {
    return 'não é possível gerar um número de telefone com esses valores'
  } else {
    for (let i = 0; i < 2; i += 1) {
    numTel += numbers[i];
  }
    numTel = `${numTel}) `;

    for (let j = 2; j < 7; j += 1) {
    numTel += numbers[j];
  }
    numTel = `${numTel}-`;

    for (let k = 7; k < 11; k += 1) {
    numTel += numbers[k];
  }
    return numTel;
  }
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  let difAB = Math.abs(lineA - lineB);
  let difBC = Math.abs(lineB - lineC);
  let difCA = Math.abs(lineC - lineA);
  let somaBC = lineB + lineC;
  let somaAC = lineA + lineC;
  let somaAB = lineA + lineB;

  if (lineA < somaBC && lineB < somaAC && lineC < somaAB && lineA > difBC && lineB > difCA && lineC > difAB) {
    isTriangle = true;
  }
  return isTriangle;
}
// console.log(triangleCheck(10, 14, 8));
// Desafio 13
function hydrate(comanda) {
  let numBebidas = comanda.match(/\d/g); // pega os números em uma string
  let somaComanda = 0;
  for (let i in numBebidas) {
    somaComanda += parseInt(numBebidas[i]);
  }
  if (somaComanda === 1) {
    return `${somaComanda} copo de água`;
  } else {
    return `${somaComanda} copos de água`;
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
