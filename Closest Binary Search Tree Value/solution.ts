class BST {
    value: number;
    left: BST | null;
    right: BST | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export function findClosestValueInBst(tree: BST | null, target: number) {
    if (!tree) return null;

    let closestValue: number = tree.value;

    let current: BST | null = tree;

    while (current) {
        if (
            Math.abs(target - current.value) < Math.abs(target - closestValue)
        ) {
            closestValue = current.value;
        }

        current = target < current.value ? current.left : current.right;
    }

    return closestValue;
}
