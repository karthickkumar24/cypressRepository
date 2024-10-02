function numOfDigits (m) {
    if (m === 0) { // only for 0
        return 1;
    }
let count = 0;

    while (m > 0) { // greater than 0 integrers  10 > 0 10 - 10 % 10 /10 = 1 , 1- 1% 10/10 = 0 2
        m = (m - (m  % 10)) / 10; // to remove the last digit m = (111- (11)) / 10 = 10 
       console.log(m);
       
        count++;
    }
return count;
}
console.log(numOfDigits(0));
console.log(numOfDigits(11));
console.log(numOfDigits(1086421999));

//Count Down from a Given Number
function countDown(start) {
    for (let i = start; i >= 1; i--) { //5 4 3 2 1
        console.log(i);
    }
}
countDown(5);

//Print a Triangle Pattern
function printTriangle(height) {
    for (let i = 1; i <= height; i++) { //1 2 3 4
        console.log('*'.repeat(i));
    }
}
printTriangle(4);

//Find All Divisors of a Number
// Create a function that finds all divisors of a given number and returns them in an array.
function findDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) { 
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
console.log(findDivisors(15));

//Check if a Number is a Perfect Number.Write a function that checks if a given number is a perfect number (a number that is equal to the sum of its proper divisors, excluding itself).
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
console.log(isPerfectNumber(28));

// program to find duplicate characters in a string





