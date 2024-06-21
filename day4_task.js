// Do the below programs using annonymous function & IIFE:-

// a. Print the odd number in an array :-
  
// annonymous:-
// -------------
// const printOddsForEach = function(arr) {
//       let result = [];
//       arr.forEach(num => {
//           if (num % 2 !== 0) {
//               result.push(num);
//           }
//       });
//       return result;
//   };
//   console.log(printOddsForEach([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
  //

// IIFE:-
// -------------

// (function(arr) {
//   let result = [];
//   arr.forEach(num => {
//       if (num % 2 !== 0) {
//           result.push(num);
//       }
//   });
//   console.log(result);
// })([1, 2, 3, 4, 5]); // Output: [1, 3, 5]


// --------------------------------------------------------


// B.Convert all the strings to title caps in a string array

// annonymous:
// -------------
// const toTitleCapsForEach = function (arr) {
//   let result = [];
//   arr.forEach((str) => {
//     result.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
//   });
//   return result;
// };
// console.log(toTitleCapsForEach(["hello", "world"]));   // Output: ["Hello", "World"]


// IIFE:-
// -------------

// (function(arr) {
//   let result = [];
//   arr.forEach(str => {
//       result.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
//   });
//   console.log(result);
// })(["hello", "world"]); // Output: ["Hello", "World"]


// --------------------------------------------------------



// C. Sum of all numbers in an array:-

// annonymous:
// -------------
// const sumArray = function(arr) {
//   let sum = 0;
//   arr.forEach(function(num) {
//       sum += num;
//   });
//   return sum;
// };

// const result = sumArray([10,20,30,40,50]);
// console.log(result); // Output: 15



// IIFE:-
// -------------

// (function(arr){
//   let sum = 0;
//   arr.forEach(function(number){
//     sum += number;
// })
   
// console.log(sum);
// })([10,20,30,40,50])
// --------------------------------------------------------------

//d. Return all the prime numbers in an array

// Using forEach loop
      // Anonymous function:-

    //   const getPrimesForEach = function(arr) {
    //     let result = [];
    //     arr.forEach(num => {
    //         if (isPrime(num)) {
    //             result.push(num);
    //         }
    //     });
    //     return result;
    // };
    // console.log(getPrimesForEach([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]
    
    
    // IIFE:-

  //   (function(arr) {
  //     let result = [];
  //     arr.forEach(num => {
  //         if (isPrime(num)) {
  //             result.push(num);
  //         }
  //     });
  //     console.log(result);
  // })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Output: [2, 3, 5, 7]
  
  // --------------------------------------------------------------

// E.Return all the palindromes in an array:-

// Using forEach Loop:(annonymous):-
// -----------------

// const findPalindromesForEach = function(arr) {
//   const palindromes = [];
//   arr.forEach(word => {
//     if (word === word.split('').reverse().join('')) {
//       palindromes.push(word);
//     }
//   });
//   return palindromes;
// };

// const words2 = ['racecar', 'hello', 'level', 'world', 'radar', 'openai'];
// const palindromes2 = findPalindromesForEach(words2);

// console.log(palindromes2); // ['racecar', 'level', 'radar']



// IIFE:-
// -------------
// const palindromesForEach = (function(arr) {
//   const palindromes = [];
//   arr.forEach(word => {
//     if (word === word.split('').reverse().join('')) {
//       palindromes.push(word);
//     }
//   });
//   return palindromes;
// })(['racecar', 'hello', 'level', 'world', 'radar', 'openai']);

// console.log(palindromesForEach); // ['racecar', 'level', 'radar']

// -----------------------------------------------------------------

//F. Return median of two sorted arrays of the same size :-

// using ForEach:-
// -------------

// const findMedianForEach = function(arr1, arr2) {
//   const merged = [];

//   arr1.forEach(num => merged.push(num));
//   arr2.forEach(num => merged.push(num));

//   merged.sort((a, b) => a - b);

//   const mid = Math.floor(merged.length / 2);
//   return (merged[mid - 1] + merged[mid]) / 2;
// };

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// console.log(findMedianForEach(arr1, arr2)); // 3.5

// IIFE:-
// -------------
// const medianForEach = (function(arr1, arr2) {
//   const merged = [];

//   arr1.forEach(num => merged.push(num));
//   arr2.forEach(num => merged.push(num));

//   merged.sort((a, b) => a - b);

//   const mid = Math.floor(merged.length / 2);
//   return (merged[mid - 1] + merged[mid]) / 2;
// })([1, 3, 5], [2, 4, 6]);

// console.log(medianForEach); // 3.5

// ---------------------------------------------------------

// G. Remove duplicates from an array :-
//  Annonymous:-
// -------------

// const removeDuplicatesForEachLoop = function(arr) {
//   const unique = [];
//   arr.forEach(function(element) {
//       if (!unique.includes(element)) {
//           unique.push(element);
//       }
//   });
//   return unique;
// };

// const arrayForEachLoop = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArrayForEachLoop = removeDuplicatesForEachLoop(arrayForEachLoop);

// console.log(uniqueArrayForEachLoop); // Output: [1, 2, 3, 4, 5]


// IIFE :-
// --------

// const uniqueArrayForEachLoopIIFE = (function(arr) {
//   const unique = [];
//   arr.forEach(function(element) {
//       if (!unique.includes(element)) {
//           unique.push(element);
//       }
//   });
//   return unique;
// })([1, 2, 2, 3, 4, 4, 5]);

// console.log(uniqueArrayForEachLoopIIFE); // Output: [1, 2, 3, 4, 5]
// ---------------------------------------------------------------------------

// g. Remove duplicates from an array:-

// anonymous:-
// -------

// const removeDuplicates = function(arr) {
//   const uniqueElements = [];
//   arr.forEach(element => {
//       if (!uniqueElements.includes(element)) {
//           uniqueElements.push(element);
//       }
//   });
//   return uniqueElements;
// };

// const array = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArray = removeDuplicates(array);

// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// IIFE:-
// -------

// const uniqueArray = (function(arr) {
//   const uniqueElements = [];
//   arr.forEach(element => {
//       if (!uniqueElements.includes(element)) {
//           uniqueElements.push(element);
//       }
//   });
//   return uniqueElements;
// })([1, 2, 2, 3, 4, 4, 5]);

// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


// ------------------------------------------------------------------

// H. Rotate an array by K times:-

// Anonymous & iife
// -----------

// (function(arr, K) {
//   K = K % arr.length;

//   const rotateArray = function(arr, K) {
//       // Reverse the entire array
//       arr.reverse();
      
//       // Reverse the first K elements
//       for (let i = 0, j = K - 1; i < j; i++, j--) {
//           [arr[i], arr[j]] = [arr[j], arr[i]];
//       }

//       // Reverse the remaining elements
//       for (let i = K, j = arr.length - 1; i < j; i++, j--) {
//           [arr[i], arr[j]] = [arr[j], arr[i]];
//       }

//       return arr;
//   };

//   const rotatedArray = rotateArray(arr, K);

//   console.log("Using forEach loop:");
//   rotatedArray.forEach(value => {
//       console.log(value);
//   });

// })([1, 2, 3, 4, 5], 2);

// -----------------------------------------------





// Do the below programs in arrow function.
// --------------------------------------------
// --------------------------------------------
// 1. Print odd number in an array

const printOddNumbers = arr => {
  const result = [];
  arr.forEach(num => {
      if (num % 2 !== 0) result.push(num);
  });
  return result;
};
console.log(printOddNumbers([1, 2, 3, 4, 5])); // Output: [1, 3, 5]


// -------------------------------------------------------------
// 2. Convert all the string to tittle caps in a string array.
const toTitleCaps = arr => {
  const result = [];
  for (const str of arr) {
      const titleCased = str.replace(/\b\w/g, char => char.toUpperCase());
      result.push(titleCased);
  }
  return result;
};
console.log(toTitleCaps(["hello world", "javascript is fun"])); // Output: ["Hello World", "Javascript Is Fun"]
// --------------------------------------------------------

// 3.sum of all the numbers in an array.
const sumOfNumbers = arr => {
  let sum = 0;
  for (const num of arr) {
      sum += num;
  }
  return sum;
};
console.log(sumOfNumbers([1, 2, 3, 4, 5])); // Output: 15

// ---------------------------------------------------

// 4. Return all prime numbers in an array.
const isPrime = num => {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
      if (num % i === 0) return false;
  }
  return true;
};

const getPrimes = arr => {
  const result = [];
  for (const num of arr) {
      if (isPrime(num)) result.push(num);
  }
  return result;
};
console.log(getPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]
// -------------------------------------------------------
// 5. Return all the palindromes in an array.

const isPalindrome = str => str === str.split('').reverse().join('');

const getPalindromes = arr => {
    const result = [];
    for (const str of arr) {
        if (isPalindrome(str)) result.push(str);
    }
    return result;
};
console.log(getPalindromes(["madam", "racecar", "hello", "world"])); // Output: ["madam", "racecar"]
