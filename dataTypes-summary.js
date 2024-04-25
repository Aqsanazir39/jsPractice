//# Primitive Datatype
// call by value

// 7 types : String , Number , Boolean , null = > empty not 0 , undefined , symbol , BigInt

const score = 100;
const temp = 100.3;
const userEmail = null;

const id = Symbol('1234');
const anotherId = Symbol('983');

console.log(anotherId === id);

const bigNumber = 823939978687698890n;

// Reference {Non primitive}

// Arrays
//Objects , functions


const heros = ["Aff" , "hhaaraaj" , "doga"];
const obj =
{
  name: "Aqsa",
  age: 22
}

function myFunction(){
  console.log("Hello");
}

console.log(typeof(heros));
console.log(typeof myFunction);
