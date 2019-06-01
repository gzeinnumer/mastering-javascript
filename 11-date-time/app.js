//todo 29

let val;

const today = new Date();

val = today;
val = today.toString();
val = today.getFullYear();
val = today.getMonth(); //0-11
val = today.getDay();
val = today.getDate();
val = today.getTime(); //timestamp
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds(); 
val = today.getMilliseconds();
val = today.getTimezoneOffset();

console.log(val); //Sat Jun 01 2019 10:36:12 GMT+0700 (Western Indonesia Time)

let birthday = new Date('7-10-1997'); // tampa jam

birthday = new Date('7-10-1997 04:00:00'); // dengan jam

birthday = new Date('July 10 1997'); //format lain

birthday = new Date('7/10/1997'); // format lain

//menggai data per element
birthday.setDate(15);
birthday.setMonth(0); //0 january
birthday.setFullYear(1998);
birthday.setHours(5);
birthday.setMinutes(12);
birthday.setSeconds(50);
//Thu Jan 15 1998 05:12:50 GMT+0700 (Western Indonesia Time)

console.log(birthday);

