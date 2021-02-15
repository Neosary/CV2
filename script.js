lienMenu = document.querySelectorAll("nav ul li");
ecranAffiche = document.querySelectorAll(".ECRAN");
nav = document.querySelector("nav");

for (let i = 0; i < lienMenu.length; i++) {
  lienMenu[i].addEventListener("click", function () {
    scrollEcran(i);
  });
}

function scrollEcran(numEcran) {
  ecranAffiche[numEcran].scrollIntoView({
    block: "end",
    inline: "start",
    behavior: "smooth",
  });
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}