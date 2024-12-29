const inputBox = document.getElementById('input-box');
const todoList = document.getElementById('todo-list');
const deleteAllbutton = document.getElementById('delete-all-btn');

function addTask(){
    if(inputBox.value === ''){
        alert('Please enter a task');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

todoList.addEventListener('click', function(e){    
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem('todoList-data', todoList.innerHTML);
}

function loadData(){
    if(localStorage.getItem('todoList-data')){
        todoList.innerHTML = localStorage.getItem('todoList-data');
    }
}


function deleteAll(){
    todoList.innerHTML = '';
    saveData();
}

deleteAllbutton.addEventListener('click', deleteAll);

loadData();