function harmlessRansomNote(noteTxt, paraTxt) {
  var noteArr = noteTxt.split(' ');
  var paraArr = paraTxt.split(' ');
  var hashTable = {};

  paraArr.forEach((word) => {
    if(!hashTable[word]) {
      hashTable[word] = 0;
    }

    hashTable[word]++;
  });

  var possibleTxt = true;

  noteArr.forEach((word) => {
    if(hashTable[word]) {
      hashTable[word]--;
      if(hashTable[word] < 0) {
        possibleTxt = false;
      }
    } else {
      possibleTxt = false;
    }
  });

  return possibleTxt;
}

harmlessRansomNote('this is the world', 'this is the world of peace')