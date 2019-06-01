//todo 27
const person ={
    firstName : 'M. Fadli',
    lastName : 'Zein',
    age : 22,
    email : 'm.fadli.zein.17@gmail.com',
    hobbies : ['music','coding'],
    address : {
        city: 'Arizona',
        zipcode: '86029'
    },
    getBirthYear: function(){
        return 1997;
    },
    getBirthYearByFunc: function(){
        return 2019-this.age;
    }
}; 

let val;

val = person;
console.log(val); // {firstName: "M. Fadli", lastName: "Zein", age: 22, email: "m.fadli.zein.17@gmail.com", hobbies: Array(2), …} address: {city: "Arizona", zipcode: "86029"} age: 22 email: "m.fadli.zein.17@gmail.com" firstName: "M. Fadli" getBirthYear: ƒ () getBirthYearByFunc: ƒ () hobbies: (2) ["music", "coding"] lastName: "Zein"

val = person.firstName; 
console.log(val); //M. Fadli

val = person['lastName'];
console.log(val); // Zein

//memanggil masing-masing value
val = person;
val = person.firstName; 
val = person['lastName'];
val = person.age;
val = person.hobbies[0];
val = person.hobbies[1];
val = person.address;
val = person.address.zipcode;
val = person.address.city;
val = person.address['zipcode'];
val = person.address['city'];
val = person.getBirthYear();
val = person.getBirthYearByFunc();
console.log(val);