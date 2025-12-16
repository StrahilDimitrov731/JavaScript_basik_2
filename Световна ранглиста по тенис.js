function tenisRanklist(input) {
    let numberTurnirs = Number(input.shift());
    let startPoint = Number(input.shift());
    let averagePoint = 0;
    let turnirCounter = 0;
    let winnerCounter = 0;
    let sumPoint = 0;
    let percentWinner = 0;

    for (let i = 0; i < input.length; i++) {
        let currentTurnir = input[i];
        turnirCounter++;

        if (currentTurnir == "W") {
            startPoint += 2000;
            sumPoint += 2000;
            winnerCounter++;
        }
        else if (currentTurnir == "F") {
            startPoint += 1200;
            sumPoint += 1200;
        }
        else if (currentTurnir == "SF") {
            startPoint += 720;
            sumPoint += 720
        }
    }

    averagePoint = sumPoint / turnirCounter;
    percentWinner = (winnerCounter / turnirCounter) * 100;

    console.log(`Final points: ${startPoint}`);
    console.log(`Average point: ${averagePoint}`);
    console.log(`${percentWinner.toFixed(2)}%`);
}

// tenisRanklist(
//     [
//         "5",
//         "1400",
//         "F",
//         "SF",
//         "W",
//         "W",
//         "SF"
//     ]
// )

tenisRanklist(
    [
        "4",
        "750",
        "SF",
        "W",
        "SF",
        "W"
    ]
)