document.getElementById("reservation_cookie").onclick = send_reservation;

let index = 0;
function send_reservation() {
  let tableau = [];
  let name = document.getElementById("name").value;
  let nb_people = document.getElementById("nb_people").value;
  let date_birth = document.getElementById("date_birth").value;
  let message = document.getElementById("message").value;

//   if (!isAlreadyReserved(name, nb_people, date_birth, message)) {
    tableau.push(name, nb_people, date_birth, message);
    index++;
    document.cookie = `reservation${index}=${tableau}`;
    console.log(document.cookie);
//   }
//   console.log(getCookie(re))
}



function isAlreadyReserved(name, nb_people, date_birth, message) {

    // if

    // return true;
    // return false;

}



function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}