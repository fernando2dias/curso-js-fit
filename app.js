// document.getElementById()
console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);


const taskTitle = document.getElementById('task-title');

// Change styling 
taskTitle.style.background = '#eee';
taskTitle.style.padding = '20px';

// Change content
taskTitle.textContent = 'Task List';
//or
taskTitle.innerText = 'My Tasks';
//or
taskTitle.innerHTML = `<span style="font-weight:600">My Tasks</span>`;


// document.querySelector()
console.log(document.querySelector('#task-title')); // id selected
console.log(document.querySelector('.card-title')); // class selected
console.log(document.querySelector('h5')); // element selected


document.querySelector('li').style.color = 'blue'; // set first element
document.querySelector('li:last-child').style.color = 'red'; // set last element
document.querySelector('li:nth-child(3)').style.color = 'green'; // set a specific element

