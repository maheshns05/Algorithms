function reverseStr(str) {
    var reversedStr = '';
    
    for ( var i=str.length-1; i>=0; i-- ) {
        reversedStr += str[i];
    }

    return reversedStr;
}

/*
ES6 for of solution 

const reverseStr = (str) => {
    let reversedStr = '';

    for ( let char of str) {
        reversedStr =  char + reversedStr;
    }

    return reversedStr;
}

*/

