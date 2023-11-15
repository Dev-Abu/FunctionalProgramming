// Imperative way
var name = 'Jhon';
var greet = 'Hello';

console.log(greet + ', ' + name);


// Decretive Way
function greetings(greet, name){
    return greet + ', ' + name;
}

console.log(greetings('Hello' , 'Tina'))