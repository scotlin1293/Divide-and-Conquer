function findRotationCount(array) {
    let loIdx = 0;
    let hiIdx = array.length - 1;

    while (loIdx <= hiIdx) {
        let midIdx = Math.floor((loIdx + hiIdx) / 2);
        let midVal = array[midIdx];

        if (midVal < array[hiIdx]) {
            hiIdx = midIdx;
        }
        else {
            loIdx = midIdx + 1;
        }
    }
    return (hiIdx);
}

module.exports = findRotationCount