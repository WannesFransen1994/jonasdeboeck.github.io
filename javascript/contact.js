window.addEventListener("load", initPage);

function initPage() {
    document.getElementById("Subject").addEventListener("change", other);
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
    } else {
        if (document.getElementById("other") != null) {
            document.getElementsByTagName("form")[0].removeChild(document.getElementById("other"));
        }
    }
}