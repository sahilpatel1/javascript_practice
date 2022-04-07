//nested arrays
var myPlants = [
    {
        type: "flowers",
        list : [
            "rose",
            "tulip",
            "dandelion"
        ]

    }, 

    {
        type : "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var value = myPlants[1].list[1]

console.log(value)