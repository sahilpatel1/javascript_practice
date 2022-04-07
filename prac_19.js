//challenge write chained if/else statements for the conditions

function chain(val){
    if (val < 5){return "Tiny"}
    else if(val < 10){return "Small"}
    else if(val < 15){return "Medium"}
    else if (val < 20){return "Large"}
    else {return "Huge"}
}

//arrays
const num_values = [4,9,10,15,19,20,21]

for(let i = 0; i < num_values.length; i++){
    console.log(num_values[i] + " -> " + chain(num_values[i]))
}