window.addEventListener("load", initPage);

function initPage() {
    for (let i = 0; i < document.getElementsByClassName("skills").length; i++) {
        document.getElementsByClassName("skills")[i].firstElementChild.addEventListener("mouseenter", kleur);
    }

    for (let i = 0; i < document.getElementsByClassName("skills").length; i++) {
        document.getElementsByClassName("skills")[i].firstElementChild.addEventListener("mouseleave", geenKleur);
    }
}

function kleur(evt) {
    let sterren = evt.target.parentNode.lastElementChild.children;
    let aantal = parseInt(evt.target.parentNode.lastElementChild.className);
    for (let i = 0; i < aantal; i++) {
        sterren[i].style.color = "yellow";
    }
}

function geenKleur(evt) {
    let sterren = evt.target.parentNode.lastElementChild.children;
    let aantal = parseInt(evt.target.parentNode.lastElementChild.className);
    for (let i = 0; i < aantal; i++) {
        sterren[i].style.color = "white";
    }
}