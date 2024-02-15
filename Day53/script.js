console.log("pavan")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor ="red"

document.getElementById("red").style.backgroundColor ="red"

//first box
document.querySelector(".box").style.backgroundColor ="green";

// if we need all

// document.querySelectorAll(".box").style.backgroundColor ="green";

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor ="green"
})