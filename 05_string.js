const names = "aqsa";

const repoCount = 45;

console.log(`Hello my name is ${names} and my repo count ${repoCount}`); //string enterPolation


const gameName = new String ('aqsa','com');

console.log(gameName[0]);

console.log(gameName.length);

console.log(gameName.__proto__);

console.log(gameName.toUpperCase());


const newString =  gameName.substring(0, 4);
console.log(newString);



const anotherString = gameName.slice(-2, 4);
console.log(anotherString);

const newStringOne = "  aqsa "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com";
console.log(url.replace('com','9'));

console.log(url.includes('bbdnn'));

console.log(gameName.split('-'));