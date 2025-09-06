function cinema(input) {
    let typeProject = input.shift();
    let row = Number(input.shift());
    let col = Number(input.shift());
    let sum = 0;

    if (typeProject == "Premiere") {
        sum = row * col * 12;
    }
    else if (typeProject == "Normal") {
        sum = row * col * 7.50;
    }
    else if (typeProject == "Discount") {
        sum = row * col * 5;
    }

    console.log(`${sum.toFixed(2)} leva.`);
}

cinema(
    [
        "Premiere",
        "10",
        "12"
    ]
)