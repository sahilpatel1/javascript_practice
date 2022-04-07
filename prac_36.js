//while loops
//run the same code multiple times
//2:10:34 - stopped
var myArray = []

let i = 0
while (i <= 4){
    myArray.push(i)
    i++
}

function add_array(n)
{
    console.log("You have this array to add : " + n)
    var total = 0 //scope limited to the function
    let z = 0
    while(z < n.length)
    {
        total += n[z]
        z++;
    }

    console.log("After adding the array, the answer is ", total)
}

add_array(myArray)

//another way to iterate over an array in js
let colors = ['red', 'green', 'blue']
colors.forEach(function(color) { console.log(color) })

//sorting the array
let numbers = [1,4,5,621,21,33,44]

//must give the comparator argument to sort the numbers in ascending
//order with js
numbers.sort( (a,b) => a - b);
console.log(numbers)

//using the concatenation function with arrays
let first_array = [1,2,3]
let second_array = [4,5,6]
let third_array = first_array.concat(second_array)

console.log(first_array)
console.log(second_array)
console.log(third_array)

function display()
{
    list =  [12,3,5,1,9]
    
    //sort the numbers in ascending order
    var ascending_list = list.sort( (a,b) => a -b)
    console.log("Small to big " + ascending_list)
    
    //sort the numbers in descending order
    var descending_list = list.sort( (a,b) => b - a)
    
    console.log("Big to small " + descending_list)    
}

display()