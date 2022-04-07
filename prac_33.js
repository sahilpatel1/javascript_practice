//manipulating complex objects
var myMusic = [
    {
        "artist" : "Billy Joel",
        "title" : "Piano Man",
        "release_year" : 1973,
        "formats" : [
            "CD", 
            "8T",
            "LP"
        ],
        "gold" : true

    },
    {
        "artist" : "Beau Carnes",
        "title" : "Cereal Man",
        "release_year" : 2003,
        "formats" : [
            "YouTube video", 
        ]
    }
    
]

//console.log(myMusic[1].formats)

//Accessing nested objects
var myStorage = {
    "car" : {
        "inside" : {
            "glove box" : "maps",
            "passenger seat" : "crumbs",
        },
        "outside" : {
            "trunk" : "jack"
        }
    }
}

console.log(myStorage.car.inside["glove box"]);
console.log(myStorage.car.outside.trunk)
console.log(myStorage.car.inside["passenger seat"])