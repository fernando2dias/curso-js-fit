// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello World';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2, c:3});

console.error('This is some error');
console.clear();
console.warn('This is a warning');


console.time('Hello');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
console.timeEnd('Hello');
console.clear();

/*
multiline comments
*/


//var, let, const
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

//Init var
var test;
console.log(test);
test = 'Hello'
console.log(test);

console.clear();


//letters, numbers, _, $
//can't start with number

//var 1name = 'Fernando';



//Multi words vars
var firstName = 'John'; // Camel case
var first_name = 'Sara' // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname = 'Fernando' // don't recommend


// CONST
const otherName = 'Fernando';
console.log(otherName);

// Can not reassign
//otherName = 'Juliana';

// Have to assign a value
//const greeting2;


// that confuse people is
const person = {
    name: 'John',
    age: 30
}

console.log(person);


person.name = 'Sara';
console.log(person);
console.clear();


const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);






