// Mes Selecteurs
let backgroundBlack = document.querySelector(".btnBlack");
let backgroundWhite = document.querySelector(".btnBlanc");
let a = document.querySelectorAll("a");

// Mes events
backgroundBlack.addEventListener("click", () => {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    for (i = 0; i < a.length; i++) {
        a[i].style.color = 'white';
    }
    document.querySelector(".sc2P").style.color = "black"
    document.querySelector(".row11 > p").style.color = "black"
    document.querySelector(".row11 > h6").style.color = "black"
    document.querySelector(".row11 > i").style.color = "black"
    document.querySelector(".row33 > p").style.color = "black"
    document.querySelector(".row33 > h6").style.color = "black"
    document.querySelector(".row33 > i").style.color = "black"
})

backgroundWhite.addEventListener("click", () => {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    for (i = 0; i < a.length; i++) {
        a[i].style.color = 'black';
    }
})