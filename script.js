const passwordLength = document.getElementById("password-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");
const generateButton = document.querySelector("button");
const password = document.getElementById("password");
const copyIcon = document.getElementById("copy-icon");
const copiedText = document.getElementById("copied-text");

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
    } else if (countPasswordStrength == 2) {
        passwordStrength.innerText = "WEAK!";
    } else if (countPasswordStrength == 3) {
        passwordStrength.innerText = "MEDIUM!";
    } else {
        passwordStrength.innerText = "STRONG!";
    }
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