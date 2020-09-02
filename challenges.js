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