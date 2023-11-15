function name(firstName, lastName, gender){
    var output;
    if(gender == 'male'){
        var output = 'Mr. ' + firstName + ' ' + lastName;
    } else if(gender == 'female'){
        var output = 'Mr. ' + firstName + ' ' + lastName;  
    }
    return output;
}

var fullName = name('Mahmuda', 'Tina', 'female');

//console.log(fullName);

// What can we return at all?

// return arithmetic operations
function example(){
    return 10+20;
    return(
        10+30*3
    )
}

// return multiple statements
function example2(){
    return(
        10+30*3
    )
}

// return on object 
function example3(){
    return{
        name: 'Abu sayam',
        skills: ['javascript, ', 'C++'],
        print: function(){
            console.log(this.name, this.skills);
        }
    }
}
var obj = example3();
obj.print();