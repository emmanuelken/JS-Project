//Reverse a string

function reverseString(str) {
 return str.split('').reverse().join('');
}

// const x = "Hello"
// const reversedString = reverseString(x);
// console.log(reversedString);

//count characters
 function count(str) {
    return str.length;
}

// const x = "hello";
// const counting = count(x);
// console.log(counting);

//Capitalize words
function capitalize(firstletter) {
    return firstletter.replace(/\b\w/g, function(character) {
        return character.toUpperCase();
    });
}

// const words = "chief queen";
// const capitalLetter = capitalize(words);
// console.log(capitalLetter);

//ARRAY FUNCTIONS

//Maximum value
function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//Minimum Value
function findMin(arr) {
    if (arr.length === 0) {
        return null;
    }
    let min = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
    }
    return min;
}

//sum of array
function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//Filter Array
function filterArray(arr, condition) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}


//MATHEMATICAL FUNCTIONS
//factorial
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

//prime number
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

//Fibonacci Sequence
function generateFibonacci(numTerms) {
    // Initialize the Fibonacci sequence with the first two terms
    let fibonacciSequence = [0, 1];

    // Generate subsequent terms of the Fibonacci sequence
    for (let i = 2; i < numTerms; i++) {
        let nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextTerm);
    }

    return fibonacciSequence;
}

