//todo 21

const firstName = 'M. Fadli';
const lastName = 'Zein';
const age = 22;
const phar = 'Hello, my name is '+firstName+' '+lastName+' and i am '+age;

let val;

val = firstName +' '+ lastName + ' '+ age; //M. Fadli Zein 22 

val = 'Zein'; //Zein
val += 'Zein'; //ZeinZein

val = 'i can\'t'; //i can't
val = "i can't"; //i can't

val =firstName.concat(' ', lastName, age); //M. Fadli Zein 22
val = firstName.toUpperCase(); //M. FADLI
val = firstName.toLowerCase(); // m. fadli

val =firstName[3]; // F
val = firstName.indexOf('a'); //4 index ke empat

val = firstName.charAt(4); //a index ada di index ke 4

val = firstName.charAt(firstName.length-1); //i last alphabet in first name

val = firstName.substring(0,4); // M. F >> dari 0 sampai sebelum 4

val = firstName.slice(0, 4); // M. F >> dari 0 sampai sebelum 4
val = firstName.slice(-3); //dli >> 3 huruf terakhir

//memisahkan setiap spasi nya
val = phar.split(' '); 
//pisahkan dengan spaci atau koma juga bisa, - juga bisa
//["Hello,", "my", "name", "is", "M.", "Fadli", "Zein", "and", "i", "am", "22"]

// 0: "Hello,"
// 1: "my"
// 2: "name"
// 3: "is"
// 4: "M."
// 5: "Fadli"
// 6: "Zein"
// 7: "and"
// 8: "i"
// 9: "am"
// 10: "22"
// length: 11

const val1 = val[1]; //my

val = phar.replace('Hello', 'Hay'); //ganti Hello jadi Hay

//include 
val = phar.includes('Hello'); // true
val = phar.includes('hy'); // false
//karna hy tidak ada dalam phar mangkanya value nya false, sementara Hello ada, 

console.log(val);