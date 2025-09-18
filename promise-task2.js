let step1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Step 1 done "), 1000);
});

step1
    .then(result => {
        console.log(result);
        return new Promise((resolve) => {
            setTimeout(() => resolve("Step 2 done "), 1000);
        });
    })
    .then(result => {
        console.log(result);
        return new Promise((resolve) => {
            setTimeout(() => resolve("Step 3 done "), 1000);
        });
    })
    .then(result => console.log(result))
    .finally(() => console.log(" All steps finished"));
