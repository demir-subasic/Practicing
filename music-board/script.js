const soundBoxes = document.querySelectorAll('.sound-box');

soundBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const soundUrl = box.dataset.soundUrl;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${soundUrl}?enablejsapi=1&origin=${window.location.origin}`;
    iframe.style.display = 'none';
    iframe.onload = () => {
      const player = new YT.Player(iframe);
      player.addEventListener('onReady', () => {
        player.playVideo();
      });
    };
    document.body.appendChild(iframe);
  });
});

// Load the YouTube Player API script
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
document.body.appendChild(tag);
