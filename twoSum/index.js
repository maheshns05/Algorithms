function twoSum(arr, sum) {
  var possibleArr = [];
  var hashTable = [];

  for(var i=0; i<arr.length; i++) {
    var currentElem = arr[i];
    var possibleSum = sum - currentElem;

    if(hashTable.indexOf(possibleSum) !== -1) {
      possibleArr.push([currentElem, possibleSum]);
    } 

    hashTable.push(currentElem);
  }

  return possibleArr;
}

twoSum([1,2,3,4,5,6,7,8,0], 8)