const { Stack, Queue, LinkedList } = require('./dataStructures');

const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
console.log('Stack:', stack);
console.log('Top of stack:', stack.top());
stack.pop();
console.log('After pop:', stack);

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log('Queue:', queue);
console.log('Front of queue:', queue.front());
queue.dequeue();
console.log('After dequeue:', queue);

const linkedList = new LinkedList();
linkedList.append('A');
linkedList.append('B');
linkedList.append('C');
console.log('Linked List:', linkedList);
console.log('Head of linked list:', linkedList.head());
linkedList.delete('B');
console.log('After delete:', linkedList);