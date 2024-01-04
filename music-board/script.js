document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('click', function () {
            const soundId = box.getAttribute('data-sound');
            const sound = document.getElementById(soundId);

            if (sound) {
                sound.currentTime = 0;
                sound.play();
            }
        });
    });
});
