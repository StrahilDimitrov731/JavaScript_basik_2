function trekkingMania(input) {
    let numberGroup = Number(input.shift());
    let allPeople = 0;
    let musalaPeople = 0;
    let monblanPeople = 0;
    let kilimanjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;
    let percentMusala = 0;
    let percentMonblan = 0;
    let percentKilimanjaro = 0;
    let percentK2 = 0;
    let percentEverest = 0;

    for (let i = 0; i < input.length; i++) {
        let currentGroup = Number(input[i]);
        allPeople += currentGroup;

        if (currentGroup <= 5) {
            musalaPeople += currentGroup;
        }
        else if (currentGroup >= 6 && currentGroup <= 12) {
            monblanPeople += currentGroup;
        }
        else if (currentGroup >= 13 && currentGroup <= 25) {
            kilimanjaroPeople += currentGroup;
        }
        else if (currentGroup >= 26 && currentGroup <= 40) {
            k2People += currentGroup;
        }
        else if (currentGroup >= 41) {
            everestPeople += currentGroup;
        }
    }

    percentMusala = musalaPeople / allPeople * 100;
    percentMonblan = monblanPeople / allPeople * 100;
    percentKilimanjaro = kilimanjaroPeople / allPeople * 100;
    percentK2 = k2People / allPeople * 100;
    percentEverest = everestPeople / allPeople * 100;

    console.log(`${percentMusala.toFixed(2)}%`);
    console.log(`${percentMonblan.toFixed(2)}%`);
    console.log(`${percentKilimanjaro.toFixed(2)}%`);
    console.log(`${percentK2.toFixed(2)}%`);
    console.log(`${percentEverest.toFixed(2)}%`);
}

trekkingMania
    (
        ["10",
            "10",
            "5",
            "1",
            "100",
            "12",
            "26",
            "17",
            "37",
            "40",
            "78"
        ]
    )