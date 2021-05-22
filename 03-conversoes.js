let val;

// Number to string
val = String(555);
val = String(4+4);


// Bool to string
val2 = String(true);

// Date to string
val3 = String(new Date());

// Array to string
val4 = String([1,2,3,4]);

// using toString Method
val5 = (345).toString();
//
//
// String to number
val6 = Number('5');

// Boolean to number
val7 = Number(true);

// String to number using parseInt method
val8 = parseInt('5');

// String to number using parseFloat method
val9 = parseFloat('5.95');

// Output 
console.log(val);
console.log(typeof val);
console.log(val.length);
//
console.log(val2);
console.log(typeof val2);
console.log(val2.length);
//
console.log(val3);
console.log(typeof val3);
console.log(val3.length);
//
console.log(val4);
console.log(typeof val4);
console.log(val4.length);
//
console.log(val5);
console.log(typeof val5);
console.log(val5.length);
//
console.log(val6);
console.log(typeof val6);
console.log(val6.toFixed(2)); // to convert em decimal numbers
//
console.log(val7);
console.log(typeof val7);
console.log(val7.toFixed()); // to convert em decimal numbers

//
console.log(val8);
console.log(typeof val8);
console.log(val8.toFixed()); // to convert em decimal numbers

//
console.log(val9);
console.log(typeof val9);
console.log(val9.toFixed(2)); // to convert em decimal numbers

