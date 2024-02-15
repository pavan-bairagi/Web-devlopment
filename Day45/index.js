// console.log("function")

function nice(name) {
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are  very nice!")
    console.log("Hey" + name + "you are veryvery nice!")
    console.log("Hey" + name + "you are veryveryvery nice!")
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are nice!")
    console.log("Hey" + name + "you are nice!")
}

nice("Pavan")

function sum(a,b) {
    console.log(a+b)
}

sum(122,44)

sum(9,44)


function sub(a,b){
    return a-b
}

result = sub(20,3)

console.log("The sub of these numbers:",result)

function mul(a,b,c=2) {
    return a*b*c
}

result = mul(2,2)
console.log("The sub of these numbers:",result)

const fun1 =(x)=>{
    console.log("i am an arrow function" ,x)
}

fun1(33);
fun1(333);