// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

console.log(calcArea(5, 6));

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array2) {
  let concatString = array2[(array2.length - 1)] + ", " + array2[0];
  return concatString;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (3 * wins) + ties;
  return totalPoints;
}

console.log(footballPoints(3, 2));

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = 0;
  let count = 0;
  for (let i = 0; i < numberArray.length; i += 1)
  {
    if (numberArray[i] > highestNumber)
    {
      highestNumber = numberArray[i];
    }
  }
  for (let i = 0; i < numberArray.length; i += 1)
  {
    if (numberArray[i] === highestNumber)
    {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse))
  {
    return "cat1";
  }
  else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse))
  {
    return "cat2";
  }
  else
  {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array3) {
  let array4 = [];
  for (let i in array3)
  {
    if ((array3[i] % 3 == 0) && (array3[i] % 5 != 0))
    {
      array4.push("fizz");
    }
    else if ((array3[i] % 5 == 0) && (array3[i] % 3 != 0))
    {
      array4.push("buzz");
    }
    else if ((array3[i] % 5 == 0) && (array3[i] % 3 == 0))
    {
      array4.push("fizzBuzz");
    }
    else
    {
      array4.push("bug!");
    }
  }
  return array4;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string2) {
  string2 = string2.replace(/a/g, "1");
  string2 = string2.replace(/e/g, "2");
  string2 = string2.replace(/i/g, "3");
  string2 = string2.replace(/o/g, "4");
  string2 = string2.replace(/u/g, "5");
  return string2;
}
function decode(string3) {
  string3 = string3.replace(/1/g, "a");
  string3 = string3.replace(/2/g, "e");
  string3 = string3.replace(/3/g, "i");
  string3 = string3.replace(/4/g, "o");
  string3 = string3.replace(/5/g, "u");
  return string3;
}

console.log(encode("hi there!"));
console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(techArray, name) {
  let list = [];
  if (techArray.length === 0)
  {
    return "Vazio!";
  }
  else
  {
    for (let i in techArray)
    {
      list.push({tech:techArray[i], name:name});
    }
    list.sort((a, b) => (a.tech > b.tech) ? 1 : -1);
  }
  return list;
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

// Desafio 11
function generatePhoneNumber(phoneNumberArray) {
  let phoneNumber = "(";
  if (phoneNumberArray.length != 11)
  {
    return "Array com tamanho incorreto.";
  }
  else
  {
    let count = 0;
    for (let i in phoneNumberArray)
    {
      const digit = phoneNumberArray[i]
      for (let j in phoneNumberArray)
      {
        if (digit === phoneNumberArray[j])
        {
          count += 1;
        }
        if (count >= 3)
        {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
      if (digit < 0 || digit > 9)
      {
        return "não é possível gerar um número de telefone com esses valores";
      }
      else if (i === "2")
      {
        phoneNumber += ") ";
      }
      else if (i === "7")
      {
        phoneNumber += "-";
      }
      phoneNumber += digit;
      count = 0;
    }
  }
  return phoneNumber;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineA + lineC > lineB && lineC + lineB > lineA && lineA > Math.abs(lineB - lineC) && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineB - lineA))
  {
    return true;
  }
  else
  {
    return false;
  }
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string4) {
  let string5;
  let count = 0;
  for (i = 0; i < string4.length; i += 1)
  {
    for (j = 1; j < 10; j += 1)
    {
      if (string4[i] == j)
      {
        count += j;
      }
   
    }
  }
  if (count === 1)
  {
    string5 = count + " copo de água";
  }
  else
  {
    string5 = count + " copos de água";
  }
  return string5;
}

console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));


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
