//function pop removes the last element from the array

var ourArray = [1,2,3]
var removedFromOurArray = ourArray.pop()

//removedFromOurArray now equals 3, ourArray now equals [1,2]

var myArray = [ ["John", 23], ["cat", 2] ];

var removedFromOurArray = myArray.pop();


console.log(myArray)

//shift() removes the first element of the array
var ourArray = ["Simpson", "J", ["cat"]]
var removedFromOurArray = ourArray.shift()
console.log(ourArray)

var myArray = [["John", 23], ["dog", 3]]

var removedFromOurArray = myArray.shift()
console.log(myArray)