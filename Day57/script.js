let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     alert("I was clisked yes")
//     button.style.backgroundColor ="green"
//     document.querySelector(".box").innerHTML = "yah you are cliked and enjoy"
// })

// button.addEventListener("dblclick",()=>{
//     alert("your computer is hacked")
// })

// button.addEventListener("contextmenu",()=>
// {
//     alert("dont hack us right click")
// })

document.addEventListener("keydown",(e)=>
{
   console.log(e.key, e.keyCode)
})