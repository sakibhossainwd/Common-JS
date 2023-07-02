/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
*/


function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}
const watch1 = stopWatch();
console.log(watch1())
console.log(watch1())
console.log(watch1())