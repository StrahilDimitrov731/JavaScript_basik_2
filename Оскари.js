function oscars(input) {
    let actorName = input.shift();
    let accademyPoint = Number(input.shift());

    for (let i = 1; i < input.length; i += 2) {
        let name = input[i];
        let point = Number(input[i + 1]);

        accademyPoint += (Number(name.length) * point) / 2;

        if (accademyPoint >= 1250.5) {
            console.log(`Congratulation, ${actorName} got a nominee for leading role with ${accademyPoint}`);
            break;
        }
    }

    if (accademyPoint < 1250.5) {
        let needPoint = 1250.5 - accademyPoint;
        console.log(`Sorry, ${actorName} you need ${needPoint.toFixed(1)} more!`);
    }
}

// oscars(
//     [
//         "Zahari Baharov",
//         "205",
//         "4",
//         "Johnny Depp",
//         "45",
//         "Will Smith",
//         "29",
//         "Jet Lee",
//         "10",
//         "Matthew Mcconaughey",
//         "39"
//     ]
// )

oscars(
    [
        "Sandra Bullock",
        "340",
        "5",
        "Robert De Niro",
        "50",
        "Julia Roberts",
        "40.5",
        "Daniel Day-Lewis",
        "39.4",
        "Nicolas Cage",
        "29.9",
        "Stoyanka Mutafova",
        "33"
    ]
)