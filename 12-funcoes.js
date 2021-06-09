// FUNCTION DECLARATIONS
function greet(){
    return 'Hello';
}
console.log(greet());

function greet2(firstName, lastName){
    return 'Hello ' + firstName + ' ' + lastName;
}
console.log(greet2('Fernando', 'Dias Motta'));


// FUNCTION EXPRESSIONS

const square = function(x){
    return x*x;
}
console.log(square(6));



// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSION - IIFEs
(function(){
    console.log('IIFE Ran..');
})();

(function(name){
    console.log('Hello ' + name);
})('Fernando');


// PROPERTY METHODS
const todo = {
    add: function(){
        console.log('Add todo...');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`)
    }
}

todo.add();
todo.edit(21);