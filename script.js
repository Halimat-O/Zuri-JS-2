var operator= prompt("Enter choice +, -, *, /")
console.log ('Arithmetic Calculator');
var num1 = parseInt(prompt("Enter first number"))
var num2 = parseInt(prompt("Enter second number"))

let result;

if (operator == '+' ) {
    result = num1 + num2;   
} 

else if (operator == '-' ) {
    result  = num1 - num2;
}

else if (operator == '*' ) {
    result  = num1 * num2;
}

else if (operator == '/' ) {
    result  = num1 / num2;
} 

alert (result);