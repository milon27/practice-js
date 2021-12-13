// array.forEach(element => {

// });

const arr = [1, 2, 3, 4, 5]
// arr.forEach(item => {
//     console.log(item);
// })\





// const ourForEach = (arr, callback) => {
//     for (const i of arr) {
//         callback(i)
//     }
// }

// ourForEach(arr, function (item) {
//     console.log("our foeach value: ", item);
// })



// const ourForEach = (arr, callback) => {
//     for (const i of arr) {
//         callback(i)
//     }
// }

//[1,2,3,4,5]
function ourMap(arr, callback) {
    const tempArr = []
    for (let i of arr) {
        const retuedvalue = callback(i) //2,2,3,4,5
        tempArr.push(retuedvalue)
    }
    return tempArr
}

const arrrrryu = ourMap(arr, function (item) {
    if (item === 1) {
        return item * 2;//2
    }
    return item;
})