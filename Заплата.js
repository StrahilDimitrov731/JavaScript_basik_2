function salary(input) {
    let numberOpenTabs = Number(input.shift());
    let salarySum = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let currentTab = input[i];

        if (currentTab == "Facebook") {
            salarySum -= 150;
        }
        else if (currentTab == "Instagram") {
            salarySum -= 100;
        }
        else if (currentTab == "Reddit") {
            salarySum -= 50;
        }

        if (salarySum <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }

    if (salarySum > 0) {
        console.log(salarySum);
    }
}

// salary(
//     [
//         "10",
//         "750",
//         "Facebook",
//         "Dev.bg",
//         "Instagram",
//         "Facebook",
//         "Reddit",
//         "Facebook",
//         "Facebook"
//     ]
// )

salary(
    [
        "3",
        "500",
        "Facebook",
        "Stackoverflow.com",
        "softuni.bg"
    ]
)