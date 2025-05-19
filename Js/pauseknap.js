const video = document.querySelector('.video-container video');
const toggleBtn = document.querySelector('.video-toggle');

toggleBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        toggleBtn.textContent = '⏸️';
        toggleBtn.setAttribute('aria-label', 'Pause video');
    } else {
        video.pause();
        toggleBtn.textContent = '▶️';
        toggleBtn.setAttribute('aria-label', 'Play video');
    }
});