const numbers = document.querySelectorAll(".number");
const currentNumber = document.querySelector(".currentNumber");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const negative = document.querySelector(".negative")
const percent = document.querySelector(".percent")

let mathSign
let previousNumber
let result

function displayNumbers(){
    if(currentNumber.innerHTML === "" && this.textContent === "0") return currentNumber.innerHTML ="0"
    if(currentNumber.innerHTML === "" && this.textContent === ".") return currentNumber.innerHTML ="0."
    if(currentNumber.innerHTML === "0" && this.textContent === ".") return currentNumber.innerHTML = "0."
    if(currentNumber.innerHTML === "0" && this.textContent === "0") return
    if(currentNumber.innerHTML === "0" && this.textContent !== "0") return currentNumber.innerHTML = this.textContent
    if(currentNumber.innerHTML.includes(".") && this.textContent === ".") return
    if(currentNumber.innerHTML.length > 8) return
    currentNumber.innerHTML += this.textContent
}

function clearButton(){
    currentNumber.innerHTML = "";
    previousNumber = ''
    mathSign = ''
}

function operate(){
    mathSign = this.textContent
    previousNumber = currentNumber.innerHTML
    currentNumber.innerHTML = "";
    if(mathSign !== "" && this.textContent !== ""){
        mathSign === this.textContent
    }
    if(mathSign !== ""){
        showResult()
    }
}

function showResult(){
    if(previousNumber === "" || currentNumber.innerHTML === "") return;

    let a = Number(previousNumber)
    let b = Number(currentNumber.innerHTML)
    let operator = mathSign
    
    switch(operator){
        case "+":
        result = a + b;
        break;
        case "-":
        result = a - b;
        break;
        case "x":
        result = a * b;
        break;
        case ":":
        result = a / b;
        break;
    }
    currentNumber.innerHTML = result;
    previousNumber = ""
    mathSign = ""
}

numbers.forEach(number => {
    number.addEventListener("click", displayNumbers)
})

operators.forEach(operator => {
    operator.addEventListener("click", operate)
})

clear.addEventListener("click", clearButton)

equals.addEventListener("click", showResult)

negative.addEventListener("click", () => {
    currentNumber.innerHTML = -currentNumber.innerHTML
})

percent.addEventListener("click", () => {
    currentNumber.innerHTML = (currentNumber.innerHTML / 100)
})


