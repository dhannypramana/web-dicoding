const calculator_data = {
    displayNumber : '0'
}

function updateDisplay() {
    let displayNumber = document.getElementById("displayNumber");
    displayNumber.innerHTML = calculator_data.displayNumber;
}

function inputDigit(digit) {
    if (digit == "CE" || digit == "=" || digit == "+" || digit == "-" ||  digit == "+/-") {
        return;
    }

    if (calculator_data.displayNumber == '0') {
        calculator_data.displayNumber = digit;    
    } else {
        calculator_data.displayNumber+=digit;
    }
}

function clearDisplay(params) {
    calculator_data.displayNumber = '0';
}

const buttons = document.querySelectorAll(".button");
for (const button of buttons) {
    
    button.addEventListener('click', function(event) {
        const target = event.target;
        
        if (target.innerText == "CE") {
            clearDisplay();
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}