// //Add Task to the list
// document.getElementById('task-form').addEventListener('submit',function(e){
//     const taskInput = document.getElementById('task');
//     if(taskInput.value === ''){
//       alert('hey you idiot');
//     } else {
//       // //create li
//       const li = document.createElement('li');
//       // //add class
//        li.className ='collection-item';
//        //create text
//        li.appendChild(document.createTextNode(taskInput.value));
//       //create tag
//       const link = document.createElement('a');
//       //add class
//       link.className = 'delete-item secondary-content';
//       link.innerHTML = '<i class="fa fa-remove"></i>';
//       li.appendChild(link);
//       //appent to body
//       const ul = document.querySelector('.collection');
//       ul.appendChild(li);
//       //reset the ui
//       taskInput.value = '';
//     }
//      e.preventDefault();
//   });

//   //Clear the fields
//   document.querySelector('#clear').addEventListener('click',function(e){
//     const ul = document.querySelector('.collection');
//     ul.innerHTML = '';
//   });

// //Remove Tasks
// document.querySelector('.collection').addEventListener('click' , function(e){
//   if(e.target.parentElement.classList.contains('delete-item')){
//     e.target.parentElement.parentElement.remove();
//   }
// });
// //filter the tasks
// document.querySelector('#filter').addEventListener('keyup', function(e){
//  const text = e.target.value.toLowerCase();
//  document.querySelectorAll('.collection-item').forEach(task=>{
//    const item = task.firstChild.textContent;
//    if (item.toLowerCase().indexOf(text) > -1){
//      task.style.display = '';
//    }else{
//      task.style.display = 'none';
//    }
//  })

// });
class Task{
    constructo(taskInput){
      this.taskInput = taskInput;
    }
}

class UI {
//clear the fields
  clearField(){
    document.getElementById('task').value = '';
  }
//show alert
 showAlert(message,className){
     //create div
     const div = document.createElement('div');
     //add class name
     div.className = `alert ${className}`;
     // append the text
     div.appendChild(document.createTextNode(message));
     //get the card  && container
     const card = document.getElementById('main');
     const content = document.querySelector('.card-content');
    card.insertBefore(div,content);
    //remove the alert
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },2000);
 }
}
//submit the form task
document.querySelector('#task-form').addEventListener('submit',function(e){
    const taskInput = document.getElementById('task');
    //create li
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //add text
    li.appendChild(document.createTextNode(taskInput.value));
    //create a
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //add delete btn
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    //instantiate task
    const task = new Task(taskInput);
    //instantiate ui
    const ui = new UI ();
    if( taskInput.value === ''){
       ui.showAlert('Please fill up the form','error');
    }else {
    const ul = document.querySelector('.collection');
    ul.appendChild(li);
    //show alert
    ui.showAlert('Book Added','success');
    //clear field
    ui.clearField();
    }
e.preventDefault();
});
//clear the tasks
document.querySelector('#clear').addEventListener('click',function(e){
    const ul = document.querySelector('.collection');
    ul.innerHTML = '';
});
//remove individual task
document.querySelector('.collection').addEventListener('click',function(e){
 if (e.target.parentElement.classList.contains('delete-item')){
     e.target.parentElement.parentElement.remove();
 }
});
//filter the tasks
document.querySelector('#filter').addEventListener('keyup',function(e){
 const text = e.target.value.toLowerCase();
 document.querySelectorAll('.collection-item').forEach(function(task){
 const item = task.firstChild.textContent;
 if (item.toLowerCase().indexOf(text) > -1)  {
     task.style.display = '';
 }else {
     task.style.display = 'none';
 }
 });

 
})