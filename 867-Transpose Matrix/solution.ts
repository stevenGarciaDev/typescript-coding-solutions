// Problem: https://leetcode.com/problems/transpose-matrix/

export function transposeMatrix(matrix: number[][]): number[][] {
    const transpose: number[][] = [[]];

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
            const element = matrix[rowIdx][colIdx];

            // Check if undefined
            if (!transpose[colIdx]) transpose[colIdx] = [];

            transpose[colIdx][rowIdx] = element;
        }
    }

    return transpose;
}
