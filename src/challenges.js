// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a == true && b == true){
    return true;
  }
  else{
    return false;
  }
}

console.log(compareTrue(true,true))




// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  const areaTriangulo = (base*height)/2;
  return areaTriangulo; 
}

console.log(calcArea(4.1,2.5))





// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(" ");  
}

console.log(splitSentence("ola trybe"))



//function splitSent() {
  //var str = "go trybe";
  //var res = str.split(" ");
  //return res;
//}

  //console.log(splitSent())



// Desafio 4
//namesArray = ['jesus', 'lucio', 'palli', 'ururi', 'elias', 'hermenegildo']
//function concatName(namesArray) {
  // seu código aqui  
//  return [namesArray[namesArray.length-1], namesArray[0]];
//}
//console.log(concatName(namesArray))
// A resposta de saida é correta mas, a salida não é string.
// e tambem esta faltando, quando respota já vira um string, um espaço logo da coma. Isso é um requisito do EVALUATOR JOB da trybe. 

// Desafio 4
//namesArray = ['jesus', 'lucio', 'palli', 'ururi', 'elias', 'hermenegildo']
function concatName(namesArray) {
  // seu código aqui  
  let rptaEndFirst = [namesArray[namesArray.length-1]," " + namesArray[0]];
  let rptaString = rptaEndFirst.toString();
  return rptaString;  
}
//console.log(concatName(namesArray))




// Desafio 5
//function footballPoints() {
  // seu código aqui
//}
//tenho que comentar os paarafos arriba, desde onde inicia Desafio 5. Porque da conflito no EVALUATOR JOB, quando aparecem 2 Desafios 5 escritos. A verdade 
//acho que o problema foi porque tinha um Desafio 5 vazio e outro cheio. Da bug.
//esqueci de usar o remote add e não deu problema. Sera que nao é necessario?
// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let points = wins*3 + ties;
  return points; 
}
//console.log(footballPoints(5,1))




// Desafio 6
//function highestCount() {
  // seu código aqui
//}
//como neste array nao importa o ordem, poderia usar FOR IN


// Desafio 6
//arrayNum = [10, 1, 2, 9, 9, 5, 7]
function highestCount(arrayNum) {
  // seu código aqui
  let largeNum = 0;      //novo contagem mantendo o valor de LARGENUM e o valor de QUANTIREPETNUM
  let quantiRepetNum = 0;
  
  for(let i = 0; i < arrayNum.length; i += 1){ //esta linha inicia e finaliza o conteo de cada elemento do array 

    if (arrayNum[i] > largeNum){  //PRIMEIRA CONDICAO o numero dentro do array que ocupa a posicao i, é MAIOR que o numero LARGENUM? 
      quantiRepetNum = 1;                //esta linha asegura que se existe um outro numero maior que o considerado LARGENUM entao ja repetition inicia a contar desde 1
      largeNum = arrayNum[i];
    }
    else                    // se usava so else , então TODO valor, para LARGENUM, que nao cumpla o IF teria ejecutar este ELSE e o LARGENUM nao poderia voltar a reiniciar novamente a busqueda 
        if (arrayNum[i] == largeNum){ //SEGUNDA CONDICAO o numero dentro do array que ocupa a posicao i, é igual a o numero que é considerado LARGENUM?
      quantiRepetNum += 1;
    }
  }
  return quantiRepetNum // FINALMENTE se nao cumplio as 2 condicoes arriba o valor do HIGHEST permanece inalterado. E repetition continua sendo 0. Reinicia um novo
                    //novo contagem mantendo o valor de LARGENUM e o valor de QUANTIREPETNUM
}
//console.log(highestCount(arrayNum));





// Desafio 7
function catAndMouse(mouse, cat1, cat2) { //input os 3 parametros
  // seu código aqui

  var distCat1 = Math.abs(mouse - cat1); //ponto ed referencia o MOUSE 
  var distCat2 = Math.abs(mouse - cat2); //MATH.ABS retorna o valor absoluto, segura que a diferenca seja sempre positiva
  //usei no inicio CONST mas quando as distancas entre os gatos era a mesma aparecia o erro TypeError: Assignment to constant variable.
  // se usar LET o VAR nao tem esse problema. 
        if(distCat1 > distCat2){  // se CAT1 esta mais longe de CAT2
           return "cat2"  //se so escrever CAT2 sem usar " " entao vou ter como resultado o NUMERO que ingrese para CAT2.
        }

        else if(distCat2 > distCat1){  // se CAT2 esta mais longe de CAT1
           return "cat1"
        }
        
        else if(distCat1 = distCat2){ //se CAT1 e CAT2 estao na mesma distanca 
           return "os gatos trombam e o rato foge" 
        }
}
//console.log(catAndMouse(10,2,2));


// Desafio 7
//function catAndMouse() {
  // seu código aqui
//}


// Desafio 8
//function fizzBuzz() {
  // seu código aqui
//}



// Desafio 8
//arrayNumQuince = [2, 15, 7, 9, 45]
function fizzBuzz(arrayNumQuince) {
  // seu código aqui
  
  let arrayNumQuinceTranslate = []; //esta linha vai ir alamacenando num array os numero traduzidos a fizz, buzz, fizzbuzz
  
  for(i = 0; i < arrayNumQuince.length; i += 1){
      
     if(arrayNumQuince[i]%15 == 0){
      arrayNumQuinceTranslate.push("fizzBuzz")     
     }

     else 
          if(arrayNumQuince[i]%3 == 0){
      arrayNumQuinceTranslate.push("fizz")
     }

     else 
         if(arrayNumQuince[i]%5 == 0){
      arrayNumQuinceTranslate.push("buzz")     
     }

     //else                                       // como o JS lee de arriba para abaixo, se a divisibilidade pelo 15 vai neste lugar, então por exemplo o numero 15, seguindo o ordem primeiro vai ser dividido pelo numero 3 e vai ser divisivel. LOgo o resultado sera fizz. Mas o resultado esperado é fizzBuzz   
     //    if(arrayNumQuince[i]%15 == 0){         //por isso decidi escrever a divisibilidade pelo 15 no inicio e nao ao final do codigo.     
     // arrayNumQuinceTranslate.push("fizzBuzz")     
     //} 

     else {
       arrayNumQuinceTranslate.push("bug!");
     }
         
  } 
  return arrayNumQuinceTranslate;
}
//console.log(fizzBuzz(arrayNumQuince));





// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
