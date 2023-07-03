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