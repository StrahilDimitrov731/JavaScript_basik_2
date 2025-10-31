function numberOperation(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let operation = input.shift();
    let result = 0;

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            if (result % 2 == 0) {
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${result} - even`);
            }
            else {
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${result} - odd`);
            }
            break;

        case "-":
            result = firstNumber - secondNumber;
            if (result % 2 == 0) {
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${result} - even`);
            }
            else {
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${result} - odd`);
            }
            break;

        case "*":
            result = firstNumber * secondNumber;
            if (result % 2 == 0) {
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${result} - even`);
            }
            else {
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${result} - odd`);
            }
            break;

        case "/":
            result = firstNumber / secondNumber;
            if (firstNumber == 0 || secondNumber == 0) {
                console.log("ERROR");
            }
            else {
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
            }
            break;

        case "%":
            result = firstNumber % secondNumber;
            if (firstNumber == 0 || secondNumber == 0) {
                console.log("ERROR");
            }
            else {
                console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);
            }
            break;
    }
}

// numberOperation(
//     [
//         "10",
//         "12",
//         "+"
//     ]
// )

numberOperation(
    [
        "9",
        "0",
        "%"
    ]
)