/* Reverse the words of the string in place */

function reverseString(str) {
    var arr = str.split(' ');
    var result = [];

    arr.forEach((word) => {
        var newString = '';
        
        for ( var i=word.length-1; i>=0; i-- ) {
            newString += word[i];
        }

        result.push(newString);
    });

    return result.join(' ');
}