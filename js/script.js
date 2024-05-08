const button = document.querySelector('#check-button');
const resultDisplay = document.querySelector("#result");

function checkPalindrome() {
    const userInput = document.querySelector('#text-input').value;
    const result = document.createElement('p');
    result.classList.add("palindrome");

    if (userInput === "") {
        result.innerHTML = `Please enter a palindrome`;
        resultDisplay.innerHTML = ""; //
        resultDisplay.appendChild(result);
        return;
    }

    const cleanInput = userInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedInput = cleanInput.split("").reverse().join("");

    if (cleanInput === reversedInput) {
        result.innerHTML = `Yes, "${userInput}" is a palindrome!`;
    } else {
        result.innerHTML = `No, "${userInput}" is not a palindrome.`;
    }

    resultDisplay.innerHTML = ""; //
    resultDisplay.appendChild(result);
}

button.addEventListener("click", checkPalindrome);

