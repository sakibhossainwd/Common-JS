print10();
for(let i = 0; i < 5; i++){
    console.log(i);
}
console.log('outside', i);

function print5(){
    console.log('inSide prints', 5);
}
var print10 = function(){
    console.log('inSide pritn10', 10);
}