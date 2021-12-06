const searchInput = document.getElementById('mainSearchInput');
const searchIcon = document.getElementById('searchIcon');

searchInput.addEventListener('focusin',function(event){
    searchIcon.style.display='none'
    searchInput.style.paddingLeft='12px'
})

searchInput.addEventListener('focusout',function(event){
    searchIcon.style.display='block'
    searchInput.style.paddingLeft='24px'
})