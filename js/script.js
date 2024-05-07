const input = document.querySelector("#text-input").value;
const display = document.querySelector("#result");
const button = document.querySelector("#check-button");

function palindromeChecker(word) {
    const newWord = word.replace(" ", "").split("").reverse().join("").toLowerCase();

    if (newWord === word) {
        display.innerHTML = "This is a palindrome!";
    } else {
        display.innerHTML = "NOT";
    }

    display.innerHTML = "";
}

button.addEventListener("click", palindromeChecker(input));


