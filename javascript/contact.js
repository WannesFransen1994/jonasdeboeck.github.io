window.addEventListener("load", initPage);

function initPage() {
    document.getElementById("Subject").addEventListener("change", other);
    document.getElementById("E-mail").addEventListener("blur", checkEmpty);
    document.getElementById("Message").addEventListener("blur", checkEmpty);
}

function other(evt) {
    if (evt.target.value === "Other") {
        let p = document.createElement("p");
        let label = document.createElement("label");
        let input = document.createElement("input");
        label.innerText = "Describe please";
        input.type = "text";
        p.id = "other";
        p.appendChild(label);
        p.appendChild(input);
        document.getElementsByTagName("form")[0].insertBefore(p, document.getElementById("bericht"));
        input.addEventListener("blur", checkEmpty)
    } else {
        if (document.getElementById("other") != null) {
            document.getElementsByTagName("form")[0].removeChild(document.getElementById("other"));
        }
    }
}

function checkEmpty(evt) {
    if (evt.target.value === "") {
        let p = document.createElement("p");
        p.innerText = "Please Fill out this field";
        p.style.color = "red";
        p.id = evt.target.id + "Error";
        evt.target.parentNode.lastElementChild.style.border = "1px solid red";
        evt.target.parentNode.insertBefore(p, evt.target.parentNode.lastElementChild);
    } else {
        evt.target.parentNode.removeChild(document.getElementById(evt.target.id + "Error"));
        evt.target.parentNode.lastElementChild.style.border = "none";
    }
}