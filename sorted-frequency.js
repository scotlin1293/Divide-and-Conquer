function sortedFrequency(array, value) {
    if ((array[0] > value) || (array[array.length - 1] < value)) {
        return (-1);
    }

    let loIdx1 = 0;
    let hiIdx1 = array.length - 1;
    let loIdx2 = 0;
    let hiIdx2 = array.length - 1;

    while (loIdx1 <= hiIdx1) {
        let midIdx = Math.floor((loIdx1 + hiIdx1) / 2);
        let midVal = array[midIdx];

        if (midVal < value) {
            loIdx1 = midIdx + 1;
            loIdx2 = midIdx + 1; // reduce next loop
        }
        else if (midVal > value) {
            hiIdx1 = midIdx - 1;
            hiIdx2 = midIdx - 1; // reduce next loop
        }
        else {
            if (loIdx1 === hiIdx1) {
                hiIdx1 = loIdx1 - 1;
                break;
            }
            else {
                hiIdx1 = midIdx;
            }
        }
    }

    while (loIdx2 <= hiIdx2) {
        let midIdx = Math.floor((loIdx2 + hiIdx2) / 2);
        let midVal = array[midIdx];

        if (midVal < value) {
            loIdx2 = midIdx + 1;
        }
        else if (midVal > value) {
            hiIdx2 = midIdx - 1;
        }
        else {
            if (loIdx2 === hiIdx2) {
                loIdx2 = hiIdx2 + 1;
                break;
            }
            else {
                loIdx2 = midIdx + 1;
            }
        }
    }

    if ((array[loIdx1] === value) && (array[hiIdx2] === value)) {
        return (hiIdx2 - loIdx1 + 1);
    }
    return (-1);
}

module.exports = sortedFrequency