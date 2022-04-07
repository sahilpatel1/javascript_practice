//strings are immutable (cannot be altered once created)

var myStr = "Jello World"

myStr = "Hello World"

console.log(myStr)

//getting the last character in a string
var firstName = "Ada"
var firstLetterOfFirstName = firstName[firstName.length - 1]


var lastName = "LoveLace"
var lastLetterOfLastName = lastName[lastName.length - 1]

console.log(firstLetterOfFirstName)
console.log(lastLetterOfLastName)

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){

    var result = "";

    result += "The " + myAdjective + " " +  myNoun + " " + myVerb + " " + "to the store " + myAdverb + "."

    return result;
}

console.log(wordBlanks("bike", "slow", "flew", "slowly"));

