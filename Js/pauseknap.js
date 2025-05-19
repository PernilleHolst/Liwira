const scrollUpBtn = document.getElementById("scrollUpBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollUpBtn.classList.add("show");
  } else {
    scrollUpBtn.classList.remove("show");
  }
});

scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});