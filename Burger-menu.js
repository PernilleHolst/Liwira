// ===== 1. DOM CONTENT LOADED =====
document.addEventListener("DOMContentLoaded", function() {
  console.log("Page loaded!");

  // ===== 2. VARIABLES AND TYPES =====
  const burgerButton = document.getElementById("burger-icon");
  const mobileMenu = document.getElementById("mobile-menu");
  const body = document.body;
  const closeMenuBtn = document.getElementById("close-menu"); //new//

  
  // ===== 3. ARRAYS =====
  const menuItems = ["Produkter", "Gavekurve", "Nyheder", "Inspiration", "Kontakt"];
  
  // ===== 4. OBJECTS =====
  const menu = {
    isOpen: false,
    toggle: function() {
      this.isOpen = !this.isOpen;
      return this.isOpen;
    }
  };

  // ===== 5. DOM MANIPULATION =====
  const overlay = document.createElement('div');
  overlay.className = 'overlay';
  document.body.appendChild(overlay);

  // ===== 6. FUNCTIONS =====
  function toggleMenu() {
    burgerButton.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.style.display = menu.isOpen ? 'none' : 'block';
    body.classList.toggle("no-scroll");
    menu.toggle();
  }

  // ===== 7. EVENT LISTENERS =====
  if (burgerButton && mobileMenu) {
    burgerButton.addEventListener("click", function(event) {
      event.stopPropagation();
      toggleMenu();
    });
  }

  overlay.addEventListener("click", toggleMenu);

  if (closeMenuBtn) {
  closeMenuBtn.addEventListener("click", toggleMenu);
}

  // ===== 8. LOOPS =====
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", toggleMenu);
  });

  // ===== 9. JQUERY EXAMPLE =====
  if (window.jQuery) {
    $(window).on('resize', function() {
      if (window.innerWidth > 768 && menu.isOpen) {
        toggleMenu();
      }
    });
  }

  // ===== 10. ERROR HANDLING =====
  try {
    if (!burgerButton) throw new Error("Burger button not found");
  } catch (error) {
    console.error("Error:", error.message);
  }
});