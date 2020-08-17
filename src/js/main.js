import '../scss/main.scss';
import header from '../components/header.html';
import footer from '../components/footer.html';


document.getElementById('header').innerHTML = header;

document.getElementById('footer').innerHTML = footer;

window.addEventListener('scroll', () => {
    if(scrollY > 80){
        document.getElementById('header').classList.add('scrolled');
    }else{
        document.getElementById('header').classList.remove('scrolled');
    }
})