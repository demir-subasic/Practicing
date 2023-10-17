// 1 --- Here's an example to print the string Hello world! to the console: console.log('Hello world!');
// Use the console.log() method to print the value of the variable a where noted in the code.

let a = 5;
let b = 1;
a++;
let sumAB = a + b;
console.log(a);




// 2 --- There are many methods to use with console to output messages. log, warn, and clear to name a few. The freeCodeCamp console will only output log messages, while the browser console will output all messages. When you make changes to your code, it will automatically run and show the logs. The freeCodeCamp console is then cleared each time your code runs.
//First, open your browser console so you can see the logs. To do that, you can right-click the freeCodeCamp navigation bar at the top and click inspect on most browsers. Then find the console tab in the window that opens.
//After that, use console.log to log the output variable. View the two consoles to see the log. Finally, use console.clear after your log to clear the browser console. View the difference in the two consoles.

let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
// console.clear()




// 3 --- Add two console.log() statements to check the typeof each of the two variables seven and three in the code.

let seven = 7;
let three = "3";
console.log(typeof seven);
console.log(typeof three);




// 4 --- Transposed, missing, or miscapitalized characters in a variable or function name will have the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.
// Fix the two spelling errors in the code so the netWorkingCapital calculation works.

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);




// 5 --- Fix the two pair errors in the code.
// let myArray = [1, 2, 3;
// let arraySum = myArray.reduce((previous, current =>  previous + current);
// console.log(`Sum of array values is: ${arraySum}`);

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);




// 6 --- Fix the string so it either uses different quotes for the href value, or escape the existing ones. Keep the double quote marks around the entire string.
// let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
// console.log(innerHtml);

let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);




// 7 --- Fix the condition so the program runs the right branch, and the appropriate value is assigned to result.
// if(x = y) {
//     result = "Equal!";
//   } else {
//     result = "Not equal!";
//   }
  
//   console.log(result);

if(x === y) {
    result = "Equal!";
  } else {
    result = "Not equal!";
  }
console.log(result);




// 8 --- Fix the code so the variable result is set to the value returned from calling the function getNine.
// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
//   }
//   let result = getNine;
//   console.log(result);

function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
} 
let result = getNine();
console.log(result);




// 9 --- The function raiseToPower raises a base to an exponent. Unfortunately, it's not called properly - fix the code so the value of power is the expected 8.
// function raiseToPower(b, e) {
//     return Math.pow(b, e);
//   }
//   let base = 2;
//   let exp = 3;
//   let power = raiseToPower(exp, base);
//   console.log(power);

function raiseToPower(b, e) {
    return Math.pow(b, e);
}
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp);
console.log(power);



// 10 --- Fix the two indexing errors in the following function so all the numbers 1 through 5 are printed to the console.
// function countToFive() {
//     let firstFive = "12345";
//     let len = firstFive.length;
//     for (let i = 1; i <= len; i++) {
//       console.log(firstFive[i]);
//     }
// }
// countToFive();

function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    for (let i = 0; i < len; i++) {
      console.log(firstFive[i]);
    }
}
countToFive();




// 11 --- The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized (set back to an empty array) in the outer loop. Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].
// function zeroArray(m, n) {
//     let newArray = [];
//     let row = [];
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         row.push(0);
//       }
//       newArray.push(row);
//     }
//     return newArray;
// }
// let matrix = zeroArray(3, 2);
// console.log(matrix);

function zeroArray(m, n) {
    let newArray = [];
    for (let i = 0; i < m; i++) {
      let row = [];
      for (let j = 0; j < n; j++) {
        row.push(0);
      }
      newArray.push(row);
    }
    return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
  
