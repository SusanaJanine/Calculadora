let display = document.getElementById("display");

function add(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function getValue() {
    return eval(display.value);
}

function squareRoot() {
    try {
        display.value = Math.sqrt(getValue());
    } catch {
        display.value = "Error";
    }
}

function power() {
    try {
        display.value = Math.pow(getValue(), 2);
    } catch {
        display.value = "Error";
    }
}

function sin() {
    try {
        display.value = Math.sin(getValue() * Math.PI / 180);
    } catch {
        display.value = "Error";
    }
}

function cos() {
    try {
        display.value = Math.cos(getValue() * Math.PI / 180);
    } catch {
        display.value = "Error";
    }
}

function tan() {
    try {
        display.value = Math.tan(getValue() * Math.PI / 180);
    } catch {
        display.value = "Error";
    }
}

function log() {
    try {
        display.value = Math.log10(getValue());
    } catch {
        display.value = "Error";
    }
}