function journey(input) {
    let budget = Number(input.shift());
    let seasson = input.shift();
    let price = 0;
    let destination = "";
    let place = "";

    switch (seasson) {
        case "summer":
            place = "Camp";
            if (budget <= 100) {
                destination = "Bulgaria";
                price = budget * 0.30;
            }
            else if (budget > 100 && budget <= 1000) {
                destination = "Balkans";
                price = budget * 0.40;
            }
            else if (budget > 1000) {
                destination = "Europe";
                price = budget * 0.90;
            }
            break;

        case "winter":
            place = "Hotel";
            if (budget <= 100) {
                destination = "Bulgaria";
                price = budget * 0.70;
            }
            else if (budget > 100 && budget <= 1000) {
                destination = "Balkans";
                price = budget * 0.80;
            }
            else if (budget > 1000) {
                destination = "Europe";
                price = budget * 0.90;
            }
            break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}

// journey(
//     [
//         "50",
//         "summer"
//     ]
// )

// journey(
//     [
//         "312",
//         "summer"
//     ]
// )

journey(
    [
        "678.53",
        "winter"
    ]
)