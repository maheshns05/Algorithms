function meanMedianMode(arr) {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getComputedStyle(arr)
    };
}

function getMean(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum/arr.length;
}

function getMedian(arr) {
    arr.sort((a, b) => a-b);

    if(arr.length % 2 !== 0) {
        return arr[Math.floor(arr.length/2)];
    } else {
        var median1 = arr[Math.floor(arr.length/2)];
        var median2 = arr[Math.floor((arr.length/2)-1)];

        return (median1+median2) / 2;
    }
}

function getMode(arr) {
    var modes = [];

    
}