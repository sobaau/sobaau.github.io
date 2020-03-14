const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navlinks');
  const navLinks = document.querySelectorAll('.navlinks li');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    })
    hamburger.classList.toggle('toggle');
  })

  const wrapper = document.querySelector('.wrapper');
  wrapper.addEventListener('click', () => {
    if (nav.classList.contains('nav-active')) {
      nav.classList.toggle('nav-active');
    }
  });
  navLinks.forEach((li) =>{
    li.addEventListener('click', ()=>{
      navResize();
    });
  });
}
navSlide();
const navResize = () => {
  const nav = document.querySelector('.navlinks');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelectorAll('.navlinks li');

  if (nav.classList.contains('nav-active')) {
    nav.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
    navLinks.forEach((link, index) => {
      link.style.animation = '';
    })
  }
  if (!nav.classList.contains('navslide')) {
    document.querySelector('.navlinks').classList.add('navslide')
  }

}

window.onresize = () => {
  document.querySelector('.navlinks').classList.remove('navslide')
  navResize();
}

window.onload = () => {
  document.querySelector('.navlinks').classList.add('navslide')
}

window.addEventListener('load', () => {
  const hidden = document.querySelectorAll('.hidecontent')
  const loader = document.getElementById('load-wrapper')
  const hiddenSize = hidden.length;
  for (var i = 0; i < hiddenSize; i++) {
    hidden[i].classList.toggle('hidecontent');
  }
  loader.parentNode.removeChild(loader);
})