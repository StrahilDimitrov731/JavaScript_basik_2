function fishing(input) {
    let budget = Number(input.shift());
    let seasson = input.shift();
    let numberPeople = Number(input.shift());
    let price = 0;

    switch (seasson) {
        case "Spring":
            price = 3000;

            if (numberPeople <= 6) {
                price -= price * 0.10;
            }
            else if (numberPeople >= 7 && numberPeople <= 11) {
                price -= price * 0.15;
            }
            else if (numberPeople >= 12) {
                price -= price * 0.25;
            }

            if (numberPeople % 2 == 0) {
                price -= price * 0.05;
            }
            break;

        case "Summer":
            price = 4200;

            if (numberPeople <= 6) {
                price -= price * 0.10;
            }
            else if (numberPeople >= 7 && numberPeople <= 11) {
                price -= price * 0.15;
            }
            else if (numberPeople >= 12) {
                price -= price * 0.25;
            }

            if (numberPeople % 2 == 0) {
                price -= price * 0.05;
            }
            break;

        case "Autumn":
            price = 4200;

            if (numberPeople <= 6) {
                price -= price * 0.10;
            }
            else if (numberPeople >= 7 && numberPeople <= 11) {
                price -= price * 0.15;
            }
            else if (numberPeople >= 12) {
                price -= price * 0.25;
            }
            break;

        case "Winter":
            price = 2600;

            if (numberPeople <= 6) {
                price -= price * 0.10;
            }
            else if (numberPeople >= 7 && numberPeople <= 11) {
                price -= price * 0.15;
            }
            else if (numberPeople >= 12) {
                price -= price * 0.25;
            }

            if (numberPeople % 2 == 0) {
                price -= price * 0.05;
            }
            break;
    }

    if (budget >= price) {
        let leftMoney = budget - price;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    }
    else {
        let needMoney = price - budget;
        console.log(`Not enough money! You need ${needMoney.toFixed(2)} leva.`);
    }
}

fishing(
    [
        "3000",
        "Summer",
        "11"
    ]
)

console.log("--------------------");

fishing(
    [
        "3600",
        "Autumn",
        "6"
    ]
)

console.log("--------------------");

fishing(
    [
        "2000",
        "Winter",
        "13"
    ]
)