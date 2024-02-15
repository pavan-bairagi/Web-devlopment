console.log("random background color and color ")

let boxes = document.querySelector(".container").children
console.log(boxes)

function getRandomcolor() {
   let value1 = Math.ceil(0 + Math.random()*255);
   let value2 = Math.ceil(0 + Math.random()*128);
   let value3 = Math.ceil(0 + Math.random()*0);
   return `rgb(${value1},${value2},${value3})`
}

Array.from(boxes).forEach(e=>{
    e.style.backgroundColor =getRandomcolor()
    e.style.color =getRandomcolor()
})