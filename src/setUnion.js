export default function setUnion(arr1,arr2) {

  let results = []
  const normalizeLength = Math.max(arr1.length, arr2.length)

  for (let i = 0; i < normalizeLength; i++ ){
      results.push(arr1[i])
      results.push(arr2[i])
      results.sort(function(a, b) {
        return a - b;
      });
    }

    for (let i = 0 ; i < results.length; i++){

      if(results[i] === results[i +1]){

        results.splice(i, 1)
        i--

      }
    }

  return results;
}
