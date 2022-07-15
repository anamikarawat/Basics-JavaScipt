//This is an example of lexical scoping when nested function's are used
//Nested function's have access to variable declare in their own scope as well as variable declare outside the scope

let a = 10; //global scope
function outer() {
  let b = 20;
  function inner() {
    let c = 30;
    console.log(a, b, c);
  }
  inner(); //invoke
}

outer(); //invoke
//Output - 10 20 30

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  inner();
}
outer(); // print 1
outer(); // print 1

//CLOSURE
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
const fn = outer();
fn(); // print 1 //invoking
fn(); // print 2 //invoking

// Function Currying - it doesn't call a function, it simply transformed the function
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(2, 4, 5));
//calling one argument at a time
//sum(2,4,5) --> sum(2)(4)(5)
//we can use nested function to do so...

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
const curriedSum = curry(sum);
//console.log(curriedSum(2)(4)(5))
const add2 = curriedSum(2);
const add4 = add2(4);
const add5 = add4(5);
console.log(add5);
//currying is used to compose reusable functions-eg->logInfo,logError

//this Keyword
// function sayMyName(name){
//   console.log(`My name is ${name}`)
// }
// sayMyName('Anamika Rawat')
// sayMyName('Siya Ram')

//there are 4 ways to invoke a function determine the value of this keyword
//1.implicit binding- it will tell u what THIS refers to
const person = {
  name: "Ram",
  sayMyName: function () {
    console.log(`My Name is ${this.name}`);
  },
};
//this.name --> person.name
person.sayMyName(); //to invoke a function
//person->object
//name->property

//2.Explicit binding-this time function is seprated from person object
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
//call method
sayMyName.call(person);

//3.New Binding
//we can invoke the function with the new keyword ,
// & with this function is invoke with this keyword referencing an empty object

function Person(name) {
  //this = {}
  this.name = name;
}
const p1 = new Person("Anamika");
const p2 = new Person("Rawat");
//Person function is known as a constructive function as we can create multiple person from this function
console.log(p1.name, p2.name);
//when we invoke a function from this new keyword - js will create a new empty object

//4.Default binding
//this is a fall back binding if all the other rules are not matched
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
sayMyName();
//print undefined
//if none of the 3 rules are satisfied js will default to the global scope
//and set this keyword to global object

//In global scope js will try to find the variable called name
//since it doesn't find NAME so this.name is undefined

//default binding where this keyword will rely on GLOBAL scope
globalThis.name = "Superman";
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
sayMyName();
//with this key u can introduce a dyanamic value within a same function

//=========================================================================

//PROTOTYPE
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
//create instances using new keyword
const person1 = new Person("Anam", "Mika");
const person2 = new Person("Anuu", "Mika");
//Person using with new key is a construuctor function

//js is a dynamic lang so it allows us to attach new properties to an object at any given time
person1.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person1.getFullName);
console.log(person2.getFullName); //  gives an error

//so in js every function has a property called prototype thats point to an object
//we can make use of that prototype object to determine all are shareable properties
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person1.getFullName);
console.log(person2.getFullName);

//use of prototype - is to share properties and methods across instances

//=====================================================================
//Prototype inheritance
function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}
Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
function SuperHero(fName, lName) {
  //this = {}
  Person.call(this, fName, lName);
  this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
  console.log("Flighting crime");
};
SuperHero.prototype = Object.create(Person.prototype);
const batman = new SuperHero("Anamika", "Rawat");
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());

//==================================================================================
//CLASS
//however the class syntax does not introduce a new object oriented inheritance model
// In js classes are primarily syntactical sugar over the existing prototypal inheritance

class Person {
  //class
  constructor(fName, lName) {
    //initialize properties
    this.firstName = fName;
    this.lastName = lName;
  }
  sayMyName() {
    //add methods
    return this.firstName + " " + this.lastName;
  }
}
//so we can create an instance and access the properties and method like before
//nothing changes the class keyword simply makes the syntax better

const classP1 = new Person("Anamika", "Rawat"); // create an instance of the class
console.log(classP1.sayMyName());

//now rewrite superhero which inherits from person->2 keywords take care of entire inheritance -> extends and super keywords

class SuperHero extends Person {
  //inherit using extents and super keywords
  constructor(fName, lName) {
    super(fName, lName);
    this.isSuperHero = true;
  }
  fightCrime() {
    console.log("Fighting crime");
  }
}
//we invoke the super method that js provides us passing in fname and lName , this will call the person class constructor

//once we call super we set the superhero properties and method in the class
const batmans = new SuperHero("Anamika", "Rawat");
console.log(batmans.sayMyName());
//classes are just syntactical sugar over what was already existing in js

//===========================================================================================================================================
//Iterables and Iterators
const obj = {
  [Symbol.iterator]: function () {
    //[key]: method
    const iterator = {
      next: function () {
        step++;
        if (step == 1) {
          return { value: "Hello", done: false };
        } else if (step == 2) {
          return { value: "world", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    //this method should not accept any argument and should return an object which conforms to the iterator protocol
    //iterator- its an object that implements the iterator protocol and return it
    return iterator;
  },
};
for (const word of obj) {
  console.log(word);
}

//================================================================================================
//Generators- are a special class of function that simplify the task of writing iterators

function normalFunction() {
  console.log("Hello");
  console.log("World");
}
// normalFunction()
// normalFunction()
// function* generatorFunction(){}
function* generatorFunction() {
  yield "Hello";
  yield "World";
}

const generatorObject = generatorFunction();
for (const word of generatorObject) {
  console.log(word);
}









