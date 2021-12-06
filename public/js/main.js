// Mes Selecteurs
let navMenu = document.querySelector(".nav-list");
let btnMenu = document.querySelector(".btn-menu");
let btnCancel = document.querySelector(".btn-x");
let backgroundBlack = document.querySelector(".btnBlack");
let backgroundWhite = document.querySelector(".btnBlanc");
let a = document.querySelectorAll("a");
let conex = document.querySelector(".conex");
let loginForm  = document.querySelector("#formLogin");
let forLoginn = document.querySelector("#log");
let forInscrip = document.querySelector("#formInscrip");
let forRegistre = document.querySelector("#inscrip");
let formContainer = document.querySelector("#formContainer");
let cancelPopup = document.querySelector(".icon-x");
let navBtn = document.querySelectorAll(".manual-btn");
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
let navBtnRed = () => {
    navBtn.forEach(el => {
        el.style.borderColor ="#DD4545"
    })
}
let navBtnBlack = () => {
    navBtn.forEach(el => {
        el.style.borderColor ="black"
    })
}
let noScroll = () => {
    window.scrollTo(0,0);
}

// Event Navbar responsive
btnMenu.addEventListener("click", () => {
    navMenu.classList.add("active");
    backgroundBlack.addEventListener("click", () => {
        aRed()
        document.querySelector(".btn-x").style.color = "#DD4545"
    })
    backgroundWhite.addEventListener("click", () => {
        document.querySelector(".btn-x").style.color = "black"
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
    document.querySelector(".btn-menu").style.color = "grey"
    document.querySelector(".sc2P").style.color = "black"
    document.querySelector(".row11 > p").style.color = "black"
    document.querySelector(".row11 > h6").style.color = "black"
    document.querySelector(".row11 > i").style.color = "black"
    document.querySelector(".row33 > p").style.color = "black"
    document.querySelector(".row33 > h6").style.color = "black"
    document.querySelector(".row33 > i").style.color = "black"
    navBtnRed()
})

backgroundWhite.addEventListener("click", () => {
    document.querySelector("h1").style.color = "black"
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    document.querySelector(".btn-menu").style.color = "black"
    aBlack()
    navBtnBlack()
})

// Event Navbar fixed
window.addEventListener("scroll", () => {
    let navScroll = document.querySelector("nav")
        navScroll.classList.toggle("sticky", window.scrollY > 200)
})

// Event popUp Conex / Inscription
conex.addEventListener("click", () => {
    document.querySelector(".form-wrapper .card").classList.toggle("show")
    document.querySelector("body").classList.toggle("stop-scrolling")
    
})

cancelPopup.addEventListener("click", () => {
    document.querySelector(".form-wrapper .card").classList.remove("show")
    document.querySelector("body").classList.remove("stop-scrolling")
})

forLoginn.addEventListener("click", () => {
    forLoginn.classList.add("active")
    forRegistre.classList.remove("active")
    if (loginForm.classList.contains("toggleForm")) {
            formContainer.style.transform = `translate(0%)`;
            formContainer.style.transition = "transform 0.5s";
            forInscrip.classList.add("toggleForm");
            loginForm.classList.remove("toggleForm");
    }
})

forRegistre.addEventListener("click", () => {
    forLoginn.classList.remove("active")
    forRegistre.classList.add("active")
    if (forInscrip.classList.contains("toggleForm")) {
            formContainer.style.transform = `translate(-100%)`;
            formContainer.style.transition = "transform 0.5s";
            forInscrip.classList.remove("toggleForm");
            loginForm.classList.add("toggleForm");
    }
})
