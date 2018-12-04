function capitalize(str) {
  const word = [];

  for(let element of str.split(' ')) {
    word.push(element[0].toUpperCase() + element.slice(1));
  }

  return word.join(' ');
}