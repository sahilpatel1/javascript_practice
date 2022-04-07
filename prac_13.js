function nextInLine(arr, item){

    //you can also use .push() function on the array to add item to the end 
    //of the list
    arr[arr.length] = item //add an item to the end of the list
    return arr.shift()
}

var testArr = [1,2,3,4,5]


//json.stringify is used to print a string representation of an array in js
console.log("Before: " + JSON.stringify(testArr))
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr))