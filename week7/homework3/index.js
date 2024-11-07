const re = document.getElementById("result");
const unsorted = document.getElementById("unsorted");

console.log("hello");
const unSort = [3, 8, 7, 6, 5, -4, -3, 2, 1];
const sortedArray = [...unSort];
let temp;
console.log(unSort);
// unsorted
unsorted.innerHTML = unSort;
//re = sorted
re.innerHTML = unSort;
// Bubble Sort in ascending order
for (let i = 0; i < sortedArray.length; i++) {
  for (let j = 0; j < sortedArray.length - i - 1; j++) {
    if (sortedArray[j] > sortedArray[j + 1]) {
      let temp = sortedArray[j];
      sortedArray[j] = sortedArray[j + 1];
      sortedArray[j + 1] = temp;
    }
  }
}

console.log("Sorted array:", sortedArray);
re.innerHTML = sortedArray.join(", ");
