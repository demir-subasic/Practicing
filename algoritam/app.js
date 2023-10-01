// 1--- Output the largest number from each string  
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function largestOfFour(arr) {
    const result = [];
    for (let subbArray of arr) {
      let largestNumber = Math.max(...subbArray)
       result.push(largestNumber)
    }
    return result;
}