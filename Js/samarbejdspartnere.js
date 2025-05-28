//Kode taget fra chatgpt og tilpasset efterfølgende, se bilag kode i zip-fil.

document.addEventListener("DOMContentLoaded", () => {
  const partnerNames = [
    "LENA Fischer",
    "SVENDBORG SENNEPSFABRIK",
    "<strong>NYBORG DESTILLERI</strong>",
    "Nybro Frugtplantage",
    "<strong>Selleberg Herregård</strong>",
    "Kerteminde Bryggeri",
    "<strong>Vangs keramiske Værksted</strong>",
    "KOFFIROAST",
    "<em>Summerbird</em>"
  ];

  const track = document.getElementById("partnerTrack");

  // Tilføj partnere to gange for uendelig scroll
  const content = [...partnerNames, ...partnerNames];

  content.forEach(name => {
    const span = document.createElement("span");
    span.innerHTML = name;
    track.appendChild(span);
  });

  // Scroll-animation
  let offset = 0;

  function scrollLoop() {
    offset -= 0.5; // Juster hastigheden
    if (Math.abs(offset) >= track.scrollWidth / 2) {
      offset = 0;
    }
    track.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(scrollLoop);
  }

  scrollLoop();
});
