// Loops in js

let p =[2,3,23,2,3,23,2]

// p.forEach((value,index,p)=> {
//     console.log(value, index , p)
    
// });

let obj ={
    a:1,
    b:2,
    c:3,
}

// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element,key)
//     }
// }

for (const iterator of p) {
    console.log(iterator)
}
