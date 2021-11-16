//piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  /*
  - This function should accept a value
  - Create  a new node using the value passed to the function
  - if there is no head property on the list, set the head and tail to be the newly created node
  - Otherwise set the next property on the tail to be the next node and set the tail property on the list to be the newly created node
  - increment length by 1
  */
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.next = newNode;
    }
    this.length++;
  }
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
