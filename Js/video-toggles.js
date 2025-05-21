document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");
  const toggleBtn = document.querySelector(".video-toggle");
  const icon = toggleBtn.querySelector("i");

  toggleBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      video.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  });
});
