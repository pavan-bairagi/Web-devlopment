console.log("string in js")

let p ="pavan";
console.log(p)
console.log(p[0])
console.log(p[1])
console.log(p[2])
console.log(p[3])
console.log(p[4])

console.log(p.length)

let p_name ="pavan";
let friend ="anamika";
console.log("His name is  "  +  p_name  +  " and his friend name is "  + friend)

// tamplate literal syntax

console.log(`His name is ${p_name} and his friend name is ${friend}`)

// let a = 'pav"an'

// console.log(a)

let b = "Shivam";
console.log(b.toUpperCase())
console.log(b.toLocaleLowerCase())
console.log(b.length)

// string slicing in js

console.log(b.slice(0,4))
console.log(b.slice(0,5))
console.log(b.slice(0))
console.log(b.slice(0,6))

//  string replace in js

console.log(b.replace("Shivam","boss"))
console.log(b)

// cooncatination in js
// string is immutable

// functions in string
console.log(b.indexOf("h"))
console.log(b.charAt(2))
console.log(b.concat(p,"ram"))
console.log(b.charCodeAt(1,2))