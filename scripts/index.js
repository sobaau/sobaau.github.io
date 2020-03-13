console.log(screen.width)

const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navlinks');
  const navLinks = document.querySelectorAll('.navlinks li')
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    })
    hamburger.classList.toggle('toggle')
  })

}

navSlide();