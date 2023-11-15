// we cant get access inner function from  global 
// but we can get all access outer to inner

function outer(){
    console.log('Im outer function');
    function inner(){
        console.log('Im inner function');
    }
    inner();
   
}

//outer();

function add(a, b){
    function sum(){
        return a+b;
    }
    function sub(){
        return a-b;
    }
    function multi(){
        return a*b;
    }
    function div(){
        return a/b;
    }
    return sum() + sub() + multi() + div();
  
}

console.log(add(10, 20));