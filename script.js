window.onscroll = function(){
    myFunction()
};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction(){
    if(window.pageYOffset >= sticky)
        navbar.classList.add("sticky")
    else
        navbar.classList.remove("sticky");
}

const highlightMenu = () =>{

    const elem = document.querySelector('.highlight');
    const home = document.querySelector('#home_link');
    const skills = document.querySelector('#skills_link');
    const contact = document.querySelector('#contact_link');

    let scroll = window.scrollY;

    if(window.innerWidth > 960 && scroll < 600){
        home.classList.add('highlight');
        skills.classList.remove('highlight');
        return 
    }else if (window.innerWidth > 960 && scroll < 1550){
        skills.classList.add('highlight');
        home.classList.remove('highlight');
        contact.classList.remove('highlight');
        return
    }else if (window.innerWidth > 960 && scroll < 2345){
        contact.classList.add('highlight');
        skills.classList.remove('highlight');
        return
    }

    if((elem && window.innerWidth < 960 && scroll < 600) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);