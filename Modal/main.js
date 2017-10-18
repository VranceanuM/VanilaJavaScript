var modalBtn = document.getElementById('modalBtn');
var simpleModal = document.getElementById('simpleModal');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
    simpleModal.style.display = 'block';
}

function closeModal(){
    simpleModal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == simpleModal)
    simpleModal.style.display = 'none';
}