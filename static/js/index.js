document.addEventListener("DOMContentLoaded", function () {
    currentTime();
    let buttons = document.getElementsByClassName("click-nr");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "delete") {
                document.location.reload(true);
            } else {
                let clockNumber = this.getAttribute("data-type");
                let clockNumberDiv = document.getElementById("clock-number");
                clockNumberDiv.value += clockNumber;
            }
        });
    }

    function currentTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let dd = date.getDate();
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let ll = month[date.getMonth()];
        let yy = date.getFullYear();


        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;
        dd = (dd < 10) ? "0" + dd : dd;

        let currentDate = dd + " " + ll + " " + yy;
        let time = hh + ":" + mm + ":" + ss;
        setTimeout(function () { currentTime() }, 1000);
        document.getElementById("time").innerHTML = `Date: ${currentDate} Time: ${time}`;
    }
});