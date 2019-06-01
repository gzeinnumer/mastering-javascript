//todo 44

//global scope
var a=1;
let b=2;
const c=3;

function local(){
    // local scope
    var a=4;
    let b=5;
    const c=6;

    console.log(`Local Scope: ${a} ${b} ${c}`);
}

local();
console.log(`Local Scope: ${a} ${b} ${c}`);

if(true){
    var a=11;
    let b=12;
    const c=13;
}
console.log(`Local Scope: ${a} ${b} ${c}`);