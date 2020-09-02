let a,b;

/* -----------------
|  Área de funções |
-------------------- */

/* 1) Usando Operador && */
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  } else{
    return false;
  }
}

/* 2) Área do triângulo */
function calcArea(base, height) {
  return base*height/2;
}

/* 3) Dividindo a frase */
function splitSentence(frase) {
  let palavra = ``;
  let arrayPalavras = [];
  for (let i in frase) {
    if (frase[i] !== ` `) {
      palavra += frase[i];
    } else {
      arrayPalavras.push(palavra);
      palavra = ``;
    }
  }
  arrayPalavras.push(palavra);
  return arrayPalavras;
}

/* 4) Concatenação de strings */
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

/* 5) Pontos no futebol */
function footballPoints(wins, ties) {
  return 3*wins + ties; 
}

/* 6) Repetição do maior número */
function highestCount(array) {
  let posAtual = 1;
  let somaAtual = 0;
  let somaMaisF = 0;
  for (let i in array) {
    if (array[posAtual] === array[i]) {
      somaAtual += 1;
    }
  }
}

/* -----------------
| Área de execução |
-------------------- */

/* 1) Usando Operador && */
a = true;
b = true;
console.log(compareTrue(a, b));

/* 2) Área do triângulo */
a = 4;
b = 5;
console.log(calcArea(a, b));

/* 3) Dividindo a frase */
a = `go trybe`;
console.log(splitSentence(a));

/* 4) Concatenação de strings */
a = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(a));

/* 5) Pontos no futebol */
a = 3;
b = 2;
console.log(footballPoints(a, b));

/* 6) Repetição do maior número */
a = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(a));