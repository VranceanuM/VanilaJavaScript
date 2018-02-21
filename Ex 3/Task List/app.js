//Add Task to the list
document.getElementById('task-form').addEventListener('submit',function(e){
    const taskInput = document.getElementById('task');
    if(taskInput.value === ''){
      alert('hey you idiot');
    } else {
      // //create li
      const li = document.createElement('li');
      // //add class
       li.className ='collection-item';
       //create text
       li.appendChild(document.createTextNode(taskInput.value));
      //create tag
      const link = document.createElement('a');
      //add class
      link.className = 'delete-item secondary-content';
      link.innerHTML = '<i class="fa fa-remove"></i>';
      li.appendChild(link);
      //appent to body
      const ul = document.querySelector('.collection');
      ul.appendChild(li);
      //reset the ui
      taskInput.value = '';
    }
     e.preventDefault();
  });

  //Clear the fields
  document.querySelector('#clear').addEventListener('click',function(e){
    const ul = document.querySelector('.collection');
    ul.innerHTML = '';
  });

//Remove Tasks
document.querySelector('.collection').addEventListener('click' , function(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
  }
});
//filter the tasks
document.querySelector('#filter').addEventListener('keyup', function(e){
 const text = e.target.value.toLowerCase();
 document.querySelectorAll('.collection-item').forEach(task=>{
   const item = task.firstChild.textContent;
   if (item.toLowerCase().indexOf(text) > -1){
     task.style.display = '';
   }else{
     task.style.display = 'none';
   }
 })

});
