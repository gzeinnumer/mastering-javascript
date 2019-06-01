//todo 42
console.log(123);
window.console.log(123);

//alert('Hay');
//window.alert('Hay Windows');

//promt
//const input = prompt();
//alert(input);
//edittext dalam alert 

//confirm
//confirm('are you sure?(no if)');

//pakai if
// if(confirm('are you sure?')){
//    console.log('yes');
//    //alert('kamu memilih yes');
// } else{
//    console.log('no');
//    //alert('kamu memilih no');
// }

let val;

val = window.outerHeight; //tinggi window browser
val = window.outerWidth; // lebar window browser

//melihat detail dari object windows kita
val = window.location;

//melihat hsitori darimana dan siapa.
//hostory
//akses dulu google, lalu buat ini , setelah itu save 
val = window.history.go(-2);

console.log(val);
