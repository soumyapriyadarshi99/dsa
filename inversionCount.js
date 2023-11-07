function inversionCountBruteForce(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        ++count;
      }
    }
  }
  console.log(count);
}
function inversionCountInsertionSort(arr) {
  let maxCount = 0;
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      ++maxCount;
      arr[j + 1] = arr[j];
      arr[j] = key;
      j = j - 1;
    }
  }
  console.log(maxCount);
}

const arr = [10, 5, 1, 3, 4];
inversionCountBruteForce(arr);
inversionCountInsertionSort(arr);
