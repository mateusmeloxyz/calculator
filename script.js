function add(a,b){
    return a+b;
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