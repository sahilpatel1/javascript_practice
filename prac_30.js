//updating object properties

var ourDog = 
{
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everything!"]
}

console.log("Before change \n " + JSON.stringify(ourDog))
ourDog.name = "Happy Camper"
console.log("After change \n " + JSON.stringify(ourDog))


var myDog = {
    'name' : "Coder",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["freeCodeCamp Campers"]
}

console.log("Before change \n " + JSON.stringify(myDog))

//adding new properties to the object
myDog['bark'] = 'woof!'

//updating existing properties to the object
myDog.friends = ["freeCodeCamp guys"]
myDog.name = "Happy Coder"
console.log("After change \n " + JSON.stringify(myDog))

//deleting object's properties
delete myDog.tails;
console.log("After change \n " + JSON.stringify(myDog))