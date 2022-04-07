function switchOfStuff(val)
{
    answer = ""
    switch(val){
        case "a":
            answer = "apple"
            break;
        case "b":
            answer = "bird"
            break;
        case "c":
            answer = "cat"
            break;
        
        //execute this code when no argument matches the above
        //letters
        default:
            answer = "stuff"
            break;
    }
    return answer;
}

console.log(switchOfStuff("a"))
console.log(switchOfStuff("b"))
console.log(switchOfStuff("c"))
console.log(switchOfStuff(5))