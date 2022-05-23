let lastAction = 1;
let lastNum = 0;
let reset = false;
let result  = 0;

function buttonPress(num) {

    const display = document.getElementById('display');
   
    if (display.value == '0') {
        if (num >= 0 && num <=9) {
            display.value = num;
            reset = false;
            return;
        }
    }
    
    
    switch (num) {
        case "CE":
            result = display.value.slice(0, -1);
            display.value = result;
            break;
        case "AC":
            display.value = '';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 0:
            if (reset) {
                display.value = num;
                
            }else{
                display.value +=num;
            }
            reset = false;
            break;
        case '.':
            let dot = display.value.indexOf('.');
            if (dot == -1) {
                display.value += num;
            }
            break;
        case '+':
            lastNum = display.value;
            lastAction = num;
            display.value = lastNum;
            reset = true;
            break;
        case '-':
            lastNum = display.value;
            lastAction = num;
            display.value = lastNum;
            reset = true;
            break;
        case '*':
            lastNum = display.value;
            lastAction = num;
            display.value = lastNum;
            reset = true;
            break;
        case '/':
            lastNum = display.value;
            lastAction = num;
            display.value = lastNum;
            reset = true;
            break;
        case 'sqrt':
            lastNum = display.value;
            lastAction = num;
            display.value = lastNum;
            result = Math.sqrt(parseFloat(display.value));
            display.value = parseFloat(result.toPrecision(12));
            reset = true;
            break;
        case '=':
            switch (lastAction) {
                case "+":
                    result = parseFloat(lastNum) + parseFloat(display.value);
                    display.value = parseFloat(result.toPrecision(12));
                    break;
                case "-":
                    result = parseFloat(lastNum) - parseFloat(display.value);
                    display.value = parseFloat(result.toPrecision(12));
                    break;
                case "*":
                    result = parseFloat(lastNum) * parseFloat(display.value);
                    display.value = parseFloat(result.toPrecision(12));
                    break;
                case "/":
                    result = parseFloat(lastNum) / parseFloat(display.value);
                    display.value = parseFloat(result.toPrecision(12));
                    break;
            }
            lastAction = 0;
            reset = true;
            break;
        case -1:
            display.value *= num;
            break;
    }

    
}