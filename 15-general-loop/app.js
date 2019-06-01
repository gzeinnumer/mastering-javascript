//todo 38
//for
let arrayData = new Array();
for(let i=0; i<10; i++){
   if(i===2){
      arrayData.push(`Angka Kesukaan ku ${i}`)
      //untuk skip
      continue;
   }

   if(i===5){
      arrayData.push(`Looping Stop`);
      //untuk selesaikan For
      break;
   
   }
   arrayData.push(i); 
}
console.log(arrayData); 
//(10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//(6) [0, 1, "Angka Kesukaan ku 2", 3, 4, "Looping Stop"]

let arrayData2 = new Array();
let i=0;
while(i<10){
   
   arrayData2.push(i); 
   i++;
}
console.log(arrayData2); //(10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//
let arrayData3= new Array();
let i2=0;
do{
   arrayData3.push(i2); 
   i2++;
} while(i2<10);
console.log(arrayData3); //(10) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]