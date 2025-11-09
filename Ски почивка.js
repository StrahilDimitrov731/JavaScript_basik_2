function skyHoliday(input) {
    let daysToStay = Number(input.shift());
    let typeRoom = input.shift();
    let evalution = input.shift();
    let price = 0;

    switch (typeRoom) {
        case "room for one person":
            price = (daysToStay - 1) * 18;
            break;

        case "apartment":
            price = (daysToStay - 1) * 25;
            if (daysToStay < 10) {
                price -= price * 0.30;
            }
            else if (daysToStay >= 10 && daysToStay <= 15) {
                price -= price * 0.35;
            }
            else if (daysToStay > 15) {
                price -= price * 0.50;
            }
            break;

        case "president apartment":
            price = (daysToStay - 1) * 35;
            if (daysToStay < 10) {
                price -= price * 0.10;
            }
            else if (daysToStay >= 10 && daysToStay <= 15) {
                price -= price * 0.15;
            }
            else if (daysToStay > 15) {
                price -= price * 0.20;
            }
            break;
    }

    if (evalution == "positive") {
        price += price * 0.25;
    }
    else if (evalution == "negative") {
        price -= price * 0.10;
    }

    console.log(price.toFixed(2));
}

skyHoliday(
    [
        "14",
        "apartment",
        "positive"
    ]
)

skyHoliday(
    [
        "30",
        "president apartment",
        "negative"
    ]
)

skyHoliday(
    [
        "12",
        "room for one person",
        "positive"
    ]
)