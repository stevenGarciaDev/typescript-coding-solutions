// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    let indices: number[] = [];

    nums.forEach((num: number, idx: number) => {
        const diff = target - num;

        if (map.has(diff)) {
            indices = [idx, map.get(diff) as number];
        }

        map.set(num, idx);
    });

    return indices;
}

console.log("twoSums ->", twoSum([2, 7, 11, 15], 9));
