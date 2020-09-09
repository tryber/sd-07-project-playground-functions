// Desafio 1
function compareTrue(bolean1, bolean2) {
  if (bolean1 && bolean2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(words) {
  return words.split(" ");
}

// Desafio 4
function concatName(names) {
  return names[names.length-1].concat(', ', names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highest = Math.max(...numbers);
  let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highest) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs((cat1 - mouse));
  let distance2 = Math.abs((cat2 - mouse));
  if (distance1 > distance2) return 'cat2';
  else if (distance2 > distance1) return 'cat1';
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let answer = []
  for (let i in numbers) {
    if ((numbers[i] % 3 === 0) && (numbers[i] % 5 === 0)) answer.push('fizzBuzz');
    else if (numbers[i] % 3 === 0) answer.push('fizz');
    else if (numbers[i] % 5 === 0) answer.push('buzz');
    else answer.push('bug!');
  }
  return answer;
}

// Desafio 9
function encode(encodingString) {
  let res = encodingString.replace(/a/g , '1');
  res = res.replace(/e/g , '2');
  res = res.replace(/i/g , '3');
  res = res.replace(/o/g , '4');
  res = res.replace(/u/g , '5');
  return res;
}
function decode(decodingString) {
  let res = decodingString.replace(/1/g , 'a');
  res = res.replace(/2/g , 'e');
  res = res.replace(/3/g , 'i');
  res = res.replace(/4/g , 'o');
  res = res.replace(/5/g , 'u');
  return res;
}

// Desafio 10
function techList(techs, studantName) {
  if (techs && techs.length){ 
    techs.sort();
    let list = [];
    for (let i in techs) {
      let obj = {tech:techs[i], name:studantName}
      list.push(obj);
    }
    return list;
  }
  else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  /*Method countOccurrences() coded by Batman in
  https://www.codegrepper.com/code-examples/delphi/javascript+count+number+of+occurrences+in+array */
  const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  if (numbers.length != 11) return 'Array com tamanho incorreto.';
  for (let i in numbers) {
    if (numbers[i] > 9 || numbers[i] < 0) return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < 10; i += 1){
    if (countOccurrences(numbers, i) > 2) return 'não é possível gerar um número de telefone com esses valores' 
  }
  let text = '(' + numbers[0] + numbers[1] + ')' + ' ';
  for (let i = 2; i < 11; i += 1) {
    text = text.concat(numbers[i]);
    if(i === 6) text = text.concat('-');
  }
  return text;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if((lineA + lineB) < lineC) return false;
  if((lineA + lineC) < lineB) return false;
  if((lineB + lineC) < lineA) return false;
  if(Math.abs(lineA - lineB) > lineC) return false;
  if(Math.abs(lineA - lineC) > lineB) return false;
  if(Math.abs(lineB - lineC) > lineA) return false;
  return true;
}

var r = /\d+/g;
var s = "you22 33 can enter 333 maximum 500 choices";
var m;
while ((m = r.exec(s)) != null) {
  console.log(m[0]);
}

// Desafio 13
function hydrate(drinks) {
  /* Code to get integers from a string extracted in 
  https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994 */
  let r = /\d+/g;
  let m;
  let count = 0;
  while ((m = r.exec(drinks)) != null) {
    count = count + parseInt(m[0]);
  }
  if(count === 1) return '1 copo de água';
  return count + ' copos de água';
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
