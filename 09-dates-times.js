let val;

const today = new Date();
const birthday = new Date('9-21-1986');
const otherDate = new Date('September 26 2011');
const christmas = new Date('12/25/2021');

val = today;

console.log(val);

val = birthday;
console.log(val);

val = otherDate;
console.log(val);

val = christmas;
console.log(val);


//Get Month, remember +1 because, initialize 0
val = today.getMonth()+1;
console.log(val);

//Get Day
val = today.getDate();
console.log(val);

//Get Year
val = today.getFullYear();
console.log(val);

//Get Week day
val = today.getDay()+1;
console.log(val);

// Get timestamp
val = today.getTime();
console.log(val);

// Get hour
val = today.getHours();
console.log(val);

// Get minute
val = today.getMinutes();
console.log(val);

// Get second
val = today.getSeconds();
console.log(val);

// Set values
birthday.setMonth(8);
birthday.setDate(22);
birthday.setFullYear(1987);
console.log(birthday);