// Array Implementation - O(n) time complexity to either add or remove from the queue

/*
let q = [];
q.push(1)
q.push(2)
q.push(3)
q.shift()
q.shift()
q.shift()

q.unshift(1)
q.unshift(2)
q.unshift(3)
q.pop();
q.pop();
q.pop();
*/

// LINKED List Implementation - add to end, remove from beginning

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(val) {
    if (!this.first) return null;
    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
