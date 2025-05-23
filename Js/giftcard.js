document.addEventListener("DOMContentLoaded", () => {
    const cardImages = document.querySelectorAll(".card-image");
    const skipButton = document.querySelector(".skip-button");
    const nextButton = document.querySelector(".next-button");
    const textarea = document.querySelector("textarea");
  
    let selectedCardIndex = null;
  
    cardImages.forEach((img, index) => {
      img.addEventListener("click", () => {
        cardImages.forEach(card => card.classList.remove("selected"));
        img.classList.add("selected");
        selectedCardIndex = index;
      });
    });
  
    skipButton.addEventListener("click", () => {
      selectedCardIndex = null;
      cardImages.forEach(card => card.classList.remove("selected"));
    });
  
    nextButton.addEventListener("click", () => {
      const message = textarea.value.trim();
      localStorage.setItem("kortBesked", message);
  
      if (selectedCardIndex !== null) {
        localStorage.setItem("valgtKort", selectedCardIndex);
      } else {
        localStorage.removeItem("valgtKort");
      }
  
      window.location.href = "gift-basket.html";
    });
  });
  