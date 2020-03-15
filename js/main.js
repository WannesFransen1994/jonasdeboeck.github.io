window.addEventListener("load", initPage);

function initPage () {
    let languages = document.getElementsByClassName("languages");
    for (let i = 0; i < languages.length; i++) {
        languages[i].addEventListener("mouseenter", colorize);
        languages[i].addEventListener("mouseleave", uncolorize);
    }
    let social = document.getElementsByClassName("social");
    for (let i = 0; i < social.length; i++) {
        social[i].addEventListener("mouseenter", colorize);
        social[i].addEventListener("mouseleave", uncolorize);
    }
}

function colorize (evt) {
    evt.target.style.color = "rgb(0,123,255)";
}

function uncolorize (evt) {
    evt.target.style.color = "rgb(0,0,0)";
}