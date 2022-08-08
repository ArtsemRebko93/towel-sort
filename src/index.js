// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const result = [];
    const matrixCopy = [...matrix];
    for (let i = 0; i < matrixCopy.length; i++) {
        const reversIndex = [];
        if (i % 2 === 0) {
            result.push(...matrixCopy[i]);
        } else {
            matrixCopy[i].reverse();
            reversIndex.push(...matrixCopy[i]);
            result.push(...reversIndex);
        }
    }
    return result;
};
