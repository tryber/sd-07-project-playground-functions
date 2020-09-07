function fizzBuzz(arrayDeNumeros) {
    let tamanhoArray = arrayDeNumeros.length
    for (i = 0; i < tamanhoArray; i += 1){
      if (arrayDeNumeros[i] % 3 === 0 && arrayDeNumeros[i] % 5 == 0){
        console.log('fizzbug');
      } else if (arrayDeNumeros[i] % 5 == 0){
        console.log('buzz');
      } else if (arrayDeNumeros[i] % 3 == 0){
        console.log('fizz');
      } else {
        console.log('bug!')
      }
    }  
  }
  console.log(fizzBuzz([2, 15, 7, 9, 45]))
