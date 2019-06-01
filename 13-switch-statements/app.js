//todo 33

const color = 'blue';

switch(color){
    case 'red':
        console.log('warna merah');
        break;
    case 'yellow':
        console.log('warna kuning');
        break;
    case 'blue':
        console.log('warna biru');
        break;
    default:
        console.log('buka warna');
        break;
}

let day;

switch(new Date().getDay()){
    case 0:
        day='Sunday';
        break;
    case 1:
        day='Monday';
        break;
    case 2:
        day='Tuesday';
        break;
    case 3:
        day='Wednesday';
        break;
    case 4:
        day='Thursday';
        break;
    case 5:
        day='Friday';
        break;
    case 6:
        day='Saturday';
        break;
}

console.log(day);