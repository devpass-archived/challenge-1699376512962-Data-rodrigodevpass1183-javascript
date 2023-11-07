class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.topNode = null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.topNode;
    this.topNode = newNode;
  }

  pop() {
    if (this.topNode) {
      this.topNode = this.topNode.next;
    }
  }

  top() {
    return this.topNode ? this.topNode.data : null;
  }
}

class Queue {
  constructor() {
    this.frontNode = null;
    this.rearNode = null;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (!this.frontNode) {
      this.frontNode = newNode;
      this.rearNode = newNode;
    } else {
      this.rearNode.next = newNode;
      this.rearNode = newNode;
    }
  }

  dequeue() {
    if (this.frontNode) {
      this.frontNode = this.frontNode.next;
    }
  }

  front() {
    return this.frontNode ? this.frontNode.data : null;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.headNode) {
      this.headNode = newNode;
    } else {
      let current = this.headNode;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  delete(data) {
    if (!this.headNode) {
      return;
    }

    if (this.headNode.data === data) {
      this.headNode = this.headNode.next;
      return;
    }

    let current = this.headNode;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  head() {
    return this.headNode ? this.headNode.data : null;
  }
}

module.exports = { Stack, Queue, LinkedList };