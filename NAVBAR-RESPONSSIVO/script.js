let hanburgue = document.querySelector('.hanburgue');
let navlinks = document.getElementById('nav-links');
let links = document.querySelectorAll('.links');


hanburgue.addEventListener('click', () => {
    navlinks.classList.toggle('hide');
    hanburgue.classList.toggle('lines-rotate');
});

for (let i = 0; i < links.length; i ++) {
    links[i].addEventListener('click', () => {
        navlinks.classList.toggle('hide');
    });
}