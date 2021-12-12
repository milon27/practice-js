const getUsers = (callback) => {
    let users = []

    //asking server to get our users data.
    setTimeout(() => {
        users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        callback(users)
    }, 500);
}

const getCars = (callback) => {
    let cars = []

    //asking server to get our cars data.
    setTimeout(() => {
        cars = ['car1', 'car2']
        callback(cars)
    }, 500);
}

console.log("start");//start
getUsers(function (newusers) {
    console.log('some code', newusers);
    getCars(function (newcars) {
        console.log(newcars);
        console.log('done');
    })
})




//some data on our server. [10 user]
// function getUsers() {//10 s.

// }
// _10users=undefined
// const _10users = getUsers()//10s.

// console.log(_10users);//undefined