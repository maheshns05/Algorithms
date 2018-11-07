/* Reverse words in place */

function reverseWords(str) {
    var strArr = str.split(' ');
    var result = [];

    strArr.forEach(word => {
        var newString = '';
        for(var i=word.length-1; i>=0; i--) {
            newString += word[i];
        }

        result.push(newString);
    });

    return result.join(' ');
}