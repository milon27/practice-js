// ["str",1,null]
//[{name:null},{name:"null"},{name:""}]
//{id:1,name:"",dept:"cse"}

//1. clean obj.
//2.  validateField:

//t1. write a funciton that take an array and return true if all the element inside array are valid/ if not -> false

// const arrrr = [1, 2, null, undefined]
// // const arrrr2 = [1, 2, 3]

// function validate(arr) {
//     const newarr = arr.filter(item => {
//         if (item === -1 || item == undefined || item == null) {
//             return false;
//         } else {
//             return true;
//         }
//     })
//     // newarr=> [1,2], [1,2,3]
//     if (arr.length === newarr.length) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let str = ""

// const obj = {
//     name: "jhon"
// }

// str = JSON.stringify(obj)
// console.log(str);

// console.log(JSON.parse(str));

// const stu = { id: 1, name: "", dept: "cse" }


// function ckObject(obj) {
//     const value = Object.keys(stu)
//     let isValid = false;

//     for (let i = 0; i < value.length; i++) {
//         const key = value[i]
//         const item = obj[key]//1,"","cse"

//         if (item === "" || item === undefined || item === null) {
//             isValid = false;
//             console.log(" if block", item);
//             return isValid
//         } else {
//             console.log(" else block", item);
//             isValid = true;
//         }
//     }

//     return isValid;
// }

// console.log(ckObject(stu));

// // how to access property from a object using variable.
// // const abc = { a: 1 }
// // // console.log(abc.a);
// // const myvar = "a"
// // console.log(abc[myvar]);
// // console.log(abc.myvar);//


// api



//server

// [post1, post2]
// [img1, img2, img3]

//client(browser,mobile app)-> http request(GET,PUT,POST,DELETE)[CRUD] -> server

//API -> application interface(door)
// 1. GET
// 2. end point(url) // [domain.com]/post
// 2. end point(url) // [domain.com]/img

//server -> response ->client