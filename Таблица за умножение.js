function multipleTable(number) {
    let num = Number(number);
    let sum = 0;

    for (let i = 1; i <= 10; i++) {
        sum = i * num;
        console.log(`${i} * ${num} = ${sum}`);
    }
}

multipleTable("8");