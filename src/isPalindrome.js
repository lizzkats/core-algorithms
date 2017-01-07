'use strict'

export default function isPalindrome(string) {
  if( typeof( string ) !== 'string' ) {
    throw "InvalidInput"
  }

  const noPunctuation = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  const normalized = noPunctuation.replace(/\s/g,'').toLowerCase();
  const splitString = normalized.split('');
  const backwards = splitString.reverse().join('');

  return backwards === normalized

  }
