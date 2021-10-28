function stopWatch() {
    let startTime = Date.now();
    function getDelay() {
        let elapsedTime = Date.now() - startTime;
        console.log(elapsedTime);
    }
    return getDelay;
}

let timer = stopWatch();

for (let i = 0; i < 1000000; i++) {
    let foo = Math.random() * 10000;
}

timer();