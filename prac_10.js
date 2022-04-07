var myList = [ ["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12] ] 

function ourReusableFunction(){
    console.log("Heyya, world")

}

function loop_through(array)
{
    for(let i = 0; i < array.length; i++){
        console.log(i + 1, array[i]);
    }
}

loop_through(myList)


//function is being called
ourReusableFunction()

function ourFunctionWithArgs(a,b) {
    console.log(a - b)
}

ourFunctionWithArgs(10,5) //outputs 5

function functionWithArgs(a,b)
{
    console.log(a + b)
}

functionWithArgs(10,5)

