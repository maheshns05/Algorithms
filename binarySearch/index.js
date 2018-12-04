function binarySearch(arr, key) {
  var midIndex = Math.floor(arr.length/2);
  var midElem = arr[midIndex];

  if(midElem === key) {
    return true;
  } else if(key < midElem && arr.length > 1) {
    return binarySearch(arr.slice(0, midIndex), key);
  } else if(key > midElem && arr.length > 1) {
    return binarySearch(arr.slice(midIndex), key);
  } else {
    return null;
  }
}

binarySearch([1,2,3,4,5,6,7], 4)