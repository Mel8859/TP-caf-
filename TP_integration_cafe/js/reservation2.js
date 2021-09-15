// document.getElementById("reservation_button").onclick = reservation;
document.getElementById("reservation_button").onclick = reservationAvecResa;

// reservation sans verif du nombre
function reservation() {

    var name = document.getElementById("name").value;
    var nombre = document.getElementById("nb").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("heure").value;
    var message = document.getElementById("message").value;

    var reservation = [name, nombre, date, time, message];
    console.log(reservation)
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {}
    xhttp.open("GET", "reservation.php?q=" + reservation);
    xhttp.send();
}


// reservation avec verif


function reservationAvecResa() {
    var name = document.getElementById("name").value;
    var nombre = document.getElementById("nb").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("heure").value;
    var message = document.getElementById("message").value;

    var reservation = [name, nombre, date, time, message];
    console.log(reservation)
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("reserv").innerHTML = this.responseText
    }
    xhttp.open("GET", "setreservation.php?q=" + reservation);
    xhttp.send();
}