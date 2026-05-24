function toggleMenu() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('visible');
}

document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('side-menu');
    const menuButton = document.querySelector('.menu-button');

    if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
        sideMenu.classList.remove('visible');
    }
});