function bubbleSort(arr) {
  for(var i=arr.length-1; i>=0; i--) {
    for(var j=0; j <= i; j++) {
      if(arr[j] > arr[j+1]) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }

  return arr 
}

bubbleSort([200, 60, 70, 1, 2, 5, 4, 3])