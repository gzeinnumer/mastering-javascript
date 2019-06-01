//todo 25
const number =[54,10,7,89,99,54]; 
const number2 = new Array(43,23,12,5,78,6,45); 

const fruit = ['Apple', 'manggo', 'Cherri'];
const mix = [30,'Zein',undefined, null, {a:1, b:2}, new Date()];

console.log(number); //[54, 10, 7, 89, 99, 54]
console.log(number2); //[43, 23, 12, 5, 78, 6, 45]
console.log(fruit); //["Apple", "manggo", "Cherri"]
console.log(mix); //[30, "Zein", undefined, null, {…}, Fri May 31 2019 22:55:49 GMT+0700 (Western Indonesia Time)]

console.log(number.length); //6
console.log(number2.length); //7
console.log(fruit.length); //3
console.log(mix.length); //6

console.log(fruit[2]); ///Cherri
console.log(mix[4]); //{a: 1, b: 2}
console.log(mix[4].b); //2

//find index of value 
console.log(mix.indexOf(undefined)); //2

//mutating
//add to end >> tambah 1 di akhir
number.push(200); 
console.log(number); //[54, 10, 7, 89, 99, 54, 200]

//add to first >> tambah 1 di awal
number.unshift(300);
console.log(number); //[300, 54, 10, 7, 89, 99, 54, 200]

// take off from end >> hapus bagian akhir
number.pop();
console.log(number); //[300, 54, 10, 7, 89, 99, 54]

// take off from front >> hapus bagian awal
number.shift();
console.log(number); //[54, 10, 7, 89, 99, 54]

//hapus sesuai index hapus dari index 1 ke index 2
number.splice(1,2);
console.log(number); //[54, 89, 99, 54]

//membalikan index atau susunan array
//before
console.log(fruit[2]); //Cherri
//after

fruit.reverse();
console.log(fruit); //["Cherri", "manggo", "Apple"]
console.log(fruit[2]); //Apple


