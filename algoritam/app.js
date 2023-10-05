// 1--- Output the largest number from each array

function largestOfFour(arr) {
    const result = [];
    for (let subbArray of arr) {
      let largestNumber = Math.max(...subbArray)
       result.push(largestNumber)
    }
    return result;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));




// 2--- Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}  
console.log(confirmEnding("Bastian", "n"));



// 3--- Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
    let string = "";
    for (let i = 0; i < num; i++){
      string += str;
    }
    return string;
  }
  
 console.log( repeatStringNumTimes("*", 3));




// 4--- Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (str.length > num){
      return str.slice(0, num) + '...'
    } else {
      return str;
    }
}

console.log(truncateString("This-is-some text about programming", 8))



// 5--- Check if the given word is a polynomial, if so then return true, otherwise return false

function isPalindrome(e) {
    let cleanedWord = e.toLowerCase().replace(/\s/g, "");
    let reverseWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reverseWord;
}
console.log(isPalindrome('oko'));
console.log(isPalindrome('program'));



// 6--- Go through the array and check if it has an element that is divisible by 2 then return it, if there is no such element in that array then return undefined.

function findElement(arr, func) {
    let num = [];
    for (let i = 0; i < arr.length; i++){
      num = arr[i]
      if (func(num)){
        return num;
      }
    }
    return undefined;
  }
  
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));



// 7--- Check if a value is classified as a boolean primitive. Return true or false. Boolean primitives are true and false.

function booWho(bool) {
    if (bool === true || bool === false){
      return true;
    }
    return false;
}
  
console.log(booWho(null));



// 8--- Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
    const lower = str.split(" ");
    const newArr = [];
    for (let word in lower) {
      newArr[word] = lower[word][0].toUpperCase() + lower[word].slice(1).toLowerCase();
    }
    return newArr.join(" ");
  }
  
console.log(titleCase("I'm a little tea pot"));



// 9 --- You are given two arrays and an index. Copy each element of the first array into the second array, in order.Begin inserting elements at index n of the second array.Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {

  let arr = arr2.slice();
 
  arr.splice(n,0,...arr1)
  return arr;
 }
 
 frankenSplice([1, 2, 3], [4, 5, 6], 1);



