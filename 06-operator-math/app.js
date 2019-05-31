//todo 19
const val1 = 11;
const val2 = 22;

let val;

val = val1+val2; //33
val = val1*val2; //242
val = val1-val2; //11
val = val1/val2; //0.5
val = val1%val2; //11

//math object 
val = Math.PI; // 3.14
val = Math.E; //2.71
//bulatkan
val = Math.round(3.7); //4
//bulat ke atas
val = Math.ceil(2.7); //3
val = Math.ceil(2.4); //3
//bulat kebawah
val = Math.floor(2.6); //2
val = Math.floor(2.3); //2
//akar
val = Math.sqrt(64); //8
//min to plus
val = Math.abs(-5); //5
//pangkat
val= Math.pow(8,2); //64
//max min
val = Math.min(2,4,2,4,6,7,6,-4,3); //-4
val = Math.max(2,5,6,2,5,7,9,6); //9
//random
val = Math.random(); //hasilnya random 0 - tak hingga
val = Math.random()*50+1; // random dari 0 - 50
//gabungan
val = Math.floor(Math.random()*51);//hasil nya bulat
console.log(val);