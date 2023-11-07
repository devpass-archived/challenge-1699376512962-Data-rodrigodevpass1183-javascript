const { Stack, Queue, LinkedList } = require('./dataStructures');

test('Stack functions', () => {
  const stack = new Stack();
  stack.push('A');
  stack.push('B');
  stack.push('C');
  expect(stack.top()).toBe('C');
  stack.pop();
  expect(stack.top()).toBe('B');
});

test('Queue functions', () => {
  const queue = new Queue();
  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');
  expect(queue.front()).toBe('A');
  queue.dequeue();
  expect(queue.front()).toBe('B');
});

test('Linked List functions', () => {
  const linkedList = new LinkedList();
  linkedList.append('A');
  linkedList.append('B');
  linkedList.append('C');
  expect(linkedList.head()).toBe('A');
  linkedList.delete('B');
  expect(linkedList.head()).toBe('A');
});