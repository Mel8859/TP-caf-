document.getElementById("show").onclick = nbpersonnes;

function nbpersonnes() {

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("resa").innerHTML = this.responseText;
    }
    xhttp.open("GET", "dispo.php");
    xhttp.send();

}