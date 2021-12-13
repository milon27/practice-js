//promise has 1 parameter(callback)
//callback of promise has 2 params.


function getUser() {
    let error = false;

    const prom = new Promise(function (resolve, reject) {
        if (error == true) {
            reject("no internet connection!")
        } else {
            resolve("we are successful")
        }
    })
    return prom
}

//ck the promise is rejecting or resolving
// getUser().then(function (bool) {
//     console.log("we are resolved.");
// }).catch(function (err) {
//     console.log("we are rejected.", err);
// })


// async await

// async function ourCode() {
//     try {
//         const value = await getUser()
//         console.log("sucess resolved.", value);
//     } catch (e) {
//         console.log("reject....");
//     }
// }

const ourCode = async () => {
    try {
        const value = await getUser()
        console.log("sucess resolved.", value);
    } catch (e) {
        console.log("reject....");
    }
}

ourCode()






