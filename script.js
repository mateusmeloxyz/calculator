let displayValue = '0';
let currOp = '';
let num1 = '';
let num2 = '';

function begin() {
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    display.textContent = displayValue;
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
        if( e.target.textContent === '='){
            displayValue = operate(currOp, num1, displayValue);
        } else if(e.target.textContent === 'c'){
            clearDisplay();
        } else {
            currOp = e.target.textContent;
            num1 = displayValue;
            clearDisplay();
        }
        display.textContent = displayValue;
    })

}

begin();