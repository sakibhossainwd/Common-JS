// primitive types are pass by value

let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 10;
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
console.log(output);


// object and array pass by referance
let student1 = {name: 'Jalil', partner: 'Borsha'};
let student2 = {namae: 'Raj', pertner: 'anika'};

function makeMovie(couple1, couple2){
    // console.log(couple1, couple2);
    couple1.name = 'Ononto';
    couple2.partner = 'mim';
}
// console.log(student1, student2);
makeMovie(student1, student2);
// console.log(student1, student2);
