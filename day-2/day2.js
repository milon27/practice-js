//try/catch/finally-exception,error

// what is object?
//pen(type) -> red pen, blue pen
//human(type)-> jhon, mike
// Error (type)     -> string("wrong passowrd")
//Sucess (type)-> string("success loggin")


//red car
class Car {
    constructor(name, year) {
        this.name = name
        this.year = year
    }
}


const redCar = new Car("fkdkf", 34343)
const aCar = {
    name: "a name",
    year: 5050
}

if (redCar instanceof Error) {
    console.log("yes");
} else {
    console.log("no");
}


// function ckPassword() {

//     const oj = new Error("dfjdf")

//     const ok = {
//         message: "a success"
//     }



//     //console.log(1 / 0);
// }

//start 
// try {

//     ckPassword()//errro


// } catch (error) {
//     console.log(error.message)
// }



