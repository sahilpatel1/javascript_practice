//counting cards
var count = 0
const high = [10 ,"J" ,"Q" ,"K" ,"A"]
function cc(card){

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break
    }

    var holdbet = "Hold"
    if (count > 0){
        holdbet = "Bet"
    }
    return count + " " + holdbet
}

cc(2); console.log(cc('K')); console.log(cc(10)); cc('K'); cc('A');
console.log(cc(4));

