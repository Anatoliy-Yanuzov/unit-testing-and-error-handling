function subSum(arr, startIndex, endIndex) {

    startIndex = arr[startIndex] === undefined ? 0 : startIndex;
    endIndex = arr[endIndex] === undefined ? arr.length - 1 : endIndex;

    try {
        return (arr.slice(startIndex, endIndex + 1).reduce((a, b) => a + b, 0) * 10) / 10;
    } catch (error) {
        return NaN;
    }
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));
