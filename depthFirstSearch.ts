// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
    name: string;
    children: Node[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string) {
        this.children.push(new Node(name));
        return this;
    }

    // O(v + e) time
    // O(v) space
    // where v is the vertices in the graph and e is the edges.
    depthFirstSearch(visitedValues: string[]) {
        // Add the current node value to the visited array list.
        visitedValues.push(this.name);
        // For each child, we want to call DFS from left to right
        for (const child of this.children) {
            // For each child, we want to perform DFS on it
            // We also need to keep track of the nodes we have already visited
            // so we pass that in.
            child.depthFirstSearch(visitedValues);
        }
        return visitedValues;
    }
}
