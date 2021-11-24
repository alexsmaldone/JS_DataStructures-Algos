class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // Breadth-first Search PSEUDOCODE
  /*
  - create a queue (this can be an array) and a varaible to store the values of nodes visited
  - place the root in the queue
  - Loop as long as there is anythign in the queue
    - Dequeue a node form the queue and push the vlaue of the node into the variable that stores the nodes
    - If there is a left property on the node dequeued - add it to the queue
    - IF there is a right property on the node dequeueed - add it to the queue
  - Return the variable that stores the values
  */
  BFS() {
    let data = [],
      queue = [],
      node = this.root;

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // DFS PreOrder pseudocode
  /*
  - create variable to stor ethe values of nodes visisted
  - stored the root of the BST in a variable called current
  - write a helper function which acceps a node
    - push value of the node to the variable that stores the values
    - if the node has a left property, cfall the helper function with the left property on the node
    - if the node has a right poperty, call the helper function with the right property on the node
  - invoke the helper function with the current variable
  - return the array of values
  */

  DFSpreOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }

  // DFS PostOrder pseudocode
  /*
  - create variable to stor ethe values of nodes visisted
  - stored the root of the BST in a variable called current
  - write a helper function which acceps a node
  - if the node has a left property, cfall the helper function with the left property on the node
  - if the node has a right poperty, call the helper function with the right property on the node
  - push value of the node to the variable that stores the values
  - invoke the helper function with the current variable
  - return the array of values
  */

  DFSpostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }

    traverse(current);
    return data;
  }

  // DFS inOrder pseudocode
  /*
  - create variable to stor ethe values of nodes visisted
  - stored the root of the BST in a variable called current
  - write a helper function which acceps a node
  - if the node has a left property, cfall the helper function with the left property on the node
  - push value of the node to the variable that stores the values
  - if the node has a right poperty, call the helper function with the right property on the node
  - invoke the helper function with the current variable
  - return the array of values
  */
  DFSinOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(current);
    return data;
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSinOrder());
