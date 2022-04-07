//equality operator
function testGreaterThan(val){
    if (val > 100){
        return "Over 100"
    }
    if (val > 10){
        return "Over 10"
    }
    return "10 or Under"
}


console.log(testGreaterThan(10))

//greater than or equal to operator
function testGreaterOrEqual(val){
    if (val >= 20){
        return "20 or over"
    }
    if (val >= 10){
        return "10 or Over"
    }

    return "Less than 10"
}

console.log(testGreaterOrEqual(10))

//comparison with the less than operator
function testLessThan(val){
    if (val < 25){
        return "Under 25"

    }
    if (val < 55){
        return "Under 55"
    }

    return "55 over Over"
}

console.log(testLessThan(10))

//comparison with the less than or equal to operator


//ternary operator
//that takes three operands: a condition followed by a question
//mark (?), then an expression to execute if the condition is
//truthy followed by a colon (:), and finally the expression
//to execute if the condition is falsy

function getFee(isMember){
    return (isMember ? "$2.00" : "$10.00")
}

console.log(getFee(false))

function testLessOrEqual(val)
{
    if (val <= 12) {
        return "Smaller than or equal to 12"
    } 

    if (val <= 24){
        return "Smaller Than or equal to 24"
    }

    return "More than 24"
}

console.log(testLessOrEqual(10))