let a,b;

/* -----------------
|  Área de funções |
-------------------- */

// 1) Usando Operador &&
function compareTrue(bool1, bool2){
    if(bool1 && bool2){
        return true;
    } else{
        return false;
    }
}

// 2) Área do triângulo
function calcArea(base, height){
    return base*height/2;
}

// 3) Dividindo a frase
function splitSentence(frase){
    let palavra = ``;
    let arrayPalavras = [];
    for(let i in frase){
        if(frase[i] !== ` `){
                palavra += frase[i];
        }else{
            arrayPalavras.push(palavra);
            palavra = ``;
        }
    }
    arrayPalavras.push(palavra);
    return arrayPalavras;
}

/* -----------------
| Área de execução |
-------------------- */

// 1) Usando Operador &&
a = true;
b = true;
console.log(compareTrue(a, b));

// 2) Área do triângulo
a = 4;
b = 5;
console.log(calcArea(a, b));

// 3) Dividindo a frase
a = `go trybe`;
console.log(splitSentence(a));