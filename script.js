const passwordLength = document.getElementById("password-length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const includeNumbers = document.getElementById("include-numbers");
const includeSymbols = document.getElementById("include-symbols");
const generateButton = document.querySelector("button");
const password = document.getElementById("password");

function passwordGenerator() {
    let characterSet = "";
    if (uppercase.checked) {
        characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowercase.checked) {
        characterSet += "abcdefghijklmnopqrstbwxyz";
    }

    if (includeNumbers.checked) {
        characterSet += "0123456789";
    }

    if (includeSymbols.checked) {
        characterSet += "~`!@#£€$¢¥§%°^&*()-_+={}[]| \ / :;\"'<>,.?"
    }

    let randomPassword = "";

    for (let i = 0; i < passwordLength.value; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        randomPassword += characterSet[randomIndex];
    }

    password.innerText = randomPassword;
}

