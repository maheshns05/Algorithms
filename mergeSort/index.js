function mergeSort(arr) {
  if(arr.length < 2) return arr;
  var midIndex = Math.floor(arr.length/2);
  var firstArr = arr.slice(0, midIndex);
  var secondArr = arr.slice(midIndex);

  return merge(mergeSort(firstArr), mergeSort(secondArr));
}

function merge(array1, array2) {
  var result = [];

  while(array1.length && array2.length) {
    var minElem;
    if(array1[0] < array2[0]) {
      minElem = array1.shift();
    } else {
      minElem = array2.shift();
    }

    result.push(minElem);
  }

  if(array1.length) result = result.concat(array1);
  if(array2.length) result = result.concat(array2);

  return result;
}


mergeSort([2,1,3,4,5,7,6,9,100]);