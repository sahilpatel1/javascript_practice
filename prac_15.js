//equality operator -> == and === 

function testEqual(val){

    //checking if the value of the variable is 12
    if (val == 12){
        return "Equal"
    }
    return "Not Equal"
}

//change this value to test
//console.log(testEqual(15))

function testStrict(val){
    if (val === 7){
        return "Equal"
    }
    return "Not Equal"
}



//console.log(testStrict(7))

function compareEquality(a,b){
    //performs a type conversion
    if (a == b){
        return "Equal"
    }
    return "Not Equal"
}

console.log(compareEquality(10, "10"))

function testNotEqual(val){
    if (val != 99){
        return "Not Equal"
    }
    return "Equal"
}


console.log(testNotEqual(10))

//comparison with the strict inequality operator
function testStricNotEqual(val){
    if (val !== 17){
        return "Not Equal"
    }
    return "Equal"
}

console.log(testStricNotEqual(10))