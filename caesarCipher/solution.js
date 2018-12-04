function caesarCipher(str, num) {
    num = num % 26;

    var strArr = str.toLowerCase().split('');
    var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for( var i=0; i < strArr.length; i++) {
        var currentElem = strArr[i];

        if(currentElem === ' ') {
            newString += currentElem;
            continue;
        }

        var index = validChar.indexOf(currentElem);
        var newIndex = index + num;

        if( newIndex < 0 ) {
          newIndex = newIndex + 26;
        }

        if( newIndex > 25 ) {
          newIndex = newIndex - 26;
        }

        if ( str[i] === strArr[i].toUpperCase()) {
            newString += validChar[newIndex].toUpperCase();
        } else {
            newString += validChar[newIndex];
        }
    }

    return newString;
}