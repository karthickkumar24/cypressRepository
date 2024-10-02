 // Write a JS code to print a pattern using for loop

 function printPattern(range) {
    for(let i = 1; i <= range; i++){
      let str = " ";
      for(let j = 1; j <= i; j ++){
        str += j + " ";
      }
      console.log(str);
    }
  }
  printPattern(5);
  
  // Write a JS code to print a inverted pattern using for loop
  /*function printInvertPattern(M) {
  for(let i = M; i >= 1; i--){
    let st = " ";
    for(let j = 1; j <= i ; j ++){
      st += "*";
    }
    console.log(st);
  }
  }
  printInvertPattern(5);*/

 // Problem: Remove duplicate elements from an array.
 /*let array = [1, 2, 2, 3, 4, 4, 5];
 function removeDuplicates(arr) {
     return [...new Set(arr)];
 }
 console.log(removeDuplicates(array));*/

 function removeDuplicates(arr) {
    let seen = {};   
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (!seen[element]) {
            seen[element] = true; 
            result.push(element); 
        }
    }

    return result;
}
let arr1 = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr1)); 


//Remove the Special Characters from a String
//Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z0-9\s-_]/g, '');
}

const result = removeSpecialCharacters('Hello, World! @2024 #JavaScript$%^&*()');
console.log(result);

//Create a function which returns the length of a string, WITHOUT using String.length property. length("Hello World") ➞ 11

/*function length(s) {
	let count = 0;
    for (i= 0; s[i] !== undefined; i++) {
        count++;
    }
    return count;
}
console.log(length("Hello World")); 

function length(str) {
    let count = 0;
    while (true) {
        try {
            str[count];
            count++;
        } catch (e) {
            break;
        }
    }
    return count;
}
console.log(length("Hello World")); */

function length(str) {
    let count = 0;
    while (str.charAt(count) !== '') {
        count++;
    }
    return count;
}
console.log(length("Hello World")); 



//Write a JavaScript program to sort the items of an array.Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];Sample Output : -4,-3,1,2,3,5,6,7,8
/*const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr1.sort((a, b) => a - b);
const sortedArray = arr1.join(',');
console.log(sortedArray);



const arr2 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
arr2.sort((a, b) => b - a);
const sortedArrays = arr2.join(',');
console.log(sortedArrays);
 differnt ways 

 const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
 arr1.sort(function(a, b) {
 return a - b;
 })
 console.log(arr1); */

 function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) { // Outer loop to traverse through all array elements
        let key = arr[i];
        let j = i - 1; //
        while (j >= 0 && arr[j] > key) {         // Inner loop to perform the comparison and swapping // 
            arr[j + 1] = arr[j];  // Compare adjacent elements
            j--;
        }
        arr[j + 1] = key;  // logic ? 
    }
}
var arr2 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
insertionSort(arr2);
console.log(arr2.join(','));
 

//Write a function that reverses an array in place.

function reversesarray(arr){
    let start = 0;
    let end =  arr.length -1; start 0 1 5
    while(start < end){ 5 < 1
    let temp = arr[start]; 1
    arr[start] = arr[end]; 5
    arr[end] = temp; 5 2= 4 3 = 3 4 = 2 5 = 1
    start ++;
    end--;
    }
    return arr; 
}
console.log(reversesarray([1,2,3,4,5])); 5 4  3 2 1



//Write a program to count factors of a given number 
function countFactor(n) {
   let count = 0;
   for (i = 1; i <= n; i++){ 1 2 3 4 5 6 7 - 20 = 6 
    if (n % i == 0) {
        count++;
    }
   }
   return count;
}
console.log(countFactor(20));

//Create a function that will return an integer number corresponding to the amount of digits in the given integer num.
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
console.log(numOfDigits(10));
console.log(numOfDigits(1086421999));



//Write a function that takes an array of integers and returns the largest difference between any two numbers in the array. 

function largestDifference(arr) { 
    let min = arr[0]; // Initialize min to the first element
    let maxDiff = 0; // Initialize maxDiff to 0
    for (let i = 1; i < arr.length; i++) { 
      if (arr[i] < min) { 
        min = arr[i]; // Update min if a smaller element is found
      }
  else { 
        const diff = arr[i]-min; // Calculate the difference between the current element and min
        if (diff > maxDiff) {  // Update maxDiff if the new difference is larger
          maxDiff = diff; 
        } 
      } 
    } 
    return maxDiff; // Return the largest difference found
  } 
  console.log(largestDifference([1, 2, 6, 4, 3]));
  console.log(largestDifference([3, 2, 1]));


//



















