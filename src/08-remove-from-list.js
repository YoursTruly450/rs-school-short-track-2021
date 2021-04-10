/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  const arr = [];
  let list = l;
  while (list !== null) {
    if (list.value !== k) {
      arr.push(list.value);
    }
    list = list.next;
  }
  const newList = new ListNode(arr[0]);
  let obj = newList;
  for (let i = 1; i < arr.length; i++) {
    obj.next = new ListNode(arr[i]);
    obj = obj.next;
  }
  return newList;
}

module.exports = removeKFromList;
