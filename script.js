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
    const insterests = document.querySelector('#interests_link');
    const contact = document.querySelector('#contact_link');

    let scroll = window.scrollY;

    if(window.innerWidth > 960 && scroll < 600){
        home.classList.add('highlight');
        skills.classList.remove('highlight');
        insterests.classList.remove('highlight');
        return 
    }else if (window.innerWidth > 960 && scroll < 1550){
        skills.classList.add('highlight');
        insterests.classList.remove('highlight');
        home.classList.remove('highlight');
        contact.classList.remove('highlight');
        return
    }else if (window.innerWidth > 960 && scroll < 2700){
        contact.classList.remove('highlight');
        skills.classList.remove('highlight');
        insterests.classList.add('highlight');
        return
    }else if(window.innerWidth >960 && scroll <5000){
        contact.classList.add('highlight');
        skills.classList.remove('highlight');
        insterests.classList.remove('highlight');
        return
    }

    if((elem && window.innerWidth < 960 && scroll < 600) || elem){
        elem.classList.remove('highlight');
    }
}


window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


/*
A Funcao abaixo so faz progress bar para um elemento, deixo esse problema pra ti meu eu do futuro, nao me desaponte!


let i = 0;

var css = document.querySelector("#css")
var php = document.querySelector("#php")
var java = document.querySelector("#java")
var html = document.querySelector("#html")
var js = document.querySelector("#js")
var python = document.querySelector("#python")
var sql = document.querySelector("#sql")

let elements = [css, php, java, html, js, python, sql] 
let values = [45, 40, 65, 70, 30, 30, 80]

function progress(item, fwidth){
    if (i==0){
        i =1;
        var width = 10;
        var id = setInterval(frame, 30)

        function frame(){

            if (width >=fwidth){
                clearInterval(id);
                i = 0;
            }else{
                width++;
                item.style.width = width + "%";
                item.innerHTML = width + "%";
            }
        }
    }
}


for (a = 0; a<elements.length ; a++){
    progress(elements[a], values[a])
    window.addEventListener('scroll', progress);
}*/
