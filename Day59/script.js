// function getData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 2500);
//     })
// }

// console.log("Loading modules")

// console.log("Do something else")

// console.log("Load data");

// let data =getData()

// data.then((v)=>{
//     console.log(data)

//     console.log(`process data`);

//     console.log(`Task2`);
// })
// async function
// async function getData() {
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         resolve(455)
//        }, 3500); 
//     })
// }

// //async function main

// async function main() {
//     console.log("Loading modules")

// console.log("Do something else")

// console.log("Load data");

// let data = await getData()

//     console.log(data)

//     console.log(`process data`);

//     console.log(`Task2`)

// }

// main()

// console.log("Loading modules")

// console.log("Do something else")

// console.log("Load data");

// let data = await getData()

// data.then((v)=>{
//     console.log(data)

//     console.log(`process data`);

//     console.log(`Task2`);
// })




/* featch api

simulate gettting data from a server */



async function getData() {
    // let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data = await  x.json()
    // console.log(data)
    // return(data)
    let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data =  x.then(response => response.json())
      .then(json => console.log(json))

}

//async function main

async function main() {
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data");

    let data = await getData()

    console.log(data)

    console.log(`process data`);

    console.log(`Task2`)

}

main()
