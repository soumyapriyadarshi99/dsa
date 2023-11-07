function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      arr[j] = key;
      j = j - 1;
    }
  }
  console.log("sortedarray : " + arr);
}

let arr = [7, 3, 5, 0, -4, 4, 2, 6];
insertionSort(arr);
