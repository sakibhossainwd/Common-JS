// array like object
function sum(a, b, c){
    const args = [...arguments];
    console.log(args);
    console.log(...arguments);
    const result = a + b + c;
    return result;
}

const total = sum(10, 20, 30, 40, 50, 60);
console.log(sum.length)
console.log(total);

