function reverse(word){
  const wordArray = word.split(``)
  const reversedWordArray = wordArray.reverse()
  const reversedWord = reversedWordArray.join(``)
  return reversedWord
}

function isPalindrome(word) {
const reverseWord = reverse(word)

if (word === reverseWord) {
  return true
} else{
  return false
}

}
//     var len = word.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (word[i] !== word[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }


  //   if(booleanValue){
//     return word = [...word].reverse().join("");;
// }

  
  //console.log(word)

  
  // Write your algorithm here


/* 
  write a function that returns true if it is a Palendrome, 
  and returns false if it is not.

  the code needs to red the words forward and backwords?
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", isPalindrome("racecar"));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", isPalindrome("robot"));
// }

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
