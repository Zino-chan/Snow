import '../scss/main.scss';
import header from '../components/header.html';
import footer from '../components/footer.html';
import sal from 'sal.js';
import Splide from '@splidejs/splide';

const selector = (element) => document.querySelector(element);
const selectorAll = (element) => document.querySelectorAll(element);

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;


document.addEventListener('DOMContentLoaded', () => {

    selector('.preloader').style.display = 'none';

    window.addEventListener('scroll', () => {
        scrollY > 80 ? document.getElementById('header').classList.add('scrolled')
        : document.getElementById('header').classList.remove('scrolled');
    });

    selector('.nav-toggler').addEventListener('click', () => {
        selector('.navbar-nav').classList.toggle('open');
        selector('.nav-toggler').classList.toggle('open');
    })

    selectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            selector('.navbar-nav').classList.remove('open');
            selector('.nav-toggler').classList.remove('open');
        })
    })

    sal();

    new Splide( '.splide', {
        type        : 'loop',
        perPage     : 1,
        autoplay    : true,
        pauseOnHover: true,
        arrows: false,
        speed: 300
    }).mount();
})

