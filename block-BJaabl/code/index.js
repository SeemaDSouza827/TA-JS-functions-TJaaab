/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayHello(name){
  return alert(`Hello ${name}!`);
}
/*
2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
fullName.

Example:
  getFullName("John", "Snow"); // "John Snow"
  getFullName("Nelson", "Mandela"); // "Nelson Mandela"
*/
function getFullName(firstName , lastName){
  return fullName=(firstName + lastName);
}
getFullName ("John", "Snow");
/*
3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`

Example:
addTwoNumbers(10, 22); // 32
addTwoNumbers(20, 32); // 32
addTwoNumbers(10, "100"); // Alert Enter Valid Input
*/
function addTwoNumbers(firstNum , secondNum){
  if( typeof firstNum != 'number' || typeof secondNum != 'number' ){
    console.log(`Enter a valid input`);
  }else{
  return sum= firstNum + secondNum;
  }
}
addTwoNumbers(4578 ,3221);
/*
4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
is of any other data type alert `Enter Valid Input`

Example:

calc(10, 20, 'add'); // 30
calc(20, 10, 'sub'); // 10
calc(20, 10, 'mul'); // 200
*/
function calc(numA , numB, operation){
  if(typeof numA != 'number' && typeof numB != 'number'){
    console.log(`Enter a valid input`);
  }else{
    switch(operation){
      case 'add':
        return (`The sum of ${numA} + ${numB}= ${numA + numB}`);
        break;
      case 'sub':
        if(numA < numB){
          alert(`First number should be greater than the second to continue with this operation`)
        }
        else{
          return (`The subtracted value is ${numA} - ${numB} = ${numA - numB}`);
        }
        break;
      case 'div':
        if(numA < numB){
          alert(`First number should be greater than the second to continue with this operation`)
        }
        else{
          return (`The remainder of ${numA} / ${numB} = ${numA / numB}`);
        }
        break;
      case 'mul':
        return(`The product of ${numA}*${numB} = ${numA*numB}`);
        break;
    }
  }
}
calc(40, 5, 'mul' );
/*
5. Create a function named `isLeapYear` that accepts a number data type and return `true` or `false` based
on if the year id leap year or not.

isLeapYear(2000); // true
isLeapYear(2001); // false
*/
function isLeapYear(year){
  return ( `The year ${year} is a leap year: ${year % 4 === 0}` )  
}

isLeapYear(2006)
//var isLeapYear=y=>y%4==0;

/*
6. Create a function named `getFactorial` that accepts a number and return the factorial of the number.
*/
function getFactorial(n){
  let fact = 1;
  for( let i = n ; i >= 1; i-- ) {
     fact *= i;
  }
  return (fact);
}
getFactorial(9)