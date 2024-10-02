/// <reference types="cypress" />

    //Check if a number is odd or even in JavaScript
        let number = 4;
            if(number % 2 == 0){
              console.log(`${number} is a Even number`)
            }
            else{
              console.log(`${number} is a Odd number`)
            }
       

       // Write a program that determines whether a given number is positive or not
       let num = 5;
       if(num > 0){
        console.log(`${num} is a positive number`)
      }
      else{
        console.log(`${num} is a not positive number`)
      }

      //Write a program to determine the greater of two numbers.
        let a = 5;
        let b = 5;
        if (a > b){
        console.log(`${a} is a greater number`)
        }
        else{
        console.log(`${b} is a greater number`)
        }

       //Write a program that calculates the ticket price based on age
        let age = 25;
        let ticketcost;
        if (age < 12 ){
          ticketPrice = 5;
        } else if (age >= 12 && age < 18) {
          ticketPrice = 10;
        } else if (age >= 18 && age < 60) {
          ticketPrice = 20;
        } else {
          ticketPrice = 15; 
        }
        console.log("Ticket Price: " + ticketPrice);

        //Write a program to check whether the length of the string CodeChef is less than 5 or greater.
        //If the length is greater than 5 print Long String
        //If it's less than or equal to 5 print Short String
        let string = "CodeChef";
        if (string.length > 5 ){
            console.log(`${string} is Long String`)
        }
        else if  (string.length <= 5 ) {
            console.log(`${string} is Short String`)
        } 


        //Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, 
        //and displays a message on the screen.
        //Sample Output :
        //"0 is even"
        //"1 is odd"
        //"2 is even"............
        for (let i = 0; i <= 15 ; i++)
        if(i % 2 == 0){
          console.log(`${i} is a Even number`)
        }
        else{
          console.log(`${i} is a Odd number`)
        }

        //You have an array of items, and you want to perform an action on each item.
        let animals = ["lion", "tiger", "horse"];
        animals.forEach(item =>{
            console.log(item)
        })



   //Write a function to reverse a number
   function reverseNum(num) {
   let numStr = num.toString();
   const reversedStr = numStr.split('').reverse().join('');
   const reversedNum = parseInt(reversedStr, 10);
   return reversedNum;
   }
   const numbr = 12345;
   const reversed = reverseNum(numbr);
   console.log(reversed);

//Return the Sum of Two Numbers
function twonumbers(a, b) {
  let sum = a + b;
  return sum;
}
let sumNumbers = twonumbers(5, 7);
console.log("the sum is "+ sumNumbers);

//Create a function that returns true when num1 is equal to num2; otherwise return false.
function sameNum(num1, num2){
  if (num1 == num2){
   return true;
  } else {
    return false;
  }
}
let n1 = 5;
let n2 = 5;
let answer = sameNum(n1, n2);
console.log(answer);


//Create a function that accepts an array and returns the last item in the array. ex.getLastItem([1, 2, 3]) ➞ 3
function getLastItem (ar) {
 if(ar.length === 0) {
  return undefined;
 }
 return ar[ar.length - 1];
}
console.log(getLastItem([1, 2, 6])); 

//Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels(str) {
const vowels = "aeiouAEIOU"
let count = 0;

for (i = 0; i < str.length; i++) {
  if (vowels.includes(str[i])) {
count ++ ;
  }
}
return count;
}
let resultCount = countVowels("Hello World!");
console.log( resultCount)

 //Write a function to find the count of a letter in a string
 function countLetter(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++){
  if (str.charAt(i) == letter) {
    count ++;
  }
  }
  return count;
 }
 let result = countLetter("good morning", "n");
 console.log(result);

//There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value 
        //in the given array.
        //Sample array :
        //array1 = [1,0,2,3,4];
        //array2 = [3,5,6,7,8,13];
        //Expected Output :
        //[4, 5, 8, 10, 12, 13]
        function sumArrays(array1,array2) {
          let length = Math.max(array1.length,array2.length);
          let sum = [];
          for (let i = 0; i < length; i++) {
           let value1 = i < array1.length ? array1[i] : 0;
           let value2 = i < array2.length ? array2[i] : 0;
           sum.push(value1 + value2);
          }
          return sum;
          }
          let array1 = [1, 0, 2, 3, 4];
          let array2 = [3, 5, 6, 7, 8, 13];
          let summedArray = sumArrays(array1, array2);
          console.log(summedArray);

          //find the largest number among three integers 
/*let n = 10;
let m = 25;
let i = 5;
let largest;
if( n > m && n > i){
   largest = n;
} else if (m > n && m > i) {
  largest = m;
} else {
  largest = i;
}
console.log(largest);*/
/*let n = 10;
let m = 25;
let i = 5;
let largest =  Math.max(10, 25, 5);
console.log(largest);*/

 /*function findlargest (n, m, i) {
  let result = Math.max(n, m, i);
  return result;
 }
 let largest =  findlargest(10, 25, 35);
 console.log(largest);*/

function findLargest (n, m, i){
if( n >= m && n >= i){
   return n;
} else if (m >= n && m >= i) {
 return m;
} else {
  return i;
}
}
let largest = findLargest (10, 15, 44);
console.log(largest);
  
  //find the small number among three integers 

  function findSmallest (n, m, i){
    if( n <= m && n <= i){
       return n;
    } else if (m <= n && m <= i) {
     return m;
    } else {
      return i;
    }
    }
    let smallest = findSmallest (10, 15, 44);
    console.log(smallest);

function findsmall (n, m, i) {
  let result = Math.min(n, m, i);
  return result;
 }
 let small =  findsmall(5, 25, 35);
 console.log(small);

 // write a program to print the first N natural even numbers 

 function printFirstNEvenNumbers (N) {
 if(N <= 0) {
    return;
  }
  for (let i = 1; i <= N; i ++){
console.log(i * 2);
  }
}
printFirstNEvenNumbers (5);

 // write a program to print the first N natural odd numbers 

 function printFirstNOddNumbers (N) {
  if(N <= 0) {
     return;
   }
   for (let i = 1; i <= N; i ++){
 console.log(i * 2 - 1);
   }
 }
 printFirstNOddNumbers (5);


 // write a program to print the first N multiples of 5 
 function printFirstNMultiples (N, M) {
  if(N <= 0) {
     return;
   }
   for (let i = 1; i <= N; i ++){
 console.log(i * M);
   }  
 }
 printFirstNMultiples(5, 12); 


