// Mes Selecteurs
let navMenu = document.querySelector(".nav-list");
let btnMenu = document.querySelector(".btn-menu");
let btnCancel = document.querySelector(".btn-x");
let backgroundBlack = document.querySelector(".btnBlack");
let backgroundWhite = document.querySelector(".btnBlanc");
let a = document.querySelectorAll("a");

// Event Navbar
btnMenu.addEventListener("click", () => {
    navMenu.classList.add("active");
    backgroundBlack.addEventListener("click", () => {
        for (i = 0; i < a.length; i++) {
            a[i].style.color = 'black';
        }
    })
})
btnCancel.addEventListener("click", () => {
    navMenu.classList.remove("active");
})

// Mes events btn Black et White
backgroundBlack.addEventListener("click", () => {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
    for (i = 0; i < a.length; i++) {
        a[i].style.color = 'white';
    }
    document.querySelector(".btn-menu").style.color = "white"
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
    document.querySelector(".btn-menu").style.color = "black"
    for (i = 0; i < a.length; i++) {
        a[i].style.color = 'black';
    }
})

