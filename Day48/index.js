// Exercise 10 

//Create a business name generator by combining list of objective and shop name and another word

//Adjective:
// Crazy 
// Amazing 
// Fire 


// Shop Name:
// Engine 
// Foods
// Garments


// Another word:
// Bros 
// Limited 
// Hub

// let a = "crazy"
// let b ="amazing"
// let c = "engine"
// let d = "foods"
// let e = "garments"
// let f = "bros"
// let g = "limited"
// let h = "hub"

// console.log(a.concat(b),b.concat(c),e.concat(f))
  // let generat first
  let rand = Math.random()
  let first , second ,third;


  if(rand<0.33){
      first="Crazy"
  }
  else if(rand<0.66 && rand>=0.33){
      first="Amazing"
  }
  else{
      first="Fire"
  }

  // let generat second
  rand = Math.random()
   if(rand<0.33){
      second="Engine"
  }
  else if(rand<0.66 && rand>=0.33){
      second="Foods"
  }
  else{
      second="Garments"
  }
  //lets generate third
  rand = Math.random()
  if(rand<0.33){
      third="Bros"
  }
  else if(rand<0.66 && rand>=0.33){
      third="Limited"
  }
  else{
      third="Hub"
  }

  console.log(`${first} ${second} ${third}`)