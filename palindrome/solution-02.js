function isPalindrome(str) {
    var strArr = str.toLowerCase().split('');
    var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var result = [];

    strArr.forEach(char => {
      if (validChar.indexOf(char) !== -1) {
        result.push(char);
      }  
    });

    if(result.join('') === result.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}