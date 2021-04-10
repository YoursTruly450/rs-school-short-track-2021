// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.items = [];
    this.start = null;
    this.end = null;
  }

  get size() {
    return this.items.length;
  }

  enqueue(element) {
    const list = new ListNode(element);
    this.items.push(element);
    list.value = element;
    if (this.start) {
      this.end.next = list;
      this.end = list;
    } else {
      this.start = list;
      this.end = list;
    }
  }

  dequeue() {
    if (!this.start) {
      return null;
    }
    if (this.start === this.end) {
      this.end = null;
    }
    this.start = this.start.next;
    return this.items.shift();
  }
}

module.exports = Queue;
