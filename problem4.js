function findingBadData(arr) {
    let badDataCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}

const given_arr = findingBadData([2, -5, -7, -13, 14]);
console.log(given_arr);