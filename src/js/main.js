import '../scss/main.scss';
import header from '../components/header.html';
import footer from '../components/footer.html';
import sal from 'sal.js';
import Splide from '@splidejs/splide';

document.getElementById('header').innerHTML = header;

document.getElementById('footer').innerHTML = footer;

document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        scrollY > 80 ? document.getElementById('header').classList.add('scrolled')
        : document.getElementById('header').classList.remove('scrolled');
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

