var userClickedNumbers = [];
var userClickedNumbers2 = [];
var operator = ""
var number1 = 0
var number2 = 0
var func
var result = 0

$(".calculator-key").click(function (e) {
    var key = this.innerHTML;
    console.log(key)
    
    switch (key) {
        case "AC":
            number1 = 0;
            number2 = 0;
            userClickedNumbers = [0];
            userClickedNumbers2 = [0];
            operator = "";
            $(".calculator-output").html(0);
            break;
        case "+":
            operator = "+";
            func = sum;
             $(".calculator-output").html(operator);
            break;
        case "-":
            operator = "-";
            func = subtract;
            $(".calculator-output").html(operator);
            break;
        case "x":
            operator = "x";
            func = multiply;
            $(".calculator-output").html(operator);
            break;
        case "÷":
            operator = "÷";
            func = division;
            $(".calculator-output").html(operator);
            break;
        case "=":
            result = calculator(number1, number2, func);
            var numberOfDigits = getNumberOfDigits(result);
            if(numberOfDigits > 9) {
                $(".calculator-output").html(result).css("font-size", (56 - (numberOfDigits * 1.3)));    
            } else {
            $(".calculator-output").html(result);
            }
            break;
        case ".":
            if(operator === "") {
                userClickedNumbers.push(".")
                number1 = parseFloat(userClickedNumbers.join(""))
                $(".calculator-output").html(number1 + ".");
            } else {
                userClickedNumbers2.push(".")
                number2 = parseFloat(userClickedNumbers2.join(""))
                $(".calculator-output").html(number2 + ".");  
            }
          
            break;

        default:
            if(operator === "") {
                console.log("prvni cislo")
                userClickedNumbers.push(key);
                number1 = Number(userClickedNumbers.join(""))
                var numberOfDigits = getNumberOfDigits(number1);
                if(numberOfDigits > 9) {
                    $(".calculator-output").html(number1).css("font-size", (56 - (numberOfDigits * 1.3)));
                   } else {
                    $(".calculator-output").html(number1).css("font-size", 67);
                   }
            } else {
                console.log("druhe cislo")
                userClickedNumbers2.push(key)
                number2 = Number(userClickedNumbers2.join(""))
                var numberOfDigits = getNumberOfDigits(number2);
                if(numberOfDigits > 9) {
                    $(".calculator-output").html(number2).css("font-size", (56 - (numberOfDigits * 1.3)));
                   } else {
                    $(".calculator-output").html(number2).css("font-size", 67);
                   }
            }
            console.log("default")
            break;
    }
})

function sum(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

function getNumberOfDigits(number) {
    var noDotNumberStr  = String(number).replace(".", "")
    return noDotNumberStr.length
}