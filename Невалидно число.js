function invalidNumber(number) {
    if (number >= 100 && number <= 200 || number == 0) {
        console.log("Valid number");
    }
    else {
        console.log("Invalid number");
    }
}

invalidNumber(0)