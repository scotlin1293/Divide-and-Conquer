function countZeroes(arr) {
    let loIdx = 0;
    let hiIdx = arr.length - 1;

    while (loIdx <= hiIdx) {
        let midIdx = Math.floor((loIdx + hiIdx) / 2);
        let val = arr[midIdx];

        if (val === 0) {
            if (midIdx === 0) {
                return (arr.length - midIdx);
            }
            hiIdx = midIdx - 1;
        } else {
            if (midIdx === (arr.length - 1)) {
                return (0);
            }
            loIdx = midIdx + 1;
        }
    }
    return (arr.length - loIdx);
}

module.exports = countZeroes