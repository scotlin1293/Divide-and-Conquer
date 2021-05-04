function findFloor(arr, val) {
    let loIdx = 0;
    let hiIdx = arr.length - 1;
    let midIdx;

    while (loIdx <= hiIdx) {
        midIdx = Math.floor((loIdx + hiIdx) / 2);
        let midVal = arr[midIdx];

        if (midVal > val) {
            hiIdx = midIdx - 1;
        }
        else if (midVal < val) {
            loIdx = midIdx + 1;
        }
        else {
            return (midVal);
        }
    }
    if (arr[hiIdx] === undefined) {
        return (-1);
    }
    return (arr[hiIdx]);
}

module.exports = findFloor;