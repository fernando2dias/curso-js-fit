const name = 'John';
const age = 34;
const job = 'Web Developer';
const city = 'Miami';
let html;

//Without template string (es5)
html = '<ul><li>Name: '+ name +'</li><li>Age: '+ age +'</li><li>Job: '+ job +'</li><li>City: '+ city +'</li></ul>';

document.body.innerHTML = html;



//With template strings (es6)

function hello(){
    return 'Hello, how are you?';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${2+2}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;
document.body.innerHTML = html;