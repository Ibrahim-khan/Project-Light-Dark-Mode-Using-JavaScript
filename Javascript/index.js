function darkLight(){
    const element = document.body;
    element.classList.toggle("dark-mode");
}


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
    }else{
        body.style.background = '#222831';
        body.style.color = 'white';
        body.style.transition = '1s';
    }
})



const icon =document.getElementById('darkIcon');
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "image/sun-icon.png";
    }else{
        icon.src = "image/moon-icon.png";
    }
}
