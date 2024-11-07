const aug = document.getElementById("many-aug");
const aug2 = document.getElementById("many-aug2");
const aug3 = document.getElementById("many-aug3");
function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(4, 5, 6, 7)); // 22
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

let num3 = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let num2 = sum(4, 5, 6, 7);
let num1 = sum(1, 2, 3);
aug3.innerHTML = num3;
aug2.innerHTML = num2;
aug.innerHTML = num1;
