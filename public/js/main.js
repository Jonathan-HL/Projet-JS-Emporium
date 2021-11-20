// Mes Selecteurs
let navMenu = document.querySelector(".nav-list");
let btnMenu = document.querySelector(".btn-menu");
let btnCancel = document.querySelector(".btn-x");
let backgroundBlack = document.querySelector(".btnBlack");
let backgroundWhite = document.querySelector(".btnBlanc");
let a = document.querySelectorAll("a");

// Mes Functions
let aBlack = () => {
    a.forEach(el => {
        el.style.color = "black"
    });
}

let aRed= () => {
    a.forEach(el => {
        el.style.color = "#DD4545"
    });
}

// Event Navbar responsive
btnMenu.addEventListener("click", () => {
    navMenu.classList.add("active");
    backgroundBlack.addEventListener("click", () => {
        aRed()
    })
})
btnCancel.addEventListener("click", () => {
    navMenu.classList.remove("active");
})

// Mes events btn Black et White

backgroundBlack.addEventListener("click", () => {
    aRed()
    document.body.style.backgroundColor = "black"
    document.body.style.color = "#DD4545"
    document.querySelector("h1").style.color = "#DD4545"
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
    document.querySelector("h1").style.color = "black"
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.querySelector(".btn-menu").style.color = "black"
    aBlack()
})

// Event Navbar fixed
window.addEventListener("scroll", () => {
    let navScroll = document.querySelector("nav")
        navScroll.classList.toggle("sticky", window.scrollY > 200)
})
