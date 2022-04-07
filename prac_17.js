function testLogicalAnd(val){

    if (val >= 50 && val <= 25)
    {
        return "Yes"
    }
    return "No"
}

console.log(testLogicalAnd(35))

function testLogicalOr(val){

    if (val < 10 || val > 20){
        return "Outside"
    }
    return "Inside"
}

console.log(testLogicalOr(5))

function testElse(val){
    var result = "";

    if (val > 5){
        result = "Bigger than 5"
    }

    else{
        result = "5 or Smaller"
    }

    return result

}

console.log(testElse(5))

function testElseIf(val){
    if (val > 10){
        return "Greater than 10"
    }
    else if(val < 5){
        return "Smaller than 5"
    }
    else{
        return "Between 5 and 10"
    }

}

console.log(testElseIf(6))