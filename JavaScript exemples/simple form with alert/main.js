class Book {
 constructor(firstName,lastName){
     this.fistName = firstName;
     this.lastName = lastName;
 }
}

class UI {
 addBook(book){
     const row = document.createElement('tr');

     row.innerHTML = `<td>${book.firstName}</td>
                      <td>${book.lastName}</td>   
     `;
     const table = document.getElementById('table');
     table.appendChild(row);
 }
 addAlert(message,className){
     //create div
     const div = document.createElement('div');
     //add clases
     div.className = `alert ${className}`;
     //add text
     div.appendChild(document.createTextNode(message));
     
     const container = document.querySelector('.container');

     const form = document.querySelector('#main-form');

     container.insertBefore(div,form);
 setTimeout(function (){
    document.querySelector('.alert').remove();
 },2000);
 }
 clearInput(){
     document.getElementById('first_name').value = '';
     document.getElementById('last_name').value = '';
 }
}


document.getElementById('main-form').addEventListener('submit',function(e){
   const firstName = document.getElementById('first_name').value,
         lastName = document.getElementById('last_name').value;
    //instantiate book
    const book = new Book (firstName,lastName);
    //instantiate ui
    const ui = new UI();
    //create alert
    if(firstName === '' || lastName === ''){
        ui.addAlert('Please fill up the fields','error');
    } else{
    ui.addAlert('Book added', 'success');
        //add book to the list
    ui.addBook(book);
    //remove input
    ui.clearInput();
    }
    

    e.preventDefault();
});
