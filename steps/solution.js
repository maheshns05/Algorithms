function steps(n) {
  for (var row=0; row<n; row++) {
    var stairs = '';
    for (var column=0; column<n; column++) {
      if(column <= row) {
        stairs += '#';
      } else {
        stairs += '-';
      }
    }

    console.log(stairs);
  }
}
