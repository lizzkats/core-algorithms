'use strict'
export default function isPalindrome(str) {
  const noPunct = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  let normalized = noPunct.replace(/\s/g,'');
  let lowerCase = normalized.toLowerCase();
  let splitString = lowerCase.split('');
  let backwards = splitString.reverse().join('');


  return backwards === normalized

  }
  isPalindrome("radar");
