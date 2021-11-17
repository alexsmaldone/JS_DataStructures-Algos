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
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /*
- if there are no nodes in the list, return undefined
- loop through list until you reach tail
- set the nexdt property of the 2nd to last node ot be null
- set the tail to be the 2nd to last node
- decrement the length of the list by 1
- return value of node removed
*/
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /*
  - if there are no nodes, return undefined
  - store current head property in a variable
  - set head property to be the current head's next property
  - decrement length by 1
  - return value of the node removed
  */
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;

    this.length--;
    return currentHead;
  }

  /*
  - create new node using value passed to function
  - if no head on list, set the ehad and tail to be newly createed node
  - otherwise set newly created nod'es next property to be the current head property on the list
  - set head property on the list to be that newly created node
  - increment length of list by 1
  - return linkedlist
  */
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail - newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get() {}

  set() {}

  insert() {}

  remove() {}

  reverse() {}
}

let list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
console.log(list);

// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
