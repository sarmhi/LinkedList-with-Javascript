class LinkedList {
  constructor(value) {
      this.head = {
          value: value,
          next: null
      };
      this.tail = this.head;
      this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if (typeof index !== 'number') {
      throw new Error('Index must be an integer.')
    } 
    if(index >= this.length) {
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    if (typeof index !== 'number') {
      throw new Error('Index must be an integer.')
    } 
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters 
    if (typeof index !== 'number') {
      throw new Error('Index must be an integer.')
    } 
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
  reverse() {
    //check for a single element in the list
    if (!this.head.next){
      return this;
    }
    //get references for first and second elements
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    //traverse list while reversing the pointers
    while (second){
      let temp = second.next;
      second.next = first;
      first= second;
      second = temp;

    }
    this.head.next = null
    this.head = first;

    return this.printList();
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(3, 99);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 89);
console.log(myLinkedList.printList());
myLinkedList.remove(1);
console.log(myLinkedList.printList());

console.log(myLinkedList.reverse());
