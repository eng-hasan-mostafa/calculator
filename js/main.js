
function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function multiply(a, b) {
    return +a * +b;
}

function divide(a, b) {
    if(b == 0) return 'LOL';
    return +a / +b;
}

function operate(firstOperand, operator, secondOperand) {
    let result = null;
    switch(operator) {
        case '+':
            result = add(firstOperand, secondOperand);
            break;
        case '-':
            result = subtract(firstOperand, secondOperand);
            break;
        case '*':
            result = multiply(firstOperand, secondOperand);
            break;
        case '/':
             result = divide(firstOperand,secondOperand);
             break;
    }
    return result;
}

let firstOPerand = '';
let secondOPerand = '';
let operator = '';
let isFirstOperandTurn = true;

function updateDisplayScreenContent(content) {
    let displayScreen = document.querySelector('.display-screen');
    displayScreen.textContent = content;
}

let numberButtons = document.querySelectorAll('.number-btn');
numberButtons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let clickedDigit = e.target.value;
        let number = (isFirstOperandTurn? firstOPerand: secondOPerand);

        if(clickedDigit !== '.') {
            number += clickedDigit;
        }else if(firstOPerand && !number.includes('.')) {
            number += clickedDigit;
        }
        updateDisplayScreenContent(number);
        (isFirstOperandTurn?
         firstOPerand = number:
         secondOPerand = number
        );
    });
});

let operatorButtons = document.querySelectorAll('.operator-btn');
operatorButtons.forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        let value = e.target.value;
        if(value === 'clear') {
            resetVariables();
            updateDisplayScreenContent(''); 
        }else if(value === '=' && firstOPerand && secondOPerand) {
            let result  = operate(firstOPerand,operator,secondOPerand);
            resetVariables();
            firstOPerand = result;
            updateDisplayScreenContent(firstOPerand);
        }else if(value !== '=') {
            if(firstOPerand && !secondOPerand) { 
                operator = value;
                isFirstOperandTurn = false;
            }else if(firstOPerand && secondOPerand) {
                let result  = operate(firstOPerand,operator,secondOPerand);
                firstOPerand = result;
                operator = value;
                secondOPerand = '';
                updateDisplayScreenContent(firstOPerand);
            }
        } 
    })
})

function resetVariables() {
    firstOPerand = '';
    secondOPerand = '';
    operator = '';
    isFirstOperandTurn = true;
}

