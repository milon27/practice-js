// class Student {
//     constructor(name) {//function
//         his.name = name//property
//     }
//     //funciton
//     takeCourse() {

//     }
//     printInfo() {
//         console.log(this.name + " .");
//     }
// }

// const jhon = new Student("jhon")
// jhon.printInfo()






function validateObject(obj) {
    let isValidName = false
    let isValidId = false
    let isValidDept = false

    if (obj.name === "" || obj.name === -1 || obj.name === null || obj.name === undefined) {
        isValidName = false
    } else {
        isValidName = true
    }

    if (obj.id === "" || obj.id === -1 || obj.id === null || obj.id === undefined) {
        isValidId = false
    } else {
        isValidId = true
    }

    if (obj.dept === "" || obj.dept === -1 || obj.dept === null || obj.dept === undefined) {
        isValidDept = false
    } else {
        isValidDept = true
    }

    return {
        isValidName,
        isValidId,
        isValidDept
    }

}


// push on store array if all the property are valid of those obj.
const store = []
//name, id, dept
const _1st_input = { name: "jhon", id: null, dept: "" }
const _2st_input = { name: "lucy", id: -1, dept: undefined }
const _3rd_input = { name: "rocky", id: 1, dept: "scricen" }

//validation
for (let i = 1; i <= 3; i++) {
    let result = {}

    if (i === 1) {
        result = validateObject(_1st_input)
    }
    else if (i === 2) {
        result = validateObject(_2st_input)
    }
    else {
        result = validateObject(_3rd_input)
    }

    const obj = result
    console.log(obj);
}


store.push(_1st_input, _2st_input, _3rd_input)



















