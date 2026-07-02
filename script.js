function calculateAge() {
    let date1 = document.getElementById("dob").value;
    let date2 = document.getElementById("calcDate").value;

    if (!date1) {
        document.getElementById("result").classList.remove("hidden");
        document.getElementById("result").innerText = "Select Date of Birth";
        return;
    }

    let d1 = new Date(date1);
    let d2 = date2 ? new Date(date2) : new Date();

    if (d1 > d2) {
        [d1, d2] = [d2, d1];
    }

    let years = d2.getFullYear() - d1.getFullYear();
    let months = d2.getMonth() - d1.getMonth();
    let days = d2.getDate() - d1.getDate();

    if (days < 0) {
        months--;
        let prevMonth = new Date(d2.getFullYear(), d2.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let resultBox = document.getElementById("result");
    resultBox.classList.remove("hidden");
    resultBox.innerText =
        years + " years " + months + " months " + days + " days";
}