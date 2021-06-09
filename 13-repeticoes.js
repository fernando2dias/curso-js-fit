// FOR LOOP

for (let i = 0; i < 10; i++) {

    if (i === 3) {
        console.log('3 is my favorite number');
        continue; // back to loop directly
    }

    if (i ===7) {
        console.log('Stop the loop');
        break; // stop the loop
    }

    console.log('Number ' + i);    
}


// WHILE LOOP
let i = 0;

while(i<10){
    console.log('Number ' + i);
    i++;
}


// DO WHILE
let k = 100;

do{
    console.log('Number ' + k);
    k++;
}while(k < 10);


// LOOP THROUGH ARRAY
const cars = ['Ford','Chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    console.log(element);   
}

// FOREACH
cars.forEach(function(car){
    console.log(car);
});

// FOREACH WITH ARROW FUNCTION
cars.forEach((car) => console.log(car));


// Map
const users = [
    {id: 1, name: 'Fernando'},
    {id: 2, name: 'Juliana'},
    {id: 3, name: 'Neco'}
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);