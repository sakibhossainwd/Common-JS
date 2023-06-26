// 8 way to get undefined
/*
1. variable that is not initialized will undedined
2. function with no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array alement outside of the index range
7. deleting an element inside an aray
8. set a value directly to undefined
*/

// live code example

// 1
let first ;
// console.log(first);

// 2 
function secsond(a , b){
    const total = a + b;
}
const result = secsond()
// console.log(result)

// 3
function third(a, b, c, d){
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
const result1 = third(5, 10);
console.log(result1);

// 4
function noNegative(a, b){
    if(a < 0 || b < 0){
        return
    }
    return a + b
}
const total = noNegative(5, -2);
console.log(total);

// 5
const fifth = {id: 2, name: 'sakib', age: 20};
console.log(fifth.age, fifth.skill);

// 6


