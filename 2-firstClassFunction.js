// First class function: 
// We can say First class function if we can meet with this 6 points.

function sayName(name) {
    return 'Hello, ' + name;
}

// 1 A function can be stored in a Variable.
var hello = sayName;
console.log(hello('Abu')); 

// 2 A function can be stored in an Array.
var arr = [1, 2, 3, function(){}]
arr.push(sayName)
console.log(arr);
// 3 A function can be stored in as an Object field or property.
var person ={
    name: 'Sayam',
    sayName: sayName,
    print: function(){
        console.log('hi');
    }
}

console.log(person);
// 4 We can create a function as we need.
var sum = 10 + (function(){return 20})(); // self invoking function
console.log(sum);

// 5 We can pass a function as an arguments.
function func(name, fun){
    return fun(name);
}
var result = func('Ayna', sayName)
console.log(result);

// 6 We can return function from another function.
function base(b){
    return function(n){
        var result = 1;
        for(var i =0; i<b; i++){
            result *= n;
        }
        return result;
    }
}

var power = base(2);
var result = power(5)
console.log(result);