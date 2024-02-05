export function binarySearchRecursive(
    array: number[],
    target: number,
    startIdx: number,
    endIdx: number
) {
    if (startIdx > endIdx) return -1;

    const middleIndex = Math.round((startIdx + endIdx) / 2);

    if (array[middleIndex] === target) {
        return middleIndex;
    } else if (target < array[middleIndex]) {
        return binarySearchRecursive(array, target, startIdx, middleIndex - 1);
    } else {
        return binarySearchRecursive(array, target, middleIndex + 1, endIdx);
    }
}

export function binarySearchIterative(array: number[], target: number) {
    let startIdx = 0;
    let endIdx = array.length - 1;
    let middleIndex: number;

    while (startIdx <= endIdx) {
        middleIndex = Math.round((startIdx + endIdx) / 2);

        if (array[middleIndex] === target) {
            return middleIndex;
        } else if (target < array[middleIndex]) {
            endIdx = middleIndex - 1;
        } else {
            startIdx = middleIndex + 1;
        }
    }
}
