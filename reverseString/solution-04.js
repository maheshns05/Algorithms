function reverseString(str) {
    if ( str === '' ) {
        return str;
    } else {
        return reverseString(str.substr(1)) + str[0];
    }
}

