
//operator functions with input x and y
function add (x ,y) {
    return x + y;
}

function subtract (x, y) {
    return x - y
}

function multiply (x, y) {
    return Number((x * y ).toPrecision(8));    
}

function divide (x, y) {
    if(y == 0) {
        return "Please don't hurt me";
    }
    return Number((x / y ).toPrecision(8));
}

function operate (operator, x, y) {
    let result;
    if(operator == 'add') {
        result = add(Number(firstOperand), Number(displayValue));
        display.textContent = result;   
    } else if(operator == 'subtract') {
        result = subtract(Number(firstOperand), Number(displayValue));
        display.textContent = result;   
    } else if(operator == 'multiply') {
        result = multiply(Number(firstOperand), Number(displayValue));
        display.textContent = result;   
    } else if(operator == 'divide') {
        result = divide(Number(firstOperand), Number(displayValue));
        display.textContent = result;   
    }
    displayValue = result;
    currentOperator = undefined;
}

const display = document.querySelector('#display');
const operands = document.querySelectorAll('.operand');
const clear = document.querySelector('#clearbtn');
const operators = document.querySelectorAll('.operator');
const equalSign = document.querySelector('#operate');
let displayValue = 0;
let firstOperand;
let currentOperator;

//add listener to each 'operand' button that then adds its id to the div. If the display value is undefined, 
operands.forEach((number) => {
    number.addEventListener('click', () => {
        console.log(number.id);
        if(displayValue == 0) {
            display.textContent = '';
        }
        display.textContent += number.value;
        //updates the display value everytime an operand is pressed
        displayValue = display.textContent;
    });
});

clear.addEventListener ('click', () => {
    displayValue = 0;
    display.textContent = 0;
})

operators.forEach((sign) => {
    sign.addEventListener('click', () => {
        if(currentOperator) {
            operate(currentOperator, firstOperand, displayValue); //executes the operate function if more than one operator is selected
        }
        firstOperand = displayValue;
        displayValue = 0; //ensures that after an operator is selected, the display clears when the next number is selected
        currentOperator = sign.id;
    })
});

equalSign.addEventListener('click', () => {
    operate(currentOperator, firstOperand, displayValue);
})
