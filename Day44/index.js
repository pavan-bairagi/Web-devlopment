console.log("loops")


let a = 1;

for (let i = 0; i <100; i++) {
    console.log(a +i);
    
}

let p = 3;
for (let j =1; j <200; j++)
{
    console.log(p +j);
}


let obj ={
    name:"pavan",
    role: "programer",
    company:"ap-techo"
}

for (const key in obj) {
        const element = obj[key];
        console.log(key, element)
        
    }

for (const key in obj) {
    console.log(key)
}
for (const p of "pavan") {
    console.log(p)
}

let q = 0;
while (q <6) {
    console.log(q)
    q++;
}

let s = 0;
do {
   console.log(s)
   s++; 
} while (s<7);