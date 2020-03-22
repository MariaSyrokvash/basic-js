module.exports = function transform(arr) {
    let myArray = [];


    if (!Array.isArray(arr)) throw new Error();


    if (arr.length == 0) return arr;


    for (let m = 0; m < arr.length; m++) {
        switch (arr[m]) {
            case '--discard-next':
                m++;
                break;
            case '--discard-prev':
                myArray.pop();
                break;
            case '--double-next':
                if (m < arr.length - 1) myArray.push(arr[m + 1]);
                break;
            case '--double-prev':
                if (m > 0) myArray.push(arr[m - 1]);
                break;
            default:
                myArray.push(arr[m]);
        };
    }
    return myArray;
};