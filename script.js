let isForm = document.getElementById("idForm");
let btnedit = document.getElementById("edit");
btnedit.onclick = function () {
    if (isForm.style.display === "none") {
        isForm.style.display = "block";
    } else {
        isForm.style.display = "none";
    }
}