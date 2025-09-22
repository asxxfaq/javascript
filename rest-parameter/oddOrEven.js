function checkOddEven(...numbers) {
    numbers.forEach(num => {
        if (num % 2 === 0) {
            console.log(`${num} ➝ Even`);
        } else {
            console.log(`${num} ➝ Odd`);
        }
    });
}
checkOddEven(1, 2, 3, 4, 5, 6);
