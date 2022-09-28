let displayValue = '';
let acc = 0;
let currOp = '+';
let num1 = '';
let num2 = '';

function begin() {
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = ''
    display.textContent = displayValue;
}

function clearAcc() {
    acc = 0;
}

function setDisplay(val) {
    displayValue = val;
}

function updateDisplay() {
    display.textContent = displayValue;
}

function setCurrOp(op) {
    currOp = op;
}

function resetCurrOp() {
    setCurrOp('+');
}

function clearAll() {
    clearAcc();
    clearDisplay();
}

function add(a,b){
    return +a + +b;
}

function sub(a,b){
    return a-b;
}

function prod(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function operate(op,a,b){
    switch(op){
        case '+':
            return add(a,b);
            break;
        case '-':
            return sub(a,b);
            break;
        case '*':
        case 'x':
        case 'X':
            return prod(a,b);
            break;
        case '/':
            return div(a,b);
            break;
        default:
            return 'err';
            break;
    }

    return 'err';
}

const numberKeys = document.getElementById("number-keys");
const funcKeys = document.getElementById("function-keys");

const display = document.getElementById("display")

for (const numKey of numberKeys.children ) {
    numKey.addEventListener("click", (e) => {
        displayValue = displayValue + e.target.textContent;
        display.textContent = displayValue;
    })
}

for (const funcKey of funcKeys.children ) {
    funcKey.addEventListener("click", (e) => {
        if( e.target.textContent === 'c'){
            clearAll();
            clearDisplay();
        } else if(e.target.textContent === '='){
            acc = operate(currOp, acc, displayValue);
            displayValue = acc;
            clearAcc();
            resetCurrOp();
        } else {
            acc = operate(currOp, acc, displayValue);
            setCurrOp(e.target.textContent);
            setDisplay(acc);
            clearDisplay();
        }
        display.textContent = displayValue;
    })

}

begin();