const passwordLength = document.getElementById("password-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");
const generateButton = document.querySelector("button");
const password = document.getElementById("password");
const copyIcon = document.getElementById("copy-icon");
const copiedText = document.getElementById("copied-text");
const barOne = document.getElementById("bar-1");
const barTwo = document.getElementById("bar-2");
const barThree = document.getElementById("bar-3");
const barFour = document.getElementById("bar-4");
const lengthNumber = document.getElementById("length-number");

let passwordStrength = document.getElementById("password-strength");
let iconClicked = false;

function passwordGenerator() {
    let characterSet = "";
    let countPasswordStrength = 0;

    if (uppercase.checked) {
        characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        countPasswordStrength += 1;
    }

    if (lowercase.checked) {
        characterSet += "abcdefghijklmnopqrstbwxyz";
        countPasswordStrength += 1;
    }

    if (includeNumbers.checked) {
        characterSet += "0123456789";
        countPasswordStrength += 1;
    }

    if (includeSymbols.checked) {
        characterSet += "~`!@#£€$¢¥§%°^&*()-_+={}[]| \ / :;\"'<>,.?"
        countPasswordStrength += 1;
    }

    let randomPassword = "";

    for (let i = 0; i < passwordLength.value; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        randomPassword += characterSet[randomIndex];
    }

    if (characterSet != "") {
        password.innerText = randomPassword;
    } else {
        password.innerText = "";
    }

    if (countPasswordStrength == 0) {
        passwordStrength.innerText = "NOTHING!"
    } else if (countPasswordStrength == 1) {
        passwordStrength.innerText = "TOO WEAK!";
        barOne.style.background = "white";
        barTwo.style.background = "white";
        barThree.style.background = "white";
        barFour.style.background = "white";
        barOne.style.background = "#F64A4A";
    } else if (countPasswordStrength == 2) {
        passwordStrength.innerText = "WEAK!";
        barOne.style.background = "white";
        barTwo.style.background = "white";
        barThree.style.background = "white";
        barFour.style.background = "white";
        barOne.style.background = "#FB7C58";
        barTwo.style.background = "#FB7C58";
    } else if (countPasswordStrength == 3) {
        passwordStrength.innerText = "MEDIUM!";
        barOne.style.background = "white";
        barTwo.style.background = "white";
        barThree.style.background = "white";
        barFour.style.background = "white";
        barOne.style.background = "#F8CD65";
        barTwo.style.background = "#F8CD65";
        barThree.style.background = "#F8CD65";
    } else {
        passwordStrength.innerText = "STRONG!";
        barOne.style.background = "white";
        barTwo.style.background = "white";
        barThree.style.background = "white";
        barFour.style.background = "white";
        barOne.style.background = "#A4FFAF";
        barTwo.style.background = "#A4FFAF";
        barThree.style.background = "#A4FFAF";
        barFour.style.background = "#A4FFAF";
    }

    lengthNumber.innerText = passwordLength.value;
    // console.log(passwordLength.value);
}

function copyPassword() {
    navigator.clipboard.writeText(password.innerText);
}

copyIcon.addEventListener("click", function handleClick() {
    iconClicked = true;
    if (iconClicked) {
        copiedText.style.display = "block";
    }
})