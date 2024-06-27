window.addEventListener('load', bindEvents);

function bindEvents() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length - 1; i++) { // -1 to exclude the reset button
        buttons[i].addEventListener('click', printxorzero);
    }
    document.getElementById('resetButton').addEventListener('click', reset);
}

var flag = true;
var counter = 0;

function printxorzero() {
    if (this.innerText.trim().length == 0) {
        var buttonValue = flag ? "X" : "0";
        this.innerText = buttonValue;
        flag = !flag;
        counter++;
        if (counter >= 5) {
            if (isgameover()) {
                setTimeout(() => alert(buttonValue + ' wins!'), 100);
            }
        }
    }
}

function isgameover() {
    var buttons = document.getElementsByTagName('button');
    var values = Array.from(buttons).map(button => button.innerText.trim());
    
    // Check rows
    for (var i = 0; i <= 6; i += 3) {
        if (values[i] && values[i] === values[i + 1] && values[i] === values[i + 2]) {
            return true;
        }
    }
    
    // Check columns
    for (var i = 0; i < 3; i++) {
        if (values[i] && values[i] === values[i + 3] && values[i] === values[i + 6]) {
            return true;
        }
    }
    
    // Check diagonals
    if (values[0] && values[0] === values[4] && values[0] === values[8]) {
        return true;
    }
    if (values[2] && values[2] === values[4] && values[2] === values[6]) {
        return true;
    }
    
    return false;
}

function reset() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length - 1; i++) { // -1 to exclude the reset button
        buttons[i].innerText = '';
    }
    flag = true;
    counter = 0;
}
