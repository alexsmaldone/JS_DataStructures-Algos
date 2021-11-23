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

  /* Pseudocode for INSERT
  - create new node
  - start at root
    - check if there is root, if not - root now becomes new node
    - if root, check if value of new node is > or < than value of root
    - if greater
      - check to see if node to right
        - if there is, move to that node and repeat these steps
        - if not, add node as the right property
    - if less
      - check to see if node to the left
        - if there is, move to that node and repeat these steps
        - if not, add that node as the left property
    -return tree
  */
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

  /*
  FIND Pseudocode
  - check if there is root, if not we're done searching
  - if there is root, check fi value of new node is the value we are looking for. if we found it, we're done
  - if not, check to see if the valeu is greater than ro less than the value of the root
  - if greater
    - check to see if node to right
      - if there is, move to tthat node and repeat these steps
      - if there is not, we're done searching
  - if it is less
    - check to see if node to the left
      - if node, move to that node and repeat these steps
      - if not, we're done searching!
  */
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
}

let tree = new BinarySearchTree();

tree.insert(10);

console.log(tree.find(10));
