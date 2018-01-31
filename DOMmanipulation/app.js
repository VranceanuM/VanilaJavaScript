//Define UI 
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListener();

//Load all event listeners
function loadEventListener(){
    form.addEventListener('submit',addTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks);
    //filter
    filter.addEventListener('keyup',filterTasks);
}

//Add Task
function addTask(e){
    if(taskInput.value === ''){
        alert('Enter Text')
    }
    //Create li elem
    const li = document.createElement('li');
    //Add class
    li.className = 'collection-item';
    //Append chil and add text node
    li.appendChild(document.createTextNode(taskInput.value));
    //Append li to ul
    taskList.appendChild(li);
    //Clear the input
    document.querySelector('#task').value = '';
    e.preventDefault();
}
//clear tasks
function clearTasks(){
    taskList.innerHTML = '';
}
//filter tasks
function filterTasks (e){
    const text = e.target.value.toLowerCase();
   
     document.querySelectorAll('.collection-item').forEach(
         function(task){
          const item = task.firstChild.textContent;
           if(item.toLocaleLowerCase().indexOf(text) != -1){
               task.style.display = 'block';
           }else{
            task.style.display = 'none';
           }
         });
    console.log(text);
}