// let obj = {
//     a: 1,
//     b: "pavan",
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal;

// console.log(rabbit)


class Animal{
    constructor(name){
        this.name = name
        console.log("object is created...")
    }

    eats(){
        console.log("eating")
    }
    jumps(){
        console.log("jumping");   
    }

}

class lion extends Animal{
    constructor(name){
        super(name)
        console.log("object is created and he is lion...")
    }

}

let  a = new Animal("bunny");
console.log(a)

let l = new lion("sheru");
console.log(l);


