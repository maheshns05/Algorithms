function intReversal(num) {
  const reversed = parseInt(num.toString().split('').reverse().join(''));

  return reversed * Math.sign(num);
}