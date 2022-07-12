console.log("Hello from script.js file");

//variables--> let and const
let age = 25;
age = 30;
console.log(age);

const salary = 10;
//In const we cannot reassign the values
console.log(salary);
//we should mainly use const

// data types
//1. Primitive(7)
const name = "Anamika"; //string
const surname = "rawat";
const lang = `JavaScript`;

const total = 0; //number - integer type
const PI = 3.14; //number - float type

const isNum = true; //boolean
const nsp = false;

let result; //undefined
console.log(result);

const res = null; //null

//Bigint Type and Symbol type

//2.non - primitive(1)
//Object
const person = {
  //object literal
  firstName: "Anamika",
  lastName: "Rawat",
  age: 21,
};
console.log(person.firstName);
console.log(person.age);

//array
const oddNumber = [1, 3, 5, 7, 9];
console.log(oddNumber[2]);

//Javascript is dynamically typed lang
let a = 10;
a = "Anamika";
a = true;
console.log(a);

//Operators
//1.Assignment operator- used to assign the values to variables
let x = 10;
let y = 2;
//2. Arithmetic operator - used to perform arithmetic calculation
//x & y are operands , symbols are operators
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(++x);
console.log(x++);
console.log(--y);

//3. Comparison Operators - used to compare 2 values and return a boolean value
console.log(x == y);
console.log(x === y); //compare the values as well as data type
console.log(x !== y); //strictly not equal to
console.log(x > y);
//>= , < , <=
//comparison op are primarly used in loops and branching statements

//4. Logical op - perform logical op and return either true or false
//they are very useful when combining comparison op result to make a decision . eg-
const isValidNumber = x > 8 && 8 > y;
console.log(isValidNumber);
//&& , ||

//logical not op - which nagiates the value
const isValid = true;
console.log(!isValid);

//5. String op - to join 2 or more strings we use plus(+) sign
console.log("Anamika " + "Rawat"); //concatination

//6. Ternary op- returns a value based on the condition
const isEven = 10 % 2 === 0 ? true : false;
console.log(isEven);

const isOdd = 10 % 2 === 0 ? "Number is Even" : "Number is odd";
console.log(isOdd);

//Type conversions
//1.Implicit conv-
console.log(2 + "3"); //concatination
console.log(true + " 3");

console.log("4" - "2"); // ans = 2
console.log("Anamika" - "Rawat"); //ans= NaN(Not a number)

console.log("6" - true);
//6 - 1 = 5
console.log("6" - false);
//6 - 0 = 6

console.log("6" - null); //6 -0 = 6
console.log(5 + undefined); // NaN

//2.Explicit conv-
console.log(Number("5")); //5
console.log(Number("")); //0
console.log(Number(false)); //0
console.log(parseInt("5")); //5
console.log(parseFloat("3.14")); //3.14
console.log(String(500)); //500
console.log(String(true)); //true
console.log(String(null)); //null
console.log(String(undefined)); //undefined
console.log((500).toString()); //500

//to convert other data type to boolean - we can use gobal boolean method
console.log(Boolean(10)); //true
//null , undefined , 0 , '' , NaN --> returns false

//Equality
const var1 = "test";
const var2 = "test";
console.log(var1 == var2); //true
console.log(var1 === var2); //true

const var3 = 10;
const var4 = "10"; //string
console.log(var3 == var4); //true
console.log(var3 === var4); //false
// triple equals are more strict - both const should be of same type & will not convert implicitly
//*****we should use triple equals instead of double

// const var3 = 0
// const var4 = ''

// const var3 = false
// const var4 = ''

// const var3 = null
// const var4 = undefined

// double equals returns true in above comparisons
// & triple equals to returns false

//CONDITIONAL Statements - if else , else if , switch
const num = 5;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Number is Zero");
}
//switch
const color = "blue";
switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "green":
    console.log("color is green");
    break;
  default:
    console.log("Not a valid color");
}

//LOOPING CODE
//1. for loop
for (let i = 1; i <= 5; i++) {
  console.log("Iteration number" + i);
}

//2.while loop
let i = 1;
while (i <= 5) {
  console.log("Iteration number" + i);
  i++;
}

//3.Do while
let j = 6;
do {
  console.log("Iteration number" + i);
  j++;
} while (j <= 5); //print 6

//4.for of loop
const numArray = [1, 2, 3, 4, 5];
for (const num of numArray) {
  console.log("Iteration number" + num);
}

//FUNCTIONS
function greet() {
  console.log("Good Morning");
}
greet();
greet();
greet();

function greet(username) {
  console.log("Good Morning" + username);
}
greet("Anaa"); //this is invoking/call the function
greet("anuu");
//username is called function parameter
//anuu , Anaa is function argument
//greet - function name

function add(a, b) {
  // a & b are input parameters
  return a + b;
}
const sum = add(5, 10); //argument
console.log(sum);

//arrow function
const arrowSum = (a, b) => {
  return a + b;
};
//const arrowSum = (a,b) => a + b
const summ = arrowSum(5, 10); //argument
console.log(summ);

//const addFive = num => num + 5

//SCOPE
//1.Block scope- variable declare inside a pair of curly braces cannot be accessed from outside the block
//only be accessed from inside the block they declared in
if (true) {
  const myName = "Anamika";
  console.log(myName);
}

//2.function scope- variable declare inside a function are not accessable from outside the function
function testfn() {
  const myName = "rawat";
  console.log(myName);
}

testfn();

//3. Global scope- scope outside any block or a function
//its variable is accessable both inside a block as well as a function

const myNum = 100;
const myName = "Superman"; //this will not print in console
if (true) {
  //In block
  const myName = "Anamika";
  console.log(myName);
  console.log(myNum);
}

function testfn() {
  //inside a function
  const myName = "rawat";
  console.log(myName);
  console.log(myNum);
}

testfn();








