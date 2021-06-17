const id = '100';

// Equal to
if(id == 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

// Not Equal to
if(id != 101){
    console.log('Correct');
}else{
    console.log('Incorrect');
}


// Equal value and type
if(id === 100){
    console.log('Correct');
}else{
    console.log('Incorrect');
}

// Verify if id exists
if(id){
    console.log(`The id is: ${id}`)
}else{
    console.log('No ID');
}
//or better
if(typeof id !== 'undefined'){
    console.log(`The id is: ${id}`)
}else{
    console.log('No ID');
}


// Greater or Less than
/*
Greater '>'
Less '<'
Equal '=='
Not Equal '!='

*/

if(id > 200){
    console.log('Greater');
}else{
    console.log('Less');
}


// if else
const color = 'red';

if (color === 'red') {
    console.log('Color is red');
} else if( color == 'blue'){
    console.log('Color is blue');
}else{
    console.log('Color is not red or blue');
}

// logic operators
/* 
And '&&'
Or '||'
*/

const age = 13;

if (age > 0 && age < 12) {
    console.log('It\'s a child');    
}else if(age >= 12 && age <18){
    console.log('It\'s a teenager');
}else{
    console.log('It\'s an adult');
}



//Ternary Operator
console.log(id === 100 ? "CORRECT":"INCORRECT");
