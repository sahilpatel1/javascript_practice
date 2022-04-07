//golf code program

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]


function golfScore(par, strokes){

    //1
    if (strokes == 1){
        return names[0]
    }

    //2
    else if(strokes <= par - 2){
        return names[1]
    }

    //3
    else if(strokes == par - 1){
        return names[2]
    }

    //4
    else if(strokes == par){
        return names[3]
    }

    //5
    else if(strokes == par + 1){
        return names[4]
    }

    //6
    else if(strokes == par + 2){
        return names[5]
    }
    else if(strokes >= par + 3){return names[6]}

    return "Change Me"
}

//testing the code
console.log(golfScore(5,4))
console.log(golfScore(5,8))
