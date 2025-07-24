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


/*--------------------- Events Handlers -------------------- */
function populateDisplay(e) {
    if (e.target.tagName === "BUTTON") {


        let btnNumbers = "1234567890"
        let btnPress = e.target.textContent;
        let display = document.querySelector(".display");

        console.log(btnPress);

        if (btnNumbers.includes(btnPress) && firstOperand !== "err") {
            (operator === "") ? firstOperand += btnPress : secondOperand += btnPress;
        } else {
            switch (btnPress) {
                case "+":
                case "-":
                case "*":
                case "/":
                    if (firstOperand !== "err") {
                        if (operator === "") {
                            if (firstOperand !== "") operator = btnPress;
                        } else {
                            if (secondOperand !== "") {
                                firstOperand = operate(parseInt(firstOperand), parseInt(secondOperand), operator);
                                if (firstOperand !== "err") {
                                    firstOperand = Math.round(firstOperand * 1000) / 1000;
                                    firstOperand = firstOperand.toString()
                                }
                                secondOperand = "";
                            }
                            operator = btnPress;
                        }
                    }
                    break;
                case "=":
                    if (firstOperand !== "err") {
                        if (operator !== "") {
                            if (secondOperand === "") {
                                if (auxOperand === "") auxOperand = firstOperand;
                                firstOperand = operate(parseInt(firstOperand), parseInt(auxOperand), operator).toString();
                            } else {
                                auxOperand = secondOperand;
                                firstOperand = operate(parseInt(firstOperand), parseInt(secondOperand), operator).toString();
                                secondOperand = "";
                            }
                        }
                    }
                    break;
                case "Clr":
                    firstOperand = "";
                    secondOperand = "";
                    operator = "";
                    break;

                default:
                    break;
            }
        }

        // Modify the Display

        if (secondOperand !== "") {
            display.textContent = secondOperand;
        } else {
            display.textContent = firstOperand;
        }
    }
}

/*----------------------- main ---------------------------- */
let firstOperand = "";
let operator = "";
let secondOperand = "";
let auxOperand = "";

// I know this is not the best, i should grab all the divs 
// in a div an add the event handler to that node
// but if i change that, all my css is going to mess up
let buttons = document.querySelector(".main-container");

buttons.addEventListener("click", populateDisplay);


console.log(operate(5, 6, "+"));
console.log(operate(5, 6, "-"));
console.log(operate(5, 6, "*"));
console.log(operate(5, 6, "/"));