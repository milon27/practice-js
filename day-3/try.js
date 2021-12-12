const syncFun = () => {
    const c = new Date().getTime()//10
    //60 != 12,13,14,--60
    while (c + 50 != new Date().getTime()) {
        console.log("running ...");
    }
    console.log("done");
}

// console.log("start..");
// syncFun()
// console.log("after done...");
//-----------------------------------------------

const asyncFun = () => {
    const c = new Date().getTime()
    // while (c + 50 != new Date().getTime()) {
    //     console.log("running ...");
    // }
    setTimeout(() => {
        console.log("running ...");
    }, 50);
    console.log("done");
}

console.log("start..");
asyncFun()
console.log("after done...");