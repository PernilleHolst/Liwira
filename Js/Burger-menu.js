//Kode taget fra chatgpt og tilpasset efterfølgende, se bilag kode i zip-fil.

// 1. Placering og udførelse af JS (external JS file, placed at end of HTML with defer)
document.addEventListener("DOMContentLoaded", function () {
  console.log("JS loaded and running!"); // Fejlfinding

  // 2. Variabler og typer
  let burgerButton = document.getElementById("burger-icon");
  let mobileMenu = document.getElementById("mobile-menu");
  let closeButton = document.getElementById("close-menu");
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  let isOpen = false; // boolean

  // 3. Arrays
  let menuLinks = ["Produkter", "Gavekurve", "Nyheder", "Inspiration", "Kontakt"];

  // 4. Objekter
  let menu = {
    toggle: function () {
      isOpen = !isOpen;
      return isOpen;
    }
  };

  // 5. Funktion (med variabel scope + DOM)
  function toggleMenu() {
    burgerButton.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.style.display = isOpen ? "none" : "block";
    document.body.classList.toggle("no-scroll");
    menu.toggle();
  }

  // 6. Kontrolstruktur (if-else) + Events
  if (burgerButton && mobileMenu) {
    burgerButton.addEventListener("click", function () {
      toggleMenu();
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      toggleMenu();
    });
  }

  overlay.addEventListener("click", toggleMenu);

  // 7. Loops + DOM Events
  let links = document.querySelectorAll(".mobile-menu a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      toggleMenu();
    });
  }

  // 8. jQuery eksempel (bonus for pensum)
  if (window.jQuery) {
    $(window).on("resize", function () {
      if (window.innerWidth > 1024 && isOpen) {
        toggleMenu();
      }
    });
  }

  // 9. Fejlhåndtering
  try {
    if (!burgerButton) throw new Error("Burger knap ikke fundet");
  } catch (err) {
    console.error("Fejl:", err.message);
  }
});
