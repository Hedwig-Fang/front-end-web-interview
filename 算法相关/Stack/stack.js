const _items = Symbol();
class Stack {
  constructor() {
    this[_items] = [];
  }
  push(element) {
    this[_items].push(element);
  }
  pop() {
    if (this[_items].length === 0) return undefined;
    return this[_items].pop(); // remove from the end
  }
  peek() {
    return this[_items][this[_items].length - 1];
  }
  isEmpty() {
    return this[_items].length === 0;
  }
  size() {
    return this[_items].length;
  }
  clear() {
    this[_items] = [];
  }
  print() {
    return this[_items].toString();
  }

}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack)