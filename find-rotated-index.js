function findRotatedIndex(array, value) {
    let loIdx = 0;
    let hiIdx = array.length - 1;
    let midIdx;

    while (loIdx <= hiIdx) {
        midIdx = Math.floor((loIdx + hiIdx) / 2);
        let midVal = array[midIdx];

        if (value > midVal) {
            if ((value > array[hiIdx]) && (midVal <= array[hiIdx])) {
                hiIdx = midIdx - 1;
            }
            else {
                loIdx = midIdx + 1;
            }
        }
        else if (value < midVal) {
            if ((value < array[loIdx]) && (midVal >= array[loIdx])) {
                loIdx = midIdx + 1;
            }
            else {
                hiIdx = midIdx - 1;
            }
        }
        else {
            return (midIdx);
        }
    }
    if (array[midIdx] === value) {
        return (array[midIdx]);
    }
    return (-1);
}


module.exports = findRotatedIndex