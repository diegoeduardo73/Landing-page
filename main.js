document.addEventListener('DOMContentLoaded', function () {
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.getElementById('nav').offsetHeight,
                behavior: 'smooth'
            });
        }
    }
    const navLinks = document.querySelectorAll('#nav a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', scrollToSection);
    });
});
