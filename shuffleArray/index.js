function shuffleArr(arr) {
  for(var i=0; i<arr.length; i++) {
    var randomIndex = Math.floor(Math.random()*i);
    var temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  return arr;
}

shuffleArr([1,2])