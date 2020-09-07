//Desafio 1
function compareTrue(first, second) {
    if (first === false && second === true) {
        return false;
    }
    if (first === true && second === false) {
        return false;
    }
    if (first === false && second === false) {
        return false;
    }
    if (first === true && second === true) {
        return true;
    }
}

// Desafio 2
function calcArea(base, height) {
    let result = (base * height) / 2;
    return result;
}

//Desafio 3
function splitSentence(word) {
    let array = word.split(' ');
    for (let i = 0; i < array.length - 1; i += 1) {
        array[i] += '';
    }
    return array;
}

//Desafio 4
function concatName(array) {
    let myArray = array[array.length - 1] + ', ' + array[0];

    return myArray;
}

// Desafio 5
function footballPoints(wins, ties) {
    let triple = wins * 3 + ties;
    return triple;
}

// Desafio 6
function highestCount(numbers) {
    let maxNum = numbers[0];
    let count = 0;

    for (let i = 1; i < numbers.length; i += 1) {

        if (numbers[i] > maxNum) {
            maxNum = numbers[i];
        }
    }
    for (let j = 0; j < numbers.length; j += 1) {
        if (maxNum === numbers[j]) {
            count += 1;
        }
    }
    return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2,) {


    let calc_1 = mouse - cat1;
    let calc_2 = mouse - cat2;

    if (calc_1 < 0) calc_1 *= -1;

    if (calc_2 < 0) calc_2 *= -1;

    if (calc_1 < calc_2)         return "cat1";
    else if (calc_2 < calc_1)    return "cat2";

    else if (calc_1 === calc_2)  return "os gatos trombam e o rato foge";

}

// Desafio 8
function fizzBuzz(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i += 1) {

        if (array[i] % 3 === 0 && array[i] % 5 === 0) {
            newArray.push('fizzBuzz');
        }
        if (newArray[i] !== "fizzBuzz") {
            if (array[i] % 3 === 0) {
                newArray.push('fizz');
            }
            if (array[i] % 5 === 0) {
                newArray.push("buzz");
            }
            if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
                newArray.push("bug!");
            }
        }
    }
    return newArray;
}


// Desafio 9
function encode(string) {
    let myArray = string.split('');
    for (let i = 0; i < myArray.length; i += 1) {
        switch (myArray[i]) {
            case 'a':
                myArray[i] = 1;
                break;
            case 'e':
                myArray[i] = 2;
                break;
            case 'i':
                myArray[i] = 3;
                break;
            case 'o':
                myArray[i] = 4;
                break;
            case 'u':
                myArray[i] = 5;
                break;
            default:
        }
    }
    return myArray.join('');
}

function decode(string) {
    let myArray = string.split('');
    for (let i = 0; i < myArray.length; i += 1) {
        switch (myArray[i]) {
            case '1':
                myArray[i] = 'a';
                break;
            case '2':
                myArray[i] = 'e';
                break;
            case '3':
                myArray[i] = 'i';
                break;
            case '4':
                myArray[i] = 'o';
                break;
            case '5':
                myArray[i] = 'u';
                break;
            default:
        }
    }
    return myArray.join('');
}

// Desafio 10
function techList(techList, name) {
    let interests = [];
    if (techList.length === 0) {
        return 'Vazio!';
    } else {
        const newArray = techList.sort()
        for (let index = 0; index < newArray.length; index += 1) {
            // if (index !== 0) {
            let object = {
                tech: newArray[index],
                name,
                //  }
            }
            interests.push(object)
        }
        return interests;
    }
}

// Desafio 11
function generatePhoneNumber(array) {
    let newFormat = array;

    if (newFormat.length !== 11) {
        return "Array com tamanho incorreto.";
    } else {

        let increase = repeatAgain(newFormat);
        let graterThan_9 = graterThan9(newFormat);
        let negative = findNegative(newFormat);

        if (negative < 0) {
            return "não é possível gerar um número de telefone com esses valores";
        } else if (graterThan_9 > 9) {
            return "não é possível gerar um número de telefone com esses valores";
        } else if (increase >= 3) {
            return "não é possível gerar um número de telefone com esses valores";
        } else {
            newFormat = array.join('');
            newFormat = newFormat.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3"); // regular expression
            return newFormat;
        }
    }
}

function repeatAgain(numbers) {
    let newFormat = numbers;
    let double = 0;

    for (let i = 0; i < newFormat.length; i += 1) {
        let increase = 1;
        for (let j = i + 1; j < newFormat.length; j += 1) {
            if (newFormat[i] === newFormat[j]) {
                increase += 1;
            }
            if (increase > double) {
                double = increase;
            }
        }
    }
    return double;
}

function graterThan9(ArrayNumbers) {
    let maxNum = ArrayNumbers[0];
    let count = 0;

    for (let i = 1; i < ArrayNumbers.length; i += 1) {

        if (ArrayNumbers[i] > maxNum) {
            maxNum = ArrayNumbers[i];
        }
    }
    for (let j = 0; j < ArrayNumbers.length; j += 1) {
        if (maxNum === ArrayNumbers[j]) {
            count += 1;
        }
    }
    return maxNum;
}

function findNegative(numbers) {
    let arrayNumbers = numbers;
    let negative = 0;

    for (let i = 1; i < arrayNumbers.length; i += 1) {

        if (arrayNumbers[i] < negative) {
            negative = arrayNumbers[i];
        }
    }
    return negative;
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    return !!(lineB - lineC < lineA && lineB - lineC < lineB + lineC && lineA - lineC < lineB && lineA - lineC < lineA + lineC && lineA - lineB < lineC && lineA + lineB);
}

// Desafio 13
function hydrate(str) {
    let myArray = str;
    let calc = 0;
    let number1;
    myArray = myArray.match(/[\d]+/g); // regex (regular expression- [\d] = find any digits, '+' - one or more, /g - globally - eliminating all characters
    for (let index = 0; index < myArray.length; index += 1) {
        number1 = parseInt(myArray[index], 10); // convert it to integer decimal
        calc += number1;
    }
    if (calc === 1) {
        return `${calc} copo de água`;
    } else {
        return `${calc} copos de água`;
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
//
// compareTrue(first = true, second = true);
//
// calcArea(51, 1);
//
//highestCount([9, 1, 2, 3, 9, 5, 7]);
//
// footballPoints(0, 0);
//
// encode("hello there!")
//
// decode("h3 th2r2!");
//
// fizzBuzz([2, 15, 7, 9, 45]);
//
// generatePhoneNumber([4, 1, 3, 4, 5, 8, 6, 7, 8, 9, 1]);
//
// splitSentence('foguete');
// hydrate("9 copos de cerveja, 10 copos de vodka");
//concatName(["marcos", "eduardo", "murilo", "Silva"]);
// techList([""],
// "Lucas");
//hydrate("1 cachaça e 9 cervejas");
// triangleCheck(16, 20, 30);
catAndMouse(1, 0, 2);