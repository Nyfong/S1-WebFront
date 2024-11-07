const notPalin = document.getElementById("notPalin");
const isPalin = document.getElementById("isPalin");

// Function to check Palindrome
function checkPalindrome(n) {
  let reverse = 0;
  // Copy of the original number so that the original
  // number remains unchanged while finding the reverse
  let temp = n;
  while (temp !== 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  // If reverse is equal to the original number, the
  // number is palindrome
  return reverse === n;
}

// Sample Input
let n1 = 54345;
let n2 = 45324;
//function for checking boht are palin drome or not
function checkBooth(n) {
  if (checkPalindrome(n)) {
    console.log("PalinDrome" + n);
    return (isPalin.innerHTML = n + " yes PalinDrome");
  } else {
    console.log("Not Palindrome");
    return (notPalin.innerHTML = n + " Not a PalinDrome");
  }
}

checkBooth(n1);
checkBooth(n2);
