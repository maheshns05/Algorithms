function pyramid(n) {
  const midpoint = Math.floor(((2*n)-1)/2);
  for(var row=0; row<n; row++) {
    var level = '';
    for(var column=0; column<(2*n-1); column++) {
      if(midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += '-';
      }
    }

    console.log(level);
  }
}