const person = {
    firstName: 'Fernando',
    lastName: 'Dias Motta',
    age: 34,
    email: 'fernando3dias@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Sorocaba',
        state: 'São Paulo'
    },
    getBirthYear: function(){
        return 2021 - this.age;
    }

}

let val;
val = person;
console.log(val);

//Get specific value
val = person.firstName;
console.log(val);

val = person.age;
console.log(val);

val = person.hobbies[1];
console.log(val);

val = person.getBirthYear();
console.log(val);


// list of object
const people = [
    {name: 'Fernando', age: 34},
    {name: 'Juliana', age: 35},
    {name: 'Vinicius', age: 30},

];

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);

}