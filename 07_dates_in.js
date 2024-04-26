console.log("go");

let myDate = new Date()
console.log(myDate.toString());

// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof(myDate));


// let myCreateDate = new Date(2023, 0 , 23);

let myCreateDate = new Date(2023, 0 , 23 , 4 , 6);
let myNewCreateDate = new Date("2034-11-14");

console.log(myCreateDate.toLocaleString());
console.log(myNewCreateDate.toLocaleDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
  weekday: "long"
})




