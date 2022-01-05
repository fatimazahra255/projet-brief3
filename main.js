console.log("bonjour");

const btnOuvrir = document.querySelector(".btn-ouvrir")
const mobileNavMenu = document.querySelector(".nav-mobile")
const btnFermer = document.querySelector(".btn-fermer")

const classDeOuvrir = "nav-mobile-ouvrir"
const toggleMobileNav = () => {
    mobileNavMenu.classList.toggle(classDeOuvrir);
}
btnOuvrir.addEventListener("click", toggleMobileNav)
btnFermer.addEventListener("click", toggleMobileNav)
mobileNavMenu.querySelector("ul").addEventListener("click", toggleMobileNav)