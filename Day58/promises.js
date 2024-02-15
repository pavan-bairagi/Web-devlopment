// console.log(`This is Promise`);

// let prom1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("yes i am done")
//         resolve("pavan")
//     }, 3000);
// })

// prom1.then((a)=>{
//     console.log(a)
// })


console.log(`this is promises`);

let prom1 = new Promise((resolve,rejecct)=>{
    let a = Math.random();
    if(a<1){
        rejecct("no randoom number was not sopporting you")
    }
    else{
        setTimeout(() => {
            console.log('yes its working and i am happy with this');
            let color = document.body.style.backgroundColor ="yellow"
            resolve("everything is done and i am very happy with this ")        
        }, 1000);
    }

})

let prom2 = new Promise((resolve,rejecct)=>{
    let a = Math.random();
    if(a<1){
        rejecct("no randoom number was not sopporting you2")
    }
    else{
        setTimeout(() => {
            console.log('yes its working and i am happy with this2');
            let color = document.body.style.backgroundColor ="yellow"
            resolve("everything is done and i am very happy with this2 ")        
        }, 100);
    }

})
let prom3 = new Promise((resolve,rejecct)=>{
    let a = Math.random();
    if(a<1){
        rejecct("no randoom number was not sopporting you2")
    }
    else{
        setTimeout(() => {
            console.log('yes its working and i am happy with this2');
            let color = document.body.style.backgroundColor ="yellow"
            resolve("everything is done and i am very happy with this2 ")        
        }, 100);
    }

})
let prom4 = new Promise((resolve,rejecct)=>{
    let a = Math.random();
    if(a<1){
        rejecct("no randoom number was not sopporting you2")
    }
    else{
        setTimeout(() => {
            console.log('yes its working and i am happy with this2');
            let color = document.body.style.backgroundColor ="yellow"
            resolve("everything is done and i am very happy with this2 ")        
        }, 100);
    }

})
let prom5 = new Promise((resolve,rejecct)=>{
    let a = Math.random();
    if(a<1){
        rejecct("no randoom number was not sopporting you2")
    }
    else{
        setTimeout(() => {
            console.log('yes its working and i am happy with this2');
            let color = document.body.style.backgroundColor ="yellow"
            resolve("everything is done and i am very happy with this2 ")        
        }, 100);
    }

})
let prom6 = new Promise((resolve,rejecct)=>{
    let a = Math.random();
    if(a<1){
        rejecct("no randoom number was not sopporting you2")
    }
    else{
        setTimeout(() => {
            console.log('yes its working and i am happy with this2');
            let color = document.body.style.backgroundColor ="yellow"
            resolve("everything is done and i am very happy with this2 ")        
        }, 100);
    }

})
let prom7 = new Promise((resolve,rejecct)=>{
    let a = Math.random();
    if(a<1){
        rejecct("no randoom number was not sopporting you2")
    }
    else{
        setTimeout(() => {
            console.log('yes its working and i am happy with this2');
            let color = document.body.style.backgroundColor ="yellow"
            resolve("everything is done and i am very happy with this2 ")        
        }, 100);
    }

})


// prom1.then((a)=>{
//     console.log(a);  
// }).catch((err)=>{
//     console.log(err)
// })

// let p3 = Promise.all([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(err=>{
//     console.log(err);
    
// })

let p3 = Promise.race([prom1,prom2,prom3,prom4,prom5,prom6,prom7])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err);
    
})

