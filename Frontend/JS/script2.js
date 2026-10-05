console.log("A");// 1

setTimeout(() => {
    console.log("B");// before micro queue
}, 0);

Promise.resolve().then(() => {
    console.log("C"); //micro queue
    setTimeout(() => {
        console.log("D"); //macro queue
    }, 0);
});

Promise.resolve().then(() => {
    console.log("E");//micro queue
});

console.log("F"); //2