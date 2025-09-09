document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNavigation = document.getElementById('main-navigation');

    if (menuToggle && mainNavigation) {
        menuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('active');
            const isExpanded = mainNavigation.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }
});