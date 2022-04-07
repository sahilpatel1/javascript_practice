//testing objects for properties
var myObj = {
    gift : "pony",
    pet : "kitten",
    bed : "sleigh"
}

function checkObj (checkProp){

    //object_name.hasOwnProperty(property_parameter)
    //checks whether a property exists in an object 
    //and returns true of false
    if (myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp]
    } else{
        return "Not Found"
    }
    
}

console.log(checkObj("gift"))
console.log(checkObj("hello"))