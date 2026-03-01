// GESTION DU THEME (LUMIERE / SOMBRE)
const themeBtn = document.querySelector("#theme-toggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const icon = themeBtn.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
});

// BOUTON RETOUR EN HAUT
const topBtn = document.querySelector("#backToTop");
window.onscroll = () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});