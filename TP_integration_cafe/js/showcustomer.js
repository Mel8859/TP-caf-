    function showCustomer(str) {
        if (str == 0) {
            document.getElementById("txtHint2").innerHTML = "";
            return;
        } else {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                document.getElementById("txtHint2").innerHTML = this.responseText;
            }
            xhttp.open("GET", "getcustomer.php?q=" + str);
            xhttp.send();
        }
    }