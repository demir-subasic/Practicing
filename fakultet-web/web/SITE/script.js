document.addEventListener('DOMContentLoaded', function () {
    var scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('data-target');
            var targetDiv = document.getElementById(targetId);

            if (targetDiv) {
                targetDiv.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

function scrollToDiv(divId) {
    var div = document.getElementById(divId);
    if (div) {
        div.scrollIntoView({ behavior: 'smooth' });
    }
}
