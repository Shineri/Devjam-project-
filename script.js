let searchbtn =document.querySelector('#search-btn');
let searchbar =document.querySelector('.search-bar-container');
window.onscroll=()=>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}
searchbtn.addEventListener('click',()=>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});