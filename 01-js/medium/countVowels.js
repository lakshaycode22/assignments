/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(i){
  if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' || i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U') return true;
  return false;
}
function countVowels(str) {
    // Your code here
    let count = 0;
    for(let i = 0;  i < str.length; i++){
      if(isVowel(str[i])) count++;
    }
    return count;
}

module.exports = countVowels;