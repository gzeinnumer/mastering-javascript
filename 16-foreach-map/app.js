//todo 40
const car = ['Honda','Suzuki','Toyota','Ford'];

const arrayData = new Array();
for(let i=0; i<car.length; i++){
   arrayData.push(i +' '+ car[i]);  
} 
console.log(arrayData ); //(4) ["0 Honda", "1 Suzuki", "2 Toyota", "3 Ford"]


const car1 = ['Honda','Suzuki','Toyota','Ford'];

//denga foreach
car1.forEach(function(car){
   console.log(car);
}); 
// Honda
// app.js:14 Suzuki
// app.js:14 Toyota
// app.js:14 Ford


const car2 = ['Honda','Suzuki','Toyota','Ford'];

car2.forEach(function(car, index){
   console.log(`${index}:${car}`);
});
// 0:Honda
// app.js:21 1:Suzuki
// app.js:21 2:Toyota
// app.js:21 3:Ford

//foreach
const car3 = ['Honda','Suzuki','Toyota','Ford'];

car3.forEach(function(car, index, array){
   console.log(`${index}:${car}`);
   console.log(array);
});
// 0:Honda
// Honda,Suzuki,Toyota,Ford
// 1:Suzuki
// Honda,Suzuki,Toyota,Ford
// 2:Toyota
// Honda,Suzuki,Toyota,Ford
// 3:Ford
// Honda,Suzuki,Toyota,Ford

//MAP
const users=[
   {id:1, name:'Zein'},
   {id:2, name:'Fadli'},
   {id:3, name:'Pai'},
   {id:4, name:'M.'},
];
//contant tidak bisa di ubahm tapi bisa di ubah jika pakai object
const ids = users.map(function(user){
   return user.id;
});
console.log(ids); //(4) [1, 2, 3, 4]

const user2 = {
   fName: 'M. Fadli',
   lName: 'Zein',
   age: 22
};
//menampilkan key ya dan isi nya
for(let i in user2){
   console.log(`${i}: ${user2[i]}`);
}
//hasil nya
// fName: M. Fadli
// lName: Zein
// age: 22