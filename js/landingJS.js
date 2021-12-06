const loginBtn = document.querySelector('.loginBtn');
const inputID = document.getElementsByClassName('loginInput')[0];
const inputPW = document.getElementsByClassName('loginInput')[1];



window.addEventListener('resize',function(event){
    const imgBox = document.querySelector('#imgBox')
    if (window.innerWidth<=735){
        imgBox.style.display='none';
    }else{
        imgBox.style.display='block';
    }
})

inputID.addEventListener('input',function(event){
    if (event.target.value.includes('@') && inputPW.value.length>=5){
        loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),1)'
    }else{
        loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),.3)'
    }
})

inputPW.addEventListener('input',function(event){
    if (event.target.value.length>=5 && inputID.value.includes('@')){
        loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),1)'
    }else{
        loginBtn.style.backgroundColor='rgba(var(--d69,0,149,246),.3)'
    }
})

