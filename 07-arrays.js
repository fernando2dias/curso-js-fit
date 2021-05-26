// Crete some arrays
const numbers = [43, 56, 33, 23, 44, 36, 6];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
let val;

console.log(numbers);
console.log(mixed);

// Get array length
val = numbers.length;
console.log(val);

//check if is array
val = Array.isArray(numbers);
console.log(val);

//get a single value
val = numbers[3];
console.log(val);

//Insert into array
numbers[2] = 100;
console.log(numbers);

// Find index of value
val =  numbers.indexOf(36);
console.log(val);

//Mutating arrays
//Add on to end
numbers.push(250);
console.log(numbers);

//Add on to front
numbers.unshift(666);
console.log(numbers);

//Take off from end
numbers.pop();
console.log(numbers);

//Take off from front
numbers.shift();
console.log(numbers);

//Splice values
numbers.splice(1,3);
console.log(numbers);

// Reverse array
numbers.reverse();
console.log(numbers);

// Concatenate array
val = numbers.concat(numbers2);
console.log(numbers);
console.log(val);

// Sorting arrays
val = fruit.sort();
console.log(val);

// Sorting for numbers
val = numbers.sort((x,y)=> x-y);
console.log(numbers);

// Sorting for numbers reverse mode
val = numbers.sort((x,y) => y-x);
console.log(numbers);
