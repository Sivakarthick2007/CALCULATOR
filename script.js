// ===== BUTTON SOUND =====

const clickSound = new Audio(
    "data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YRAAAAAA/////wAAAP///wAAAP///wAAAP///w=="
);


// ===== ADD VALUE =====

function addValue(value) {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    document.getElementById("display").value += value;
}


// ===== CLEAR =====

function clearDisplay() {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    document.getElementById("display").value = "";
}


// ===== DELETE LAST =====

function deleteLast() {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    let display = document.getElementById("display");

    display.value = display.value.slice(0, -1);
}


// ===== CALCULATE =====

function calculate() {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    let display = document.getElementById("display");

    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}   // ===== KEYBOARD SUPPORT =====

document.addEventListener("keydown", function(event) {

    // Numbers
    if (event.key >= "0" && event.key <= "9") {
        addValue(event.key);
    }

    // Operators
    else if (event.key === "+") {
        addValue("+");
    }

    else if (event.key === "-") {
        addValue("-");
    }

    else if (event.key === "*") {
        addValue("*");
    }

    else if (event.key === "/") {
        event.preventDefault();
        addValue("/");
    }

    // Decimal
    else if (event.key === ".") {
        addValue(".");
    }

    // Percentage
    else if (event.key === "%") {
        addValue("%");
    }

    // Enter = Calculate
    else if (event.key === "Enter") {
        calculate();
    }

    // Backspace = Delete
    else if (event.key === "Backspace") {
        deleteLast();
    }

    // Escape = Clear
    else if (event.key === "Escape") {
        clearDisplay();
    }
});  
// ===== DARK / LIGHT MODE =====

function toggleTheme() {

    document.body.classList.toggle("dark");

}


// ===== THEME SELECTOR =====

function changeTheme(theme) {

    document.body.classList.remove(
        "blue",
        "purple",
        "green",
        "gold"
    );

    if (theme !== "default") {
        document.body.classList.add(theme);
    }

}function calculate() {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    let display = document.getElementById("display");

    try {

        let expression = display.value;

        expression = expression.replace(/sqrt\(/g, "Math.sqrt(");
        expression = expression.replace(/sin\(/g, "Math.sin(Math.PI/180*");
        expression = expression.replace(/cos\(/g, "Math.cos(Math.PI/180*");
        expression = expression.replace(/tan\(/g, "Math.tan(Math.PI/180*");
        expression = expression.replace(/log\(/g, "Math.log10(");
        expression = expression.replace(/ln\(/g, "Math.log(");

        // Automatically close brackets for sin/cos/tan
        let open = (expression.match(/\(/g) || []).length;
        let close = (expression.match(/\)/g) || []).length;

        expression += ")".repeat(Math.max(0, open - close));

        display.value = eval(expression);

        display.classList.remove("result-animation");
        void display.offsetWidth;
        display.classList.add("result-animation");

    } catch {

        display.value = "Error";
    }
}
    

// ===== SCIENTIFIC MODE =====

function toggleScientific() {

    const buttons = document.getElementById("scientificButtons");

    buttons.classList.toggle("show");
}

function scientific(type) {

    let display = document.getElementById("display");
    let value = parseFloat(display.value);

    if (isNaN(value)) {
        display.value = "Error";
        return;
    }

    if (type === "sqrt") {
        display.value = Math.sqrt(value);
    }

    else if (type === "square") {
        display.value = value * value;
    }

    else if (type === "sin") {
        display.value = Math.sin(value * Math.PI / 180);
    }

    else if (type === "cos") {
        display.value = Math.cos(value * Math.PI / 180);
    }

    else if (type === "tan") {
        display.value = Math.tan(value * Math.PI / 180);
    }

    else if (type === "log") {
        display.value = Math.log10(value);
    }

    else if (type === "ln") {
        display.value = Math.log(value);
    }
}
// ===== SCIENTIFIC INPUT =====

function addScientific(value) {

    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    document.getElementById("display").value += value;
}