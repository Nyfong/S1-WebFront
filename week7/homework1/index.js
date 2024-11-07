const userInput = document.getElementById("user-input");
const btn = document.getElementById("btn");
const searchResult = document.getElementById("searchResult");

// const number = [
//   "zero",
//   "one",
//   "two",
//   "three",
//   "four",
//   "five",
//   "six",
//   "seven",
//   "eight",
//   "nine",
// ];

// const convertNumber = (num, result) => {
//   console.log(typeof num);

//   number.forEach((el, i) => {
//     if (result[i] == i) {
//       console.log(el);
//       searchResult.innerHTML = el;
//     }
//   });
// };

// const userResult = () => {
//   const num = parseInt(userInput.value); // Convert to number
//   const result = Array.from(String(num), Number); // Convert number to string, then to an array of digits
//   console.log(result);
//   convertNumber(num, result);
// };

const numberWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const convertNumber = (numArray) => {
  let wordResult = "";

  numArray.forEach((digit) => {
    wordResult += numberWords[digit] + " "; // Add each word with a space
  });

  searchResult.innerHTML = wordResult.trim(); // Remove any trailing space
};

const userResult = () => {
  const num = parseInt(userInput.value);
  if (!isNaN(num)) {
    const result = Array.from(String(num), Number); // Convert number to array of digits
    console.log(result); // e.g., [1, 2, 3] for input "123"
    convertNumber(result);
  } else {
    searchResult.innerHTML = "Please enter a valid number.";
  }
};
