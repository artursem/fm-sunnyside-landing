const burger = document.querySelector('#burger');
const nav = document.querySelector('nav');

const showNav = () => {
    // console.log('clicked!!!');
    if (nav.style.display === 'none') {
        burger.style.filter = 'opacity(0.5)';
        nav.style.display = 'flex';
    } else {
        burger.style.filter = 'opacity(1)';
        nav.style.display = 'none';
    }
};


document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        burger.style.filter = 'opacity(1)';
        nav.style.display = 'none';
    }
});

burger.addEventListener('click', showNav);
