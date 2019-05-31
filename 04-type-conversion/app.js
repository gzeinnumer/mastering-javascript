//todo 15

let val, val1, val2, val3, val4, val5, val6, val7;

//number
val = 123;
console.log(val);
console.log(typeof val);

//number to string
val1 = String(123);
console.log(val1);
console.log(typeof val1);
console.log(val1.length);

//number plus to string
val2 =String(5+5);
console.log(val2);
console.log(typeof val2);
console.log(val2.length);

//boolean to string
val3 = String(false);
console.log(val3);
console.log(typeof val3);
console.log(val3.length);

//date to string
val4 = String(new Date());
console.log(val4);
console.log(typeof val4);
console.log(val4.length);

// array to string
val5 = String([1,2,3,4,5]);
console.log(val5);
console.log(typeof val5);
console.log(val5.length);

//selain menggunakan String(param);
//kita juga bisa bisa pakai toString();

val6 = (5).toString();
val7 = (true).toString();

console.log(val6);
console.log(val6.length);
console.log(val7);
console.log(val7.length);