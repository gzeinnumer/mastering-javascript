//todo 31
// if(true){
//     do something();
// } else{
//     do something();
// }

const id=100;

// equal to 
if(id == 100){
    console.log('if : Sama = 100');
} else{
    console.log('else : Tidak sama = 100');
}

//not equal
if(id != 100){
    console.log('if : Tidak sama = 100');
} else{
    console.log('else : Sama = 100');
}

//equal to value type
if(id === 100){
    console.log('Benar int');
} else{
    console.log('Salah bukan int');
}

if(id === '100'){
    console.log('Benar String');
} else{
    console.log('Salah bukan String');
}

if(id){
    console.log(`ID value is : ${id}`);
} else{
    console.log(`ID value is NULL`);
}

// megnhindari bug
// const id2 =100;
//menggunakan perintah dibawah untuk menghidari forceclose di web
if(typeof id2 != 'undefined'){
    console.log(`ID value is : ${id2}`);
} else{
    console.log(`ID value is NULL`);
}

const id3 =100;
if(typeof id3 != 'undefined'){
    console.log(`ID value is : ${id3}`);
} else{
    console.log(`ID value is NULL`);
}

//constant tidak bisa diisi, jadi kalau mau ganti isi dengan
var id4 = 100;
if(id4 = 200){
    console.log('Benar')
} 
//cuma mengganti isi id

const id5=100;
//Greater or less than
if(id5<200){
    console.log('Benar');
} else if(id5>500){
    console.log('Besar dari 500');
}else{
    console.log('Salah');
}

// logical Operator
const name = 'Alpha';
const age = 6;

if(age >0 && age <12){
    console.log(`${name} is a child`);
} else if(age >=12 && age <=19){
    console.log(`${name} is a teeneger`);
} else{
    console.log(`${naem} is a adult`);
}