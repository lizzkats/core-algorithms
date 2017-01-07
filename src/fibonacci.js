'use strict'

export default function fibonacci (number) {
  if( typeof( number ) !== 'number' ) {
    throw "InvalidInput"
  }
  let fibArray = [0,1]
  if ( number < 3 )
  return fibArray;

  for ( let i = 2; i < number; i++ ) {
    fibArray[i] = fibArray[i-1] + fibArray[i-2]
  }
  return fibArray;
  }
