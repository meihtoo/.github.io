let firstNumber = document.getElementById("firstNum");
let secondNumber = document.getElementById("secNum");

let operator = document.getElementById("calculateBtn");
let result = document.getElementById("result");

calcuateBtn.addEventListener("click",calculate);

function  calculate(){
    let num1 = firstNumber.value;
    let num2 = secondNumber.value;
    let answer = parseInt(num1) + parseInt(num2);
    result.innerText = answer;
}