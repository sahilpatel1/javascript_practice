var myArray = [2,3,4,5,6]

var total = 0

myArray.forEach( function(element) {total += element} )

console.log(total)

//multiplication with nested arrays in js
function multiplyAll(arr){
    var product = 1;
    for(var i = 0; i < arr.length; i++)
    {
        for(var j = 0; j < arr[i].length; j++)
        {
            product *= arr[i][j]
        }
    }

    return product
}
var product = multiplyAll([[1,2], [3,4], [5,6,7]])

console.log(product)

//using the do while loop
var myArray = []
var i = 10

//only change here
do {
    myArray.push(i)
    i++;
}while(i < 5)

console.log(myArray)