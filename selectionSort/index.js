function selectionSort(arr) {
  for(var i=0; i<arr.length; i++) {
    var indexOfMin = i;
    for(var j=i+1; j<arr.length; j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if(indexOfMin !== i) {
      var temp = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = temp;
    }
  }

  return arr
}

selectionSort([1,2,2,35,6,7,])