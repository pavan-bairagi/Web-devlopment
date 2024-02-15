function createCard(title,cName,views,monthsold,duration,thumbnail) {
let viewstr
if(views>10000000){
   viewstr = views/10000 +"k"
}
else if (views>10000000){
    viewstr = views/1000000 +"M"
}
else{
    viewstr = views/1000 +"k"
}

let html =`   <div class="card">
<div class="img"><img src="${thumbnail}" alt=""></div> 
<div class="capsule">${duration}</div>
 <div class="text">
     <a href="">${title}</a>
     <p>${cName}  ${viewstr} views ${monthsold} months ago</p>
 </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html

}
createCard("Introduction to Backend  |  Sigma web Dev video #2 ","CodewithHarry",727000, 7,"31:22","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

