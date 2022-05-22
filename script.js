let searchbtn =document.querySelector('#search-btn');
let searchbar =document.querySelector('.search-bar-container');
let formBtn =document.querySelector('#login-btn');
let loginform =document.querySelector('.login-form-container');
let formClose =document.querySelector('#form-close');

window.onscroll=()=>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}
searchbtn.addEventListener('click',()=>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});

formBtn.addEventListener('click',()=>{
    loginform.classList.add('active');
});

formClose.addEventListener('click',()=>{
    loginform.classList.remove('active');
});