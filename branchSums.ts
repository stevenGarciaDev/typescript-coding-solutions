// This is the class of the input root.
// Do not edit it.
class BinaryTree {
value: number;
left: BinaryTree | null;
right: BinaryTree | null;

constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
}
}

export function branchSums(root: BinaryTree): number[] {
let sums: number[] = [];
    if (root === null) return sums;
    if (isALeaf(root)) return [root.value];
    if (root.left != null)
        _branchSums(root.left, root.value, sums);
    if (root.right != null)
        _branchSums(root.right, root.value, sums);
    
return sums;
}

export function _branchSums(node: BinaryTree, currentSum: number, sums: number[]): void {
    if (isALeaf(node)) {
        sums.push(currentSum + node.value);
        return;
    }
    
    if (node.left != null)
        _branchSums(node.left, currentSum + node.value, sums);
    
    if (node.right != null)
        _branchSums(node.right, currentSum + node.value, sums);
}

function isALeaf(node: BinaryTree): boolean {
    return (node.left === null && node.right === null);
}
