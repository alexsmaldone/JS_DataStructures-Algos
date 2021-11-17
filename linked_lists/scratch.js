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

  /*
  Retrieving number by its position in the index
  - funciton should accept an index
  - if index is < 0 or >= legnth of list, return null
  - loop thru list until you reach index and return node at that specific index
  */
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  /*
  Changing value of a node based on its position in the LinkedList
  - function with index and value
  - use get function to find the specific node
  - if node is not found, reutnr false
  - if node is found, set value of that node to be the value passed to the function and return true
  */
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  /*
  insert new node at position we specify
  - if index is < 0 or greater than length, return false
  - if index is same as the length, push new node to end of lsit
  - if index is 0, unshift new node to start of list
  - otherwise using get method, access node at the index - 1
  - set the next property on that node to be the new node
  - set next property on new node to be previous next
  - increment length
  - return true;
  */
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  /*
  remove node from linked list at specific position
  - if index is < 0 or >= length, return undefined
  - if index is same as length - 1, pop
  - if index is 0, shift
  - otherwise, using get method, access the node at index - 1
  - set next property on that node to be the next of the next node
  - decrement hte length
  - return value of the node removed
  */

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if ((index = 0)) return this.shift();
    if ((index = this.length - 1)) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;

    this.length--;
    return removed;
  }

  /*
  reverse the linked list in place
  - swap head and tail
  - create variables: next, prev,
  - create variable called node and initialize it to the head property
  - loop thru the list
  - set next to be the next property on whatever node is
  - set the next preperty on the node to be whatever prev is
  - set prev to be the value of the node variable
  - set the node variable to be the value of the next variable
  */

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
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
