//todo 36
//
greet();
function greet(){
    console.log('Hello Zein');
}

//
greetName('Zein');
function greetName(name){
    console.log(`Hello M. Fadli ${name}`);
}

//
console.log(greetNameReturn('M. Fadli Zein'));
function greetNameReturn(name){
    return `Hello ${name}`;
}

//
console.log(greetNameReturnMultiParam('M. Fadli', 'Zein'));
function greetNameReturnMultiParam(fname, lname){
    return `Hello ${fname} ${lname}`;
}

//
console.log(greetNameReturnMultiDefaultParam());
function greetNameReturnMultiDefaultParam(fname = 'M. Fadli', lname ='Zein'){
    //tidak disarankan 
    //if(typeof fname === 'undefined'){ fname ='M. Fadli'}
    //if(typeof lname === 'undefined'){ fname ='Zein'}
    return `Hello ${fname} ${lname}`;
}


// bisa diganti 1 atau 2 2 nya
console.log(greetNameReturnMultiDefaultParam('Muhammad Fadly', 'Zein'));
console.log(greetNameReturnMultiDefaultParam('Muhammad Fadly'));
function greetNameReturnMultiDefaultParamChange(fname = 'M. Fadli', lname ='Zein'){
    //tidak disarankan 
    //if(typeof fname === 'undefined'){ fname ='M. Fadli'}
    //if(typeof lname === 'undefined'){ fname ='Zein'}
    return `Hello ${fname} ${lname}`;
}

// harus deklarasi dulu baru bisa panggil
const square = function(x=8){
    return x*x;
}
console.log(square());
console.log(square(7));

//IIFEs
(function(){
    console.log('Hello');
})();

//IIFEs with param
(function(name){
    console.log(`Hello ${name}`);
})('Zein');