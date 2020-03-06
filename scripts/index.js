const nav = document.getElementById('navbar');
const stick = nav.offsetTop;

const stickNav = () => {
    if (window.pageYOffset >= stick) {
        nav.classList.add('stick')
    } else {
        if (nav.classList.contains('stick')) {
            nav.classList.remove('stick');
        }
    }
}

window.onscroll = () => stickNav();