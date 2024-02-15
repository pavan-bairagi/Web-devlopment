console.log("pavan is hacker")
console.log("aman is hacker")

//aysinc-crons function
setTimeout(() => {
    console.log("i am inside setimeout")
}, 3000);

setTimeout(() => {
    console.log("i am inside setimeout2")
}, 0);

console.log("the end")


// //callback function

// const callback = (arg) => {
//     console.log(arg)
// }

// const loadScript = (src, callback) => {
//     let sc = document.createElement("script")
//     sc.src = src;
//     sc.onload = callback("Pavanbairagi")
//     document.head.append(sc)
// }

// loadScript("script.js",callback)

const fn = ()=>{
    console.log("nothind")
}


const callback =(arg,fn)=>{
    console.log(arg)
    fn()
}

const loadScript =(src,callback)=>{
    let sc = document.createElement("script");

    sc.src =src;

    sc.onload = callback("pavan is very good boy and i have meet and i also know he is great presonalty ");
    document.head.append(src)

}

loadScript("",callback ,fn)


