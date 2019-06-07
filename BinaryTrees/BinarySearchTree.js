class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree for numbers
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if(!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if(val === current.val) return null;
        if(val < current.val) {
          if(current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if(current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if(!this.root) return null;
    let current = this.root;
    let found = false;
    while(current && !found) {
      if(val < current.val) {
        current = current.left;
      } else if(val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if(!found) return null;
    return current;
  }
}
