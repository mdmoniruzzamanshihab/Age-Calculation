const dobInput = document.getElementById("dob");
const calcDateInput = document.getElementById("calcDate");
const resultBox = document.getElementById("result");


calcDateInput.value = new Date().toISOString().split("T")[0];

function showResult(message) {
    resultBox.classList.remove("hidden");
    resultBox.innerText = message;
}

function calculateDifference(birthDate, targetDate) {
    let years = targetDate.getFullYear() - birthDate.getFullYear();
    let months = targetDate.getMonth() - birthDate.getMonth();
    let days = targetDate.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            targetDate.getFullYear(),
            targetDate.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return {
        years,
        months,
        days
    };
}

function calculateAge() {
    const dob = dobInput.value;
    const calcDate = calcDateInput.value;

    if (!dob) {
        showResult("Please select your Date of Birth.");
        return;
    }

    const birthDate = new Date(dob);
    const targetDate = new Date(calcDate);

    if (birthDate > targetDate) {
        showResult("Date of Birth cannot be later than the calculation date.");
        return;
    }

    const age = calculateDifference(birthDate, targetDate);

    showResult(
        `${age.years} years ${age.months} months ${age.days} days`
    );
}