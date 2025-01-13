const hamburger = document.getElementsByClassName("hamburger")[0]
const mobileNavs = document.getElementsByClassName("nav-links")[0]

hamburger.addEventListener("click", () => {
  mobileNavs.classList.toggle("active")
})

function navigate(event, page) {
  event.preventDefault();
  const url = `file:///C:/Temp/AdminDesign/NiceAdmin/${page}`;
  history.pushState(null, '', url);
  
}