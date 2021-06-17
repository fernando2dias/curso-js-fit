const firstName = 'Fernando';
const lastName = 'Dias';
const age = 36;
const sentence = 'Hello! My name is Fernando. I\'m 34';


let val;

val = firstName + lastName;

console.log(val);

//Concatenation
val = firstName + ' ' + lastName;
console.log(val);

//Append
val = 'Fernando ';
val += 'Dias Motta';
console.log(val);

val = 'Hello, my name is '+ firstName + 'and I am ' + age;
console.log(val);

// Escaping
val = 'That\'s awesome, I can\'t wait';
console.log(val);

// Length
val = firstName.length;
console.log(val);

// concat
val = firstName.concat(' ', lastName);
console.log(val);

// Change case
val = firstName.toUpperCase();
console.log(val);

val = firstName.toLowerCase();
console.log(val);


// string is a array of character
val = firstName[0];
console.log(val);

// indexOf()
val = firstName.indexOf('n');
console.log(val);

val = firstName.lastIndexOf('n');
console.log(val);

// charAt()
val = firstName.charAt('2');
console.log(val);

// last character
val = firstName.charAt(firstName.length-1);
console.log(val);

// substring
val =  firstName.substring(0,4);
console.log(val);

//slice()
val = firstName.slice(0,4);
console.log(val);

val = firstName.slice(-3);
console.log(val);

//split 
val = sentence.split(' ');
console.log(val);

//replace
val = sentence.replace('Fernando', 'Juliana');
console.log(val);

//includes
val = sentence.includes('foo');
console.log(val);

val = sentence.includes('Hello');
console.log(val);