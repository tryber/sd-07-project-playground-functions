// Desafio 1

function compareTrue(approval, conclusion) {

    if (approval === true && conclusion === true) {

        let happiness = true;
        return happiness;

    } else {

        let happiness = false;
        return happiness;

    }

}

// Desafio 2

function calcArea(base, height) {

    let triangleArea = (base * height) / 2;
    return triangleArea

}

// Desafio 3
function splitSentence(setenca) {

    let wordsArray = setenca.split(" ");
    return wordsArray;

}

// Desafio 4
function concatName(names) {

    let arrayInitialFinalName = [names[names.length - 1], " " + names[0]];
    let finalInitialName = arrayInitialFinalName.toString();

    return finalInitialName;
}

console.log
    // Desafio 5
function footballPoints(wins, ties) {

    let points = (wins * 3) + ties;
    return points;
}

// Desafio 6
function highestCount(numbers) {

    let highest = 0;
    let repetition = 0;

    for (let i = 0; i < numbers.length; i += 1) {

        if (numbers[i] > highest) {
            repetition = 1;
            highest = numbers[i];
        } else if (highest === numbers[i]) {
            repetition += 1;
        }
    }
    return repetition;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

    let distanceCat1 = Math.abs(cat1 - mouse)
    let distanceCat2 = Math.abs(cat2 - mouse)

    if (distanceCat1 === distanceCat2) {

        return "os gatos trombam e o rato foge"
    } else if (distanceCat1 < distanceCat2) {

        return "cat1";
    } else if (distanceCat2 < distanceCat1) {

        return "cat2";
    }
}

// Desafio 8
function fizzBuzz(numbers2) {

    let arrayFizz = [];
    for (let i = 0; i < numbers2.length; i += 1) {

        if (numbers2[i] % 15 === 0) {

            arrayFizz.push("fizzBuzz");
        } else if (numbers2[i] % 3 === 0) {

            arrayFizz.push("fizz")
        } else if (numbers2[i] % 5 === 0) {

            arrayFizz.push("buzz");
        } else {

            arrayFizz.push("bug!");
        }
    }

    return arrayFizz;
}

// Desafio 9
function encode(text) {

    let copy = [];

    for (let i = 0; i < text.length; i += 1) {
        switch (text[i]) {

            case "a":
                copy.push("1");
                break;
            case "e":
                copy.push("2");
                break;
            case "i":
                copy.push("3");
                break;
            case "o":
                copy.push("4");
                break;
            case "u":
                copy.push("5");
                break;
            default:
                copy.push(text[i]);
        }

    }

    return copy.join("");
}

function decode(text) {
    let copy = [];

    for (let i = 0; i < text.length; i += 1) {
        switch (text[i]) {

            case "1":
                copy.push("a");
                break;
            case "2":
                copy.push("e");
                break;
            case "3":
                copy.push("i");
                break;
            case "4":
                copy.push("o");
                break;
            case "5":
                copy.push("u");
                break;
            default:
                copy.push(text[i]);
        }

    }

    return copy.join("");
}

// Desafio 10
function techList(techs, name) {

    let listTechs = [];
    techs.sort();
    if (techs.length < 1) {

        return 'Vazio!';
    }
    for (let i = 0; i < techs.length; i += 1) {

        let techToLearn = {
            tech: techs[i],
            name: `${name}`,
        }

        listTechs.push(techToLearn);
    }

    return listTechs;
}

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
