class PriorityQueue {
  constructor() {
      this.heap = [];
  }

  enqueue(node) {
      this.heap.push(node);
      this.heapifyUp();
  }

  dequeue() {
      if (this.isEmpty()) {
          return null;
      }

      const root = this.heap[0];
      const lastNode = this.heap.pop();

      if (this.heap.length > 0) {
          this.heap[0] = lastNode;
          this.heapifyDown();
      }

      return root;
  }

  isEmpty() {
      return this.heap.length === 0;
  }

  heapifyUp() {
      let currentIndex = this.heap.length - 1;

      while (currentIndex > 0) {
          const parentIndex = Math.floor((currentIndex - 1) / 2);

          if (this.heap[parentIndex].cost > this.heap[currentIndex].cost) {
              this.swap(parentIndex, currentIndex);
              currentIndex = parentIndex;
          } else {
              break;
          }
      }
  }

  heapifyDown() {
      let currentIndex = 0;

      while (true) {
          const leftChildIndex = 2 * currentIndex + 1;
          const rightChildIndex = 2 * currentIndex + 2;
          let smallestChildIndex = currentIndex;

          if (
              leftChildIndex < this.heap.length &&
              this.heap[leftChildIndex].cost < this.heap[smallestChildIndex].cost
          ) {
              smallestChildIndex = leftChildIndex;
          }

          if (
              rightChildIndex < this.heap.length &&
              this.heap[rightChildIndex].cost < this.heap[smallestChildIndex].cost
          ) {
              smallestChildIndex = rightChildIndex;
          }

          if (smallestChildIndex !== currentIndex) {
              this.swap(currentIndex, smallestChildIndex);
              currentIndex = smallestChildIndex;
          } else {
              break;
          }
      }
  }

  swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

