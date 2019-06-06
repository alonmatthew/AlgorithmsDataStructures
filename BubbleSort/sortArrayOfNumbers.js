// sort an unsorted array of numbers

function bubbleSort(arr) {
  let noSwaps;
  for(let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(var j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j+1]) {
        // SWAP
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}
