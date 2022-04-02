// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).

Do the following with above problem.
*/

// - Write a Function Declaration
function addOne(a){
  return a+1;
}
addOne(22);
// - Write a Function Expression
let addNum = function addOne(a){
  return a+1;
}
addOne(55);

// - Write an Arrow Function without curly brackets(if possible)
let addNumbs =(a)=> a+1;
addNumbs(55);
// - Write an Arrow Function with curly brackets
let num =(a) =>{
  return a+1;
}
num(12);
// - Execute the function
num(12);
// - Execute the function and store the return value in a variable.
let strore =num(12)
// - What is the typeof returnValue
number
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subOne(a){
  return a-1;
}
subOne(22);
// - Write a Function Expression
let subNum = function subOne(a){
  return a-1;
}
subOne(55);
// - Write an Arrow Function without curly brackets(if possible)
let subNumbs =(a)=> a-1;
subNumbs(55);
// - Write an Arrow Function with curly brackets
let nums =(a) =>{
  return a-1;
}
nums(12);
// - Execute the function
nums(12);
// - Execute the function and store the return value in a variable.
let substrore =num(12)
// - What is the typeof returnValue
number
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
function sum(a, b){
  return a+b;
}
sum(34,87);
// - Write a Function Expression
let sumOf= function sumNo(a, b){
  return a+b;
}
sumOf(8,65);
// - Write an Arrow Function without curly brackets(if possible)
let sumNumb =(a,b)=> a+b;
sumNumb(55,25);
// - Write an Arrow Function with curly brackets
let numsSum =(a,b) =>{
  return a+b;
}
numsSum(62, 10);
// - Execute the function
numsSum(62, 10);
// - Execute the function and store the return value in a variable
let sumStore =num(12)
// - What is the typeof returnValue
number

/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(a){
  return a*a;
}
square(7);
// - Write a Function Expression
let squareOf= function square(a){
  return a*a;
}
squareOf(8,65);
// - Write an Arrow Function without curly brackets(if possible)
let squ =(a)=> a*a;
squ(5);
// - Write an Arrow Function with curly brackets
let SquareoOf =(a) =>{
  return a*a;
}
SquareoOf(10);
// - Execute the function
squareOf(10);
// - Execute the function and store the return value in a variable
let squr =squareOf(12)
// - What is the typeof returnValue
number

/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
function isGreater(x , y){
  if(x>y){
    return true;
  }
  else{
    return false;
  }
}
isGreater(12 , 5);
// - Write a Function Expression
let great= function isGreater(x ,y){
  if(x>y){
    return true;
  }
  else{
    return false;
  }
}
great(9,45);
// - Write an Arrow Function without curly brackets(if possible)
let greatest=(x , y)=> x>y ;
 greatest(5, 23);
// let greatest=(x , y)=>(x>y)?true:false ;
// greatest(5, 23);
// - Write an Arrow Function with curly brackets
let grt=(x ,y) =>{
  if(x>y){
    return true;
  }
  else{
    return false;
  }
}
grt(3,9);
// - Execute the function
grt(3,9);
// - Execute the function and store the return value in a variable
let storegrt= grt(6,9);
// - What is the typeof returnValue
Boolean
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
 function oddOrEven(a){
   if(a%2===0){
     return `Number is even`;
   }
   else{
     return `Number is odd`;
   }
 }
// - Write an anonymous Function Expression
let odd=(a)=>(a%2===0)?`Number is even`:`Number is odd`;
odd(89);
// - Write an named Function Expression
let even = function(a){
  if(a%2===0){
    return `Number is even`;
  }
  else{
    return `Number is odd`;
  }
}
even(56);

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let odd_Even=(a)=>(a%2===0)?`Number is even`:`Number is odd`;
oddEven(89);
// - Write an Arrow Function with curly brackets
let evenOdd=(a)=>{
    if(a%2===0){
      return `Number is even`;
    } else{
      return `Number is odd`;
    }
}
evenOdd(87);
// - Execute the function
evenOdd(89);
// - Execute the function and store the return value in a variable
let storeEvenOdd = evenOdd(89);
// - What is the typeof returnValue
'string'