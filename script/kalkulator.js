const calculator_data = {
    displayNumber : '0',
    operator : null,
    firstNumber : null,
    waitingForSecondNumber: null
};

function clear_calculator_data() {
    calculator_data.displayNumber = '0';
    calculator_data.operator = null;
    calculator_data.firstNumber = null;
    calculator_data.waitingForSecondNumber = null;
}

function updateDisplay() {
    document.getElementById("displayNumber").innerHTML = calculator_data.displayNumber;
}

function inverseNumber() {
    calculator_data.displayNumber *= -1;
}

function handleOperator(operator) {
    if (!calculator_data.waitingForSecondNumber) {
        calculator_data.operator = operator;
        calculator_data.firstNumber = calculator_data.displayNumber;
        calculator_data.waitingForSecondNumber = true;

        calculator_data.displayNumber = '0';
    } else {
        alert("Operator sudah diterapkan");
    }
}

function performCalculation() {
    let number;
    let secNumber = calculator_data.displayNumber;

    if (calculator_data.operator == "+") {
        number = Number(calculator_data.firstNumber) + Number(calculator_data.displayNumber);
    } else if (calculator_data.operator == "-") {
        number = calculator_data.firstNumber - calculator_data.displayNumber;
    }

    calculator_data.displayNumber = number;
    calculator_data.waitingForSecondNumber  = false;

    addCalculationToHistory(number, secNumber);
}

function addCalculationToHistory(number, secNumber) {
    let table = document.querySelector('#table-history');
    let tr = document.createElement('tr');
    table.appendChild(tr);

    tr.innerHTML = "<td>" + calculator_data.firstNumber + "</td>";
    tr.innerHTML += "<td>" + calculator_data.operator + "</td>";
    tr.innerHTML += "<td>" +  + secNumber + "</td>";
    tr.innerHTML += "<td>" + number + "</td>"; 
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

const buttons = document.querySelectorAll(".button");
for (const button of buttons) {
    
    button.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('clear')) {
            clear_calculator_data();
        } else if (target.classList.contains('inverse')) {
            inverseNumber();
        } else if (target.classList.contains('add')) {
            handleOperator(target.innerText);
        } else if (target.classList.contains('minus')) {
            handleOperator(target.innerText);
        } else if (target.classList.contains('equal')) {
            performCalculation();
        }

        inputDigit(target.innerText);
        updateDisplay();
    });
}