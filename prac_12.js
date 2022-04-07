//assignment with a returned value from a function

var changed = 0;

function change(num)
{
    return (num + 5) / 3;
}

changed = change(10)

var processed = 0

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(5)

console.log(changed) //outputs 5
console.log(processed) //outputs 1.6

