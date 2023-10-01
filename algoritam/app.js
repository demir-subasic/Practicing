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
