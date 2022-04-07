//scope in js

//this is a global variable initialize with the keyword var
var myGlobal = 10;
function fun1()
{
    //assign 5 to oopsGlobal here
    //by default, if var keyword is not given, then the variable is accessible 
    //throughout the program

    //if var is used inside a function, then the scope is limited
    //to the function where var is used
    oopsGlobal = 5;
}

function fun2() {
    var output = ""
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal
    }
    if (typeof oopsGlobal != "undefined")
    {
        output += " oopsGlobal: " + oopsGlobal
    }

    console.log(output)
}

/*
myGlobal += 1
console.log(myGlobal)
fun1()
fun2()
*/

function myLocalScope(){
    var myVar = 5;
    console.log(myVar)

}

myLocalScope();


/*
can't access the below code since myVar is only accessible within the function
console.log(myVar)
*/

var outerWear = "T-Shirt"


//local variable takes precedence over global variable
function myOutfit() {
    var outerWear = "sweater"
    return outerWear
}

console.log(myOutfit()) //the function's local variable is printed here
console.log(outerWear) //the global variable is printed here

function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(10))

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5))

var sum = 0
function addThree() {
    sum += 3;
}

function addFive()
{
    sum += 5
}

console.log(addFive()) //undefined since no return value for function addFive()



