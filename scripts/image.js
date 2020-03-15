const popOut = () => {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  const projectImgs = document.querySelectorAll('.project-img img')

  projectImgs.forEach((img) => {
    img.addEventListener('click', () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    })
  })

  const span = document.getElementsByClassName("close")[0];

  span.onclick = () => {
    modal.style.display = "none";
  }
}
window.onload = () => {
  popOut()
}