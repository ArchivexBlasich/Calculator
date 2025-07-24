/*--------------------- Functions -------------------------------*/

function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return (b !== 0) ? a / b : "err";
}

function operate(a, b, operator) {
    let result;

    switch (operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "*":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;

        default:
            break;
    }

    return result;
}

/*----------------------- main ---------------------------- */
let firstOperand;
let operator;
let secondOperand;



console.log(operate(5, 6, "+"));
console.log(operate(5, 6, "-"));
console.log(operate(5, 6, "*"));
console.log(operate(5, 6, "/"));