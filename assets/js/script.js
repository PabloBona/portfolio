const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");

iconMenu.addEventListener("click", function () {
    console.log(menu.classList.toggle("menu-show"));
});



window.onscroll = function() { skillefect() };

//funcion que aplica la animación de la barra de habilidades
function skillefect() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("market").classList.add("barra-progreso1");
        document.getElementById("Ui").classList.add("barra-progreso2");
        document.getElementById("Ux").classList.add("barra-progreso3");
        
    }

}