// calculator.js
document.addEventListener('DOMContentLoaded', function () {
    // --- Helper arithmetic functions ---
    function add(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }

    function multiply(number1, number2) {
        return number1 * number2;
    }

    function divide(number1, number2) {
        // Handle division by zero explicitly
        if (number2 === 0) {
            return null; // null indicates an invalid division
        }
        return number1 / number2;
    }

    // --- Utility: read and parse inputs safely ---
    function readInputs() {
        const n1 = parseFloat(document.getElementById('number1').value);
        const n2 = parseFloat(document.getElementById('number2').value);

        // If parseFloat returns NaN (e.g., empty input), default to 0
        return {
            number1: Number.isFinite(n1) ? n1 : 0,
            number2: Number.isFinite(n2) ? n2 : 0
        };
    }

    // --- Utility: display result or error ---
    const resultSpan = document.getElementById('calculation-result');
    function showResult(value) {
        if (value === null) {
            resultSpan.textContent = 'Error';
        } else {
            // Show up to a reasonable number of decimal places (avoid long floats)
            if (Number.isFinite(value) && Math.floor(value) !== value) {
                resultSpan.textContent = parseFloat(value.toFixed(10)).toString();
            } else {
                resultSpan.textContent = String(value);
            }
        }
    }

    // --- Attach event listeners to buttons ---
    document.getElementById('add').addEventListener('click', function () {
        const { number1, number2 } = readInputs();
        const result = add(number1, number2);
        showResult(result);
    });

    document.getElementById('subtract').addEventListener('click', function () {
        const { number1, number2 } = readInputs();
        const result = subtract(number1, number2);
        showResult(result);
    });

    document.getElementById('multiply').addEventListener('click', function () {
        const { number1, number2 } = readInputs();
        const result = multiply(number1, number2);
        showResult(result);
    });

    document.getElementById('divide').addEventListener('click', function () {
        const { number1, number2 } = readInputs();
        const result = divide(number1, number2);
        if (result === null) {
            // division by zero
            resultSpan.textContent = 'Cannot divide by zero';
        } else {
            showResult(result);
        }
    });
});
