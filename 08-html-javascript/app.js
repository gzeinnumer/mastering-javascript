//todo 23
const name = 'Zein';
const age = 22;
const job = 'Programmer';
const city = 'Padang';

let html;

//tampa Template String (es5)

html = '<ul><li>Name : ' + name + '</li><li>Age  : ' + age + '</li><li>Job  : ' + job + '</li><li>City : ' + city + '</li></ul>';

function hello(){
    return 'Hello';
}

html =
    '<ul>' +
        '<li>Name : ' + name + '</li>' +
        '<li>Age : ' + age + '</li>' +
        '<li>Job : ' + job + '</li>' +
        '<li>City : ' + city + '</li>' +
        '<li>Function : ' + hello() + '</li>' +
    '</ul>';

//tampa Template String (es6)
html = `
    <ul>
        <li>Name : ${name}</li>
        <li>Age : ${age}</li>
        <li>Job : ${job}</li>
        <li>City : ${city}</li>
        <li>Sum : ${5+2}</li>
        <li>Function :  ${hello()}</li>
        <li>if : ${age > 20 ? 'Over 20' : 'Under 20'}</li>
    </ul>
`;

document.body.innerHTML = html;