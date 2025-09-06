function tradingCommissions(input) {
    let town = input.shift();
    let salesvolume = Number(input.shift());
    let commisions = 0;

    switch (town) {
        case "Sofia":
            if (salesvolume >= 0 && salesvolume <= 500) {
                commisions = salesvolume * 0.05;
            }
            else if (salesvolume > 500 && salesvolume <= 1000) {
                commisions = salesvolume * 0.07;
            }
            else if (salesvolume > 1000 && salesvolume <= 10000) {
                commisions = salesvolume * 0.08;
            }
            else if (salesvolume > 10000) {
                commisions = salesvolume * 0.12;
            }
            else {
                console.log("Error");
            }
            break;

        case "Varna":
            if (salesvolume >= 0 && salesvolume <= 500) {
                commisions = salesvolume * 0.045;
            }
            else if (salesvolume > 500 && salesvolume <= 1000) {
                commisions = salesvolume * 0.075;
            }
            else if (salesvolume > 1000 && salesvolume <= 10000) {
                commisions = salesvolume * 0.10;
            }
            else if (salesvolume > 10000) {
                commisions = salesvolume * 0.13;
            }
            else {
                console.log("Error");
            }
            break;

        case "Plovdiv":
            if (salesvolume >= 0 && salesvolume <= 500) {
                commisions = salesvolume * 0.055;
            }
            else if (salesvolume > 500 && salesvolume <= 1000) {
                commisions = salesvolume * 0.08;
            }
            else if (salesvolume > 1000 && salesvolume <= 10000) {
                commisions = salesvolume * 0.12;
            }
            else if (salesvolume > 10000) {
                commisions = salesvolume * 0.145;
            }
            else {
                console.log("Error");
            }
            break;

        default:
            console.log("Error");
            break;
    }

    if (commisions != 0) {
        console.log(commisions.toFixed(2));
    }
}

tradingCommissions(
    [
        "Sofia",
        "-50"
    ]
)