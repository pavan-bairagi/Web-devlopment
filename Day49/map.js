//map() 

let arr = [1,12,5,7,11];

// let newarr =[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)
// }

let newarr = arr.map((e,index,arr)=>{
    return e**2
})


console.log(newarr)


//Filter()

const greaterthanseven = (e)=>{
    if(e>7){
        return true
    }
    else{
        return false
    }
}

console.log(arr.filter(greaterthanseven))


let arr2 =[1,2,3,4,5,6,7]

const red =(a , b)=>{
    return a*b
}

console.log(arr2.reduce(red))