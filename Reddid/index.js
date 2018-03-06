import redditapi from './redditapi';


const searchForm = document.getElementById('search-form'),
      searchInput = document.getElementById('search-input');
//submit the form
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    //get the check
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    //get the limit
     const searchLimit = document.getElementById('limit').value;

    if(searchTerm === ''){
        showAlert('Please fill up the form','alert-danger');
    }
    //clear input
    searchInput.value = '';
    //search reddit
    redditapi.search(searchTerm,sortBy,searchLimit)
    .then(results => {
        let output = '<div class="card-columns">';
        results.forEach(post =>{
            //Check for the image
            const image = post.preview ? post.preview.images[0].source.url : 'data:image/png;base64,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';
            output+=`
            <div class="card">
            <img class="card-img-top" src="${image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${truncateText(post.selftext,100)}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
            `;
        });
        output += '</div>'
        document.getElementById('results').innerHTML = output;
    });
});

//show the alert
function showAlert(message,className){
    //create div
    const div = document.createElement('div');
    //add text
    div.appendChild(document.createTextNode(message));
    //add the class
    div.className = `alert ${className}`;
    const formContainer = document.querySelector('#search-container'),
          form = document.getElementById('search');

    formContainer.insertBefore(div,form);

    setTimeout(()=>{
        document.querySelector('.alert').remove();
    },2000);
}

function truncateText(text,limit){
    const shortened = text.indexOf(' ',limit);
    if(shortened == -1) return text;
    return text.substring(0,shortened);
}