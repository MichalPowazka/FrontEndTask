const searchIcon = document.querySelector('.bi-search')
const input = document.querySelector('.searcher')

const showSearchBar = () =>{
    input.classList.toggle('active')
}

searchIcon.addEventListener('click',showSearchBar)