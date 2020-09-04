// Desafio 1
function compareTrue(a , b) {
  return a && b === true ? true : false ;
}

// Desafio 2
function calcArea(base , height) {
  let area = (base * height) / 2 ; 
  return  area ;
}

// Desafio 3
function splitSentence(s) {
  let result = [] , a = "" ;
  for( let i in s )
  {
    if ( s[i] === ' ' )
    {
      result.push(a) ;
      a = "" ;
    }
    else if (i == s.length - 1)
    {
      a += s[i] ;
      result.push(a) ;
    }
    else
    {
    a += s[i] ;
    };
  };
  return result ;
}

// Desafio 4
function concatName(a) {
  let b = a.length , result = a[b-1] + ", " + a[0] ;
  return result ;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties ;
  return points ;
}

// Desafio 6
function highestCount(a) {
  let hNum = 0 , c = 0 ;
  for( let i in a )
  {
    a[i] > hNum ? hNum = a[i] : "" ;
  } ;
  for( let i in a )
  {
    hNum === a[i] ? c++ : "" ;
  } ;
  return c ;
}

// Desafio 7
function catAndMouse(mouse , cat1 , cat2) {
  if ( Math.abs(mouse - cat1) === Math.abs(mouse - cat2) )
  {
    return "os gatos trombam e o rato foge";
  }
  else
  {
    return Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) ? 'cat2' : 'cat1' ;
  } ;
}

// Desafio 8
function fizzBuzz(a) {
  let result = [] ;

  for( let i in a )
  {

      if ( a[i] % 3 === 0 )
      {

          a[i] % 3 === 0 && a[i] % 5 === 0 ? result[i] = "fizzBuzz" : result[i] = "fizz" ;
  
      }
      else
      {

          a[i] % 5 === 0 ? result[i] = "buzz" : result[i] = "bug!" ;

      } ;

  } ;

  return result ;

}

// Desafio 9
function encode(s) {
  let convList = { a : 1 , e : 2 , i : 3 , o : 4 , u : 5 } , result = "" ;
  for( let i in s)
  {
    convList[s[i]] ? result += convList[s[i]] : result += s[i] ;
  } ;
  return result ;
}
function decode(s) {
  let convList = [ '' ,'a' , 'e' , 'i' , 'o' , 'u' ], result = "" ;
    for( let i in s)
    {
      for( let j =  1 ; j < 6 ; j++ )
      {       
        if( s[i] == j )
        {
          result += convList[j] ;
          break ;
        } 
        else if ( j === 5 )
        {
          result += s[i] ;
        };
      } ;
    } ;
    return result ;
}

// Desafio 10
function techList(a , name) {
  let result = [] , alfabetizada = a.sort() ;
  if(a.length == 0)
  {
    return result = 'Vazio!' ;
  };
  for ( let i in alfabetizada )
  {
    result[i] = {
      tech : alfabetizada[i] ,
      "name" : name 
    } ;
  }
  return result ;
}

// Desafio 11
function generatePhoneNumber( a ) {
  let result = "" , b = "" ;

  if( a.length != 11 )
  {

    return result = "Array com tamanho incorreto." ;

  } ;

  for( let i in a )
  {
    if ( a[i] < 0 || a[i] > 9 )
    {

      return result = "não é possível gerar um número de telefone com esses valores" ;

    } ; 

    let c = 0 ;
      
    for( let j = 0 ; j <= 11 ; j++)
    {


    if (a[i] === a[j])
    {
      c++ ;
    } ;

    if ( c > 2 )
    {
              
      return result = "não é possível gerar um número de telefone com esses valores" ;

    } ;
    } ;

    b += a[i] ;

    if( i == 1 ) 
    { 

      result = "(" + b + ")" ;
      b = "" ;
      
    } 
    else if ( i == 6 )
    {

      result += " " + b + "-" ;
      b = "" ;

    }
    else if ( i == 10 ) 
    {

      result += b ;

    } ;

  };

  return result ;
}

// Desafio 12
function triangleCheck(a , b , c) {
  return (b + c) > a && a > Math.abs(b - c) ? true : false ;
}

// Desafio 13
function hydrate(s) {

  let result = 0 , array = splitSentence(s) ;

  for( let i in array )
  {

      if (!(isNaN(array[i])))
      {
          let n = +array[i];
          result += n ;
      };

  } ;

  return result == 1 ? "1 copo de água" : result + " copos de água";
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
