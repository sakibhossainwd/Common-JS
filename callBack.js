function greeting(greetingHandler, name){
    greetingHandler(name);
}
// const name = 'Halim mama';
// const numbers = [45, 69, 73];
// const laptop = {modelj: 'z1500', brand: 'lenovo', price: 85000,};
function greetingHandler(name){
    console.log('Good Morning', name);
}
function greetingEvening(name){
    console.log('Good Evening', name);
}
function greetingNight(name){
    console.log('Good Night',  name)
}

greeting(greetingHandler, 'Sakib Hossain')
greeting(greetingEvening, 'Sakib Hossain')
greeting(greetingNight, 'Sakib Hossain')