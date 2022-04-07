//modifying arrays in js
var ourArray = [18,64,99]
ourArray[1] = 45; //ourArray now equals [18,45,99]

//setup 

var myArray = [18, 64,99]

console.log("Before changing the array " + myArray)

myArray[0] = 45;

console.log("After changing the array " + myArray)

//accessing multi-dimensional arrays
var myArray = [ [1,2,3], [4,5,6], [7,8,9], [ [10,11,12] , 13, 14 ] ]


//the below code accesses first element 
//inside the 4th element in myArray
var myData = myArray[3][0][0]

console.log(myData)

//push() function inserts element into an array
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"])

console.log(ourArray)


var myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3])

//using the flat function to have a single array
console.log(myArray.flat())