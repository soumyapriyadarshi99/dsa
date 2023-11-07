const arr = [1, 3, 2, 7, 6, 2, 5];

const bubbleSort = (arr) => {
  for (let idx = 0; idx < arr.length - 1; idx++) {
    let flag = 0;
    for (let jdx = 0; jdx < arr.length - 1 - idx; jdx++) {
      if (arr[jdx] > arr[jdx + 1]) {
        flag = 1;
        let temp = arr[jdx + 1];
        arr[jdx + 1] = arr[jdx];
        arr[jdx] = temp;
      }
    }
    if (flag === 0) {
      break;
    }
    console.log(arr);
  }
  //   console.log(arr);
};

bubbleSort(arr);
