function newHouse(input) {
    let typeFlower = input.shift();
    let quantityFlower = Number(input.shift());
    let budget = Number(input.shift());
    let price = 0;

    if (typeFlower == "Roses") {
        price = quantityFlower * 5;
        if (quantityFlower > 80) {
            price -= price * 0.10;
        }
    }
    else if (typeFlower == "Dahlias") {
        price = quantityFlower * 3.80;
        if (quantityFlower > 90) {
            price -= price * 0.15;
        }
    }
    else if (typeFlower == "Tulips") {
        price = quantityFlower * 2.80;
        if (quantityFlower > 80) {
            price -= price * 0.15;
        }
    }
    else if (typeFlower == "Narcissus") {
        price = quantityFlower * 3;
        if (quantityFlower < 120) {
            price += price * 0.15;
        }
    }
    else if (typeFlower == "Gladiolus") {
        price = quantityFlower * 2.50;
        if (quantityFlower < 80) {
            price += price * 0.20;
        }
    }

    if(budget >= price){
        let leftPrice = budget - price;
        console.log(`Hey, you have a great garden with ${quantityFlower} ${typeFlower} and ${leftPrice.toFixed(2)} leva left.`);
    }
    else{
        let needPrice = price - budget;
        console.log(`Not enough money, you need ${needPrice.toFixed(2)} leva more.`);
    }
}

newHouse(
    [
        "Tulips",
        "88",
        "260"
    ]
)