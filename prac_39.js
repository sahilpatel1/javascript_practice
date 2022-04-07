var ourArray = []

for (var i = 10; i > 0; i -= 2){
    ourArray.push(i)
}

console.log(ourArray)

var myArray = []

for (var i = 9; i > 0; i -= 2){
    myArray.push(i)
}

console.log(myArray)

myArray.unshift(1)


//this array now has duplicates
console.log(myArray)

//removing the duplicates by converting the list into set then back to list

myArray = [...new Set(myArray)]

console.log(myArray)
