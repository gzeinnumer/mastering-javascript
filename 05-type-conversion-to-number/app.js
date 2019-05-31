let val;
//todo 17
//string
val = '5';
console.log(val);
console.log(typeof val);

//string to number
val = Number('5');
console.log(val);
console.log(typeof val);

//no decimal
val = Number('51.31');
console.log(val);
console.log(typeof val);
console.log(val.toFixed());

//boolean to number
val = Number(true);
console.log(val);

//parse int
val = parseInt('166');
console.log(val);

//parse fLoat
val = parseFloat('199.71');
console.log(val);

//plus data
const val1 = 6;
const val2 = 5;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);

//string and number
const val3 = String(6);
const val4 = 5;
const sum1 = val3 + val4;
console.log(sum1);
console.log(typeof sum1);

