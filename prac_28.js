//In js, objects are defined with curly braces or '{}'
//and accessed using objects' properties to get the corresponding values


var ourDog = {
    "name" : "Camper",
    "Legs" : 4,
    "friends" : ['everything']
};

var myDog = {
    "name" : "Quincy",
    "legs" : 3,
    "friends" : []
}

var testObj = {
    "an entree" : "hamburger",
    "my side" : "veggies",
    "the drink" : "water"
}


//two ways to access the properties
//dot notation -> object_name.property_name
//bracket notation -> object_name[property_name]
var hatValue = ourDog.name;
var hatValue_2 = ourDog['name']
var k = testObj['my side']


console.log(hatValue)
console.log(hatValue_2)
console.log(k)