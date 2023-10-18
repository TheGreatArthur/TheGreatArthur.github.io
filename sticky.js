// Sélectionnez la navbar
const navbar = document.querySelector('.navbar');

// Obtenez la position initiale de la navbar
const navbarOffsetTop = navbar.offsetTop;

// Fonction pour gérer le comportement collant
function handleStickyNav() {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky-nav');
    } else {
        navbar.classList.remove('sticky-nav');
    }
}

// Écoutez le défilement de la page
window.addEventListener('scroll', handleStickyNav);