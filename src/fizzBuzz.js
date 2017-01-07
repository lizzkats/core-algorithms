'use strict'

export default function fizzBuzz() {

  var arrayNums = [];
  for (var i = 1; i < 101; i++){
    arrayNums.push(i)
  }

  for(var j = 1; j < arrayNums.length; j++) {
    if (arrayNums[j] % 3 == 0 ){
      arrayNums.splice(j, 1, "Fizz");
    }
    if (arrayNums[j] % 5 == 0){
      arrayNums.splice(j, 1, "Buzz");
    }
    if (j % 15 == 0 ){
      arrayNums.splice(j -1 , 1, "FizzBuzz");
    }
  }
  return arrayNums;
}
