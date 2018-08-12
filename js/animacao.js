const   title = document.querySelector('#title'),
        subTitle = document.querySelector('#sub-title'),
        menuItems = document.querySelectorAll('.navbar a[href^="#"]'); //pega somente os "a"s que começam com #

        console.log(menuItems);


//typeWriter(title);

setTimeout(() => {

    subTitle.innerHTML = 'Soluções em Informatica ';

    typeWriter(subTitle);

}, 1300);

window.onscroll = () => navOnTop();

scrollLink(menuItems);


/* -- Functions -- */ 

function typeWriter(element) {

    const text = element.textContent.split(''); // o split ira montar um array separando as letras

    element.innerHTML = '';

    text.forEach((letra, i) => {

        setTimeout(() => {

            element.innerHTML += letra;

        }, 75 * i); // 75 ms para cada indice no nosso array (letra)

    });
    console.log(text);

}

$(function () {
    var counter = 0;
    $('.container').mouseover(function () {
        $(this).toggleClass('move');
    });
});


function navOnTop() {
    let navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        navbar.className = "navbar-top navbar  navbar-expand-lg";
    } else {
        navbar.className = "navbar  navbar-expand-lg";
    }
}

function scrollLink (element){

    element.forEach(item => {
        item.addEventListener('click',(event) =>{
            event.preventDefault();
            const   element = event.target,
                    id = element.getAttribute('href'),
                    to = document.querySelector(id).offsetTop;

            window.scroll({
                top: to,
                behavior: 'smooth'
            })

            console.log(id)

        });
    });
}