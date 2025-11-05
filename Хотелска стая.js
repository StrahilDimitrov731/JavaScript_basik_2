function hotelRoom(input) {
    let month = input.shift();
    let numberDays = Number(input.shift());
    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (month) {
        case "May":
        case "October":
            apartmentPrice = numberDays * 50;
            studioPrice = numberDays * 65;

            if (numberDays >= 7 && numberDays < 14) {
                studioPrice -= studioPrice * 0.05;
            }
            else if (numberDays >= 14) {
                studioPrice = studioPrice * 0.30;
                apartmentPrice = apartmentPrice * 0.10;
            }
            break;

        case "June":
        case " September":
            apartmentPrice = numberDays * 75.20;
            studioPrice = numberDays * 68.70;

            if (numberDays >= 14) {
                studioPrice -= studioPrice * 0.20;
                apartmentPrice -= apartmentPrice * 0.10;
            }
            break;

        case "July":
        case "August":
            apartmentPrice = numberDays * 76;
            studioPrice = numberDays * 77;

            if (numberDays >= 14) {
                apartmentPrice -= apartmentPrice * 0.10;
            }
            break;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(
    [
        "May",
        "15"
    ]
)