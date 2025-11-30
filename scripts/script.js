
const header = document.querySelector('header')
const btn = document.getElementById('btnMenu')
const lista = document.querySelector('header ul#lista')
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('body a[href^="#"]')
const menuItens = document.querySelectorAll('body header a[href^="#"], section#top a')
let btnSubir = document.querySelector("a#btnSubir")

btn.addEventListener('click', function() {
    btn.classList.toggle('ativar')
    lista.classList.toggle('mostrar')
})

window.addEventListener('scroll', function() {
    header.classList.toggle('rolou', window.scrollY > 50)
})

window.addEventListener('scroll', function() {
    btnSubir.classList.toggle('aparece', window.scrollY > 200)
})

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('ativo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo');
            });
            addReview(id);
        } else {
           removeReview(id);
        }
    })
}

menuItens.forEach(item => {
    item.addEventListener('click', rolagemPorClick);
})

function rolagemPorClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 95,
        behavior: 'smooth'
    });
}
function addReview(id) {
    section = document.querySelector("section#"+id)
    section.classList.add("revela")
}
function removeReview(id) {
    section = document.querySelector("section#"+id)
    section.classList.remove("revela")
}

btnSubir.addEventListener("click", function(event) {
    event.preventDefault()
    window.scroll({
        top: 0,
    });
})