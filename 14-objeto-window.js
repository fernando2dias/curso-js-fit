// WINDOW METHODS / OBJECTS / PROPERTIES
//console.log(123);

// ALERT
//alert('Hello World!');

// PROMPT
//const input = prompt();
//alert(input);


//CONFIRM
//if (confirm('Are you sure?')) {
//    console.log('Yes');
//}else{
//    console.log('No');
//}


//let val;
//Outer height and width
//val = window.outerHeight;
//console.log(val);

//val = window.outerWidth;
//console.log(val);

//Innner height and width
//val = window.innerHeight;
//console.log(val);

//val = window.innerWidth;
//console.log(val);


//SCROLL POINTS
//let val;
//val = window.scrollY;
//console.log(val);


//LOCATION OBJECT
let val;
val = window.location;
console.log(val);

val = window.location.hostname;
console.log(val);

val = window.location.port;
console.log(val);

val = window.location.href;
console.log(val);


//write a parameter at the address bar ex: http://127.0.0.1:5500/index.html?id=fernando
val = window.location.search;
console.log(val);


//REDIRECT
//window.location.href = 'http://google.com';

//RELOAD
//window.location.reload();


//HISTORY OBJECT
window.history.go(-1); // quantity page go to back

val = window.history.length; // total pages in history navigation
console.log(val);


// NAVIGATOR OBJECT
console.log(window.navigator);
console.log(window.navigator.appName);
console.log(window.navigator.appVersion);
console.log(window.navigator.userAgent);
console.log(window.navigator.platform);
console.log(window.navigator.vendor);
console.log(window.navigator.language);


